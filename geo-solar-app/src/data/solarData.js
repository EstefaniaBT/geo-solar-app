export const datosSuelos = [
  { 
    id: 'esmeraldas', 
    provincia: 'Esmeraldas', 
    region: 'Costa', 
    tipo: 'Tierra arcillosa pesada', 
    albedo: 'Bajo', 
    riesgoCorrosion: 'Alto' 
  },
  { 
    id: 'pichincha', 
    provincia: 'Pichincha', 
    region: 'Sierra', 
    tipo: 'Cangahua en valles', 
    albedo: 'Alto', 
    riesgoCorrosion: 'Bajo' 
  },
  { 
    id: 'galapagos', 
    provincia: 'Galápagos', 
    region: 'Insular', 
    tipo: 'Roca volcánica negra', 
    albedo: 'Bajo', 
    riesgoCorrosion: 'Extremo' 
  }
];

export const catalogoPaneles = [
  { 
    id: 'p1', 
    modelo: 'Módulo Monocristalino Bifacial', 
    idealParaAlbedo: 'Alto',
    ventaja: 'Aprovecha el reflejo de suelos claros como la arena volcánica.',
    certificacion: 'Estándar'
  },
  { 
    id: 'p2', 
    modelo: 'Módulo con recubrimiento Anti-Salitre', 
    idealParaAlbedo: 'Bajo',
    ventaja: 'Soporta corrosión y acidez extrema sin degradarse.',
    certificacion: 'IEC 61701 (Niebla Salina)'
  }
];