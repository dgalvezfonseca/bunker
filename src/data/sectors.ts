import { images } from "./images";

export type Sector = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export const sectors: Sector[] = [
  {
    id: "residencial",
    name: "Residencial",
    description: "Casas, departamentos y fraccionamientos con acceso remoto desde el celular.",
    image: images.sectorResidential,
  },
  {
    id: "comercial",
    name: "Comercial",
    description: "Locales, tiendas y oficinas con control de accesos y video verificado.",
    image: images.sectorCommercial,
  },
  {
    id: "corporativo",
    name: "Corporativo",
    description: "Edificios y sedes múltiples con administración centralizada.",
    image: images.sectorCorporate,
  },
  {
    id: "industrial",
    name: "Industrial",
    description: "Naves, patios y perímetros extensos con equipos de uso rudo.",
    image: images.sectorIndustrial,
  },
];
