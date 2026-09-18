# Directus local

Este entorno es independiente del frontend. No publica PostgreSQL; Directus solo queda disponible en `127.0.0.1:8055`.

## Requisitos (Windows 11)

- Docker Desktop instalado, iniciado y con contenedores Linux habilitados.
- PowerShell.

## Configurar variables

Desde la raíz del repositorio:

```powershell
Copy-Item directus/.env.example directus/.env
notepad directus/.env
```

Reemplaza todos los valores `replace-with-...`. Usa valores únicos y largos para `DIRECTUS_SECRET`, `DIRECTUS_ADMIN_PASSWORD` y `POSTGRES_PASSWORD`. `DIRECTUS_ADMIN_EMAIL` será el usuario administrador creado solamente durante el primer arranque.

## Levantar

```powershell
cd directus
docker compose config
docker compose up -d
docker compose ps
docker compose logs -f
```

Abre http://localhost:8055 e inicia sesión con `DIRECTUS_ADMIN_EMAIL` y `DIRECTUS_ADMIN_PASSWORD` de tu archivo `.env`.

## Detener, logs y reiniciar

```powershell
docker compose down
docker compose logs -f
docker compose restart
```

`down` conserva la base de datos (Docker volume) y los archivos en `uploads/`. Para volver a levantarlo: `docker compose up -d`.

## Actualizar Directus

1. Revisa las notas de versión y compatibilidad de Directus.
2. Cambia de forma explícita la etiqueta `directus/directus:11.5.1` en `docker-compose.yml`.
3. Ejecuta:

```powershell
docker compose pull directus
docker compose up -d
docker compose logs -f directus
```

Directus ejecuta sus migraciones al iniciar. Conserva un respaldo del volumen antes de una actualización importante.

## Borrar completamente las pruebas

Esto elimina definitivamente la base de datos local y los uploads. Con los contenedores detenidos, ejecuta:

```powershell
docker compose down -v
Remove-Item -Recurse -Force .\uploads\*
```

No ejecutes esos comandos si deseas conservar los datos. Después puedes recrear `uploads` con `New-Item -ItemType Directory uploads`.
