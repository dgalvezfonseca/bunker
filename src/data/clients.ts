import type { Client } from "./cms";
import ventoLogo from "../../assets/vento.webp";
import mazdaLogo from "../../assets/mazda.webp";
import changanLogo from "../../assets/changan.webp";
import assistcargoLogo from "../../assets/assistcargo.webp";
import disenosKirLogo from "../../assets/ODKIR.webp";
import biogroupLogo from "../../assets/biogroup.webp";
import asegurimexLogo from "../../assets/asegurimex.webp";
import andolavandoLogo from "../../assets/andolavando.webp";
import aquabalanceLogo from "../../assets/aquabalance.webp";

/** Se publica únicamente con autorización verificable de cada cliente. */
export const clients: Client[] = [
  { id: "vento", name: "Vento", logo: { id: "vento", src: ventoLogo, alt: "Logotipo de Vento" } },
  { id: "mazda", name: "Mazda", logo: { id: "mazda", src: mazdaLogo, alt: "Logotipo de Mazda" } },
  {
    id: "changan",
    name: "Changan",
    logo: { id: "changan", src: changanLogo, alt: "Logotipo de Changan" },
  },
  {
    id: "assistcargo",
    name: "Assistcargo",
    logo: { id: "assistcargo", src: assistcargoLogo, alt: "Logotipo de Assistcargo" },
  },
  {
    id: "disenos-kir",
    name: "Diseños KIR",
    logo: { id: "disenos-kir", src: disenosKirLogo, alt: "Logotipo de Diseños KIR" },
  },
  {
    id: "biogroup",
    name: "Biogroup",
    logo: { id: "biogroup", src: biogroupLogo, alt: "Logotipo de Biogroup" },
  },
  {
    id: "asegurimex",
    name: "Asegurimex",
    logo: { id: "asegurimex", src: asegurimexLogo, alt: "Logotipo de Asegurimex" },
  },
  {
    id: "andolavando",
    name: "Andolavando",
    logo: { id: "andolavando", src: andolavandoLogo, alt: "Logotipo de Andolavando" },
  },
  {
    id: "aquabalance",
    name: "Aquabalance",
    logo: { id: "aquabalance", src: aquabalanceLogo, alt: "Logotipo de Aquabalance" },
  },
];
