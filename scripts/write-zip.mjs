import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { relative, resolve, sep } from "node:path";
import { crc32, deflateRawSync } from "node:zlib";

/**
 * Minimal, dependency-free ZIP writer for the NEUBOX/cPanel package.
 * - Entry names are relative to the root with "/" separators and no "./" prefix
 *   (Windows Explorer hides "./"-prefixed entries, so the archive looked empty).
 * - Unix permissions 0644 (files) / 0755 (dirs), applied by cPanel's unzip.
 * - Deterministic order (sorted). No ZIP64: fails loudly if limits are exceeded.
 */

function dosDateTime(date) {
  const year = Math.max(date.getFullYear(), 1980);
  return {
    time: (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2),
    date: ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate(),
  };
}

async function collect(root, directory, items) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const full = resolve(directory, entry.name);
    const name = relative(root, full).split(sep).join("/");
    const isDir = entry.isDirectory();
    items.push({ name: isDir ? `${name}/` : name, full, isDir, mtime: (await stat(full)).mtime });
    if (isDir) await collect(root, full, items);
  }
  return items;
}

export async function writeZip(sourceDir, zipPath) {
  const items = (await collect(sourceDir, sourceDir, [])).sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0,
  );
  const UTF8 = 0x0800;
  const parts = [];
  const central = [];
  let offset = 0;

  for (const item of items) {
    const name = Buffer.from(item.name, "utf8");
    const data = item.isDir ? Buffer.alloc(0) : await readFile(item.full);
    const deflated = item.isDir ? data : deflateRawSync(data, { level: 9 });
    const stored = item.isDir || deflated.length >= data.length;
    const body = stored ? data : deflated;
    const method = stored ? 0 : 8;
    const crc = item.isDir ? 0 : crc32(data);
    const { time, date } = dosDateTime(item.mtime);
    if (body.length > 0xffffffff || offset > 0xffffffff) throw new Error("ZIP demasiado grande");

    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(UTF8, 6);
    local.writeUInt16LE(method, 8);
    local.writeUInt16LE(time, 10);
    local.writeUInt16LE(date, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(body.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(name.length, 26);
    local.writeUInt16LE(0, 28);
    parts.push(local, name, body);

    const mode = item.isDir ? 0o040755 : 0o100644;
    const header = Buffer.alloc(46);
    header.writeUInt32LE(0x02014b50, 0);
    header.writeUInt16LE((3 << 8) | 20, 4); // made by Unix, spec 2.0
    header.writeUInt16LE(20, 6);
    header.writeUInt16LE(UTF8, 8);
    header.writeUInt16LE(method, 10);
    header.writeUInt16LE(time, 12);
    header.writeUInt16LE(date, 14);
    header.writeUInt32LE(crc, 16);
    header.writeUInt32LE(body.length, 20);
    header.writeUInt32LE(data.length, 24);
    header.writeUInt16LE(name.length, 28);
    header.writeUInt32LE(((mode << 16) | (item.isDir ? 0x10 : 0)) >>> 0, 38);
    header.writeUInt32LE(offset, 42);
    central.push(header, name);

    offset += local.length + name.length + body.length;
  }

  if (items.length > 0xffff) throw new Error("Demasiadas entradas para ZIP sin ZIP64");
  const centralDirectory = Buffer.concat(central);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(items.length, 8);
  end.writeUInt16LE(items.length, 10);
  end.writeUInt32LE(centralDirectory.length, 12);
  end.writeUInt32LE(offset, 16);

  await writeFile(zipPath, Buffer.concat([...parts, centralDirectory, end]));
  return items.map((item) => item.name);
}
