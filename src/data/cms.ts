/**
 * Contratos de contenido independientes de Directus.
 * La fase de integración solo debe adaptar sus respuestas a estos tipos.
 */
export type Media = {
  id: string;
  src: string;
  alt: string;
};

export type Brand = { id: string; name: string; logo?: Media };

export type Client = {
  id: string;
  name: string;
  logo?: Media;
  sector?: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  category: string;
  description: string;
  cover: Media;
  technologies: string[];
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt?: string;
  cover?: Media;
  category?: string;
};
