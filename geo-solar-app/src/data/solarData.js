// ============================================================
// BASE DE DATOS — GEOLOGÍA DE SUELOS Y PANELES BIFACIALES
// Plataforma Geofotovoltaica Ecuador
// Fuente suelos: matriz técnica EPN (granulometría, humedad,
// resistividad, corrosión). Albedo estimado por tipo de
// superficie según literatura de reflectividad de suelos.
// Fuente paneles: fichas técnicas comerciales de módulos
// bifaciales N-Type/TOPCon vigentes en el mercado.
// ============================================================

// Referencia general de albedo (para mostrar en la UI como
// tooltip/explicación de "qué significa este valor")
export const referenciaAlbedo = {
  definicion:
    'El albedo es la fracción de radiación solar que una superficie refleja respecto a la que recibe. Va de 0 (absorbe casi todo, superficie muy oscura) a 1 (refleja casi todo, superficie muy clara). Es el dato clave para estimar cuánta luz "extra" captará la cara posterior de un panel bifacial.',
  escala: [
    { rango: '0.05 - 0.15', categoria: 'Muy bajo', ejemplo: 'Suelos oscuros húmedos, roca volcánica negra, lodo, pantano', gananciaBifacialEsperada: 'Mínima (0-4%)' },
    { rango: '0.15 - 0.22', categoria: 'Bajo', ejemplo: 'Arcillas comunes, tierra fértil, suelo con vegetación', gananciaBifacialEsperada: 'Baja (4-7%)' },
    { rango: '0.22 - 0.28', categoria: 'Medio', ejemplo: 'Suelos mixtos, arcilla con piedra, terrenos semiáridos', gananciaBifacialEsperada: 'Moderada (7-11%)' },
    { rango: '0.28 - 0.35', categoria: 'Alto', ejemplo: 'Arena seca, cangahua, ceniza volcánica clara', gananciaBifacialEsperada: 'Buena (11-15%)' },
    { rango: '0.35 - 0.45+', categoria: 'Muy alto', ejemplo: 'Arena desértica muy clara, superficies con grava blanca artificial', gananciaBifacialEsperada: 'Excelente (15-20%+)' }
  ],
  nota: 'Para máxima ganancia bifacial se recomiendan superficies claras (hormigón, gravilla blanca, arena) y estructuras elevadas del suelo (ground-mount o carport), evitando sombra propia sobre la cara trasera.'
};

// ------------------------------------------------------------
// SUELOS POR PROVINCIA
// ------------------------------------------------------------
export const datosSuelos = [

  // ============ REGIÓN COSTA ============
  {
    id: 'esmeraldas', provincia: 'Esmeraldas', region: 'Costa',
    tipo: 'Tierra arcillosa pesada', granulometria: 'Fino y denso, tipo lodo seco',
    humedad: 'Muy húmedo (retiene agua)', climaSubsuelo: 'Cálido (22-28°C)',
    corrosion: 'Alto peligro (suelo ácido que oxida metales)',
    resistividad: 'Baja (<50 Ω·m) — fácil conexión a tierra, pero corrosivo para el acero',
    albedo: 0.13, albedoCategoria: 'Bajo',
    albedoDescripcion: 'Suelo oscuro y saturado que absorbe la mayoría de la radiación reflejada; aporte bajo a la cara posterior bifacial.',
    viabilidad: 'Media',
    viabilidadDescripcion: 'Terreno inestable, requiere bases profundas y pintura anticorrosiva. La ganancia bifacial será limitada por el bajo albedo; conviene compensar con paneles de alta eficiencia frontal.'
  },
  {
    id: 'manabi', provincia: 'Manabí', region: 'Costa',
    tipo: 'Arcilla inestable (expansiva)', granulometria: 'Fino con zonas de arena fina',
    humedad: 'Cambiante (muy seco o inundado)', climaSubsuelo: 'Cálido (22-28°C)',
    corrosion: 'Riesgo moderado (sales del mar)',
    resistividad: 'Moderada (50-500 Ω·m)',
    albedo: 0.18, albedoCategoria: 'Bajo-Medio',
    albedoDescripcion: 'Superficie mixta arcilla/arena; reflectividad limitada y variable según humedad estacional.',
    viabilidad: 'Media',
    viabilidadDescripcion: 'Buena radiación disponible, pero el suelo se expande con la lluvia y puede desalinear la estructura. Exige bases reforzadas.'
  },
  {
    id: 'guayas', provincia: 'Guayas', region: 'Costa',
    tipo: 'Lodo arcilloso blando de río', granulometria: 'Muy fino y suave',
    humedad: 'Excesivo (nivel freático superficial)', climaSubsuelo: 'Cálido (22-28°C)',
    corrosion: 'Alto peligro (agua estancada y sales oxidan)',
    resistividad: 'Muy baja (<50 Ω·m) — fácil puesta a tierra',
    albedo: 0.10, albedoCategoria: 'Muy bajo',
    albedoDescripcion: 'Lodo oscuro saturado, la reflectividad es de las más bajas del país; la ganancia bifacial será casi nula.',
    viabilidad: 'Baja',
    viabilidadDescripcion: 'Suelo muy blando, riesgo de hundimiento de maquinaria; requiere bases de cemento anchas. No es zona prioritaria para bifacial.'
  },
  {
    id: 'los_rios', provincia: 'Los Ríos', region: 'Costa',
    tipo: 'Tierra fértil fina y limosa', granulometria: 'Polvo fino y arena suave',
    humedad: 'Media constante', climaSubsuelo: 'Cálido (22-28°C)',
    corrosion: 'Sin peligro (suelo neutro)',
    resistividad: 'Moderada (50-500 Ω·m)',
    albedo: 0.17, albedoCategoria: 'Bajo-Medio',
    albedoDescripcion: 'Suelo fértil de tono medio; reflectividad discreta, típica de tierra de cultivo.',
    viabilidad: 'Alta',
    viabilidadDescripcion: 'Suelo firme y estable, ideal para clavar estructuras directamente. El único riesgo real son inundaciones de ríos cercanos.'
  },
  {
    id: 'el_oro', provincia: 'El Oro', region: 'Costa',
    tipo: 'Piedras al norte / suelo salino al sur', granulometria: 'Piedra suelta al norte, arcilla al sur',
    humedad: 'Seco en el sur, húmedo al norte', climaSubsuelo: 'Cálido (22-28°C)',
    corrosion: 'Alto peligro en el sur (la sal ataca el cemento)',
    resistividad: 'Baja a moderada',
    albedo: 0.24, albedoCategoria: 'Medio',
    albedoDescripcion: 'Zona con piedra y suelo más claro que otras provincias costeras; reflectividad moderada.',
    viabilidad: 'Alta',
    viabilidadDescripcion: 'Buena radiación y suelo firme, especialmente al sur. El hormigón de las bases debe ser especial anti-sulfatos.'
  },
  {
    id: 'santa_elena', provincia: 'Santa Elena', region: 'Costa',
    tipo: 'Arena seca y firme (terreno desértico)', granulometria: 'Arena de grano medio a grueso',
    humedad: 'Muy seco (<10%)', climaSubsuelo: 'Muy cálido',
    corrosion: 'Sin peligro',
    resistividad: 'Alta (>500 Ω·m) — el suelo seco no conduce bien la electricidad',
    albedo: 0.32, albedoCategoria: 'Alto',
    albedoDescripcion: 'Arena clara y seca, uno de los mejores albedos del país; alta ganancia esperada en la cara posterior bifacial.',
    viabilidad: 'Muy alta',
    viabilidadDescripcion: 'Excelente para hincado de postes, suelo firme y no deformable. La malla de puesta a tierra requerirá tratamiento químico por la alta resistividad, pero el rendimiento bifacial compensa.'
  },
  {
    id: 'santo_domingo', provincia: 'Santo Domingo de los Tsáchilas', region: 'Costa',
    tipo: 'Tierra volcánica esponjosa', granulometria: 'Tierra porosa y liviana',
    humedad: 'Muy húmedo', climaSubsuelo: 'Templado',
    corrosion: 'Riesgo bajo',
    resistividad: 'Moderada (50-500 Ω·m)',
    albedo: 0.14, albedoCategoria: 'Bajo',
    albedoDescripcion: 'Tierra volcánica oscura y porosa, absorbe gran parte de la radiación; ganancia bifacial baja.',
    viabilidad: 'Media',
    viabilidadDescripcion: 'Firme en seco, pero se satura fácilmente con lluvia intensa y pierde capacidad portante.'
  },

  // ============ REGIÓN SIERRA ============
  {
    id: 'carchi', provincia: 'Carchi', region: 'Sierra',
    tipo: 'Tierra negra de páramo (orgánica)', granulometria: 'Fino y suelto',
    humedad: 'Moderada a alta', climaSubsuelo: 'Frío (8-14°C)',
    corrosion: 'Riesgo bajo',
    resistividad: 'Moderada',
    albedo: 0.11, albedoCategoria: 'Muy bajo',
    albedoDescripcion: 'Tierra orgánica muy oscura; reflectividad baja pese al buen clima frío, poco favorable para ganancia bifacial.',
    viabilidad: 'Media',
    viabilidadDescripcion: 'Suelo mecánicamente estable; el mayor reto es la topografía de montaña, no el suelo en sí.'
  },
  {
    id: 'imbabura', provincia: 'Imbabura', region: 'Sierra',
    tipo: 'Cangahua (tierra dura tipo roca)', granulometria: 'Polvo compactado muy duro',
    humedad: 'Seco', climaSubsuelo: 'Templado / Frío',
    corrosion: 'Sin peligro',
    resistividad: 'Moderada a alta',
    albedo: 0.27, albedoCategoria: 'Medio-Alto',
    albedoDescripcion: 'Superficie clara y compacta tipo ceniza volcánica endurecida; buena reflectividad.',
    viabilidad: 'Alta',
    viabilidadDescripcion: 'Muy firme para sostener estructuras, pero se ablanda con agua; exige buen drenaje perimetral.'
  },
  {
    id: 'pichincha', provincia: 'Pichincha', region: 'Sierra',
    tipo: 'Cangahua en valles secos', granulometria: 'Polvo cementado duro en valles',
    humedad: 'Muy seco en los valles', climaSubsuelo: 'Frío / Templado',
    corrosion: 'Sin peligro',
    resistividad: 'Alta (>500 Ω·m, suelo muy seco)',
    albedo: 0.29, albedoCategoria: 'Alto',
    albedoDescripcion: 'Cangahua clara y seca en valles como Pomasqui/Calderón; buen aporte a la cara posterior bifacial.',
    viabilidad: 'Muy alta',
    viabilidadDescripcion: 'Suelo plano, duro y estable, ideal para clavar estructuras firmemente. Zona de referencia para proyectos bifaciales en Sierra.'
  },
  {
    id: 'cotopaxi', provincia: 'Cotopaxi', region: 'Sierra',
    tipo: 'Arena fina volcánica (piedra pómez molida)', granulometria: 'Arena suelta sin fuerza',
    humedad: 'Seco', climaSubsuelo: 'Frío (8-14°C)',
    corrosion: 'Riesgo bajo',
    resistividad: 'Alta',
    albedo: 0.31, albedoCategoria: 'Alto',
    albedoDescripcion: 'Ceniza/pómez de tono claro, buena reflectividad, favorable para bifacial.',
    viabilidad: 'Media',
    viabilidadDescripcion: 'Terreno flojo: los postes pueden salirse fácilmente. Requiere anclajes con rosca o bases de cemento pese al buen albedo.'
  },
  {
    id: 'tungurahua', provincia: 'Tungurahua', region: 'Sierra',
    tipo: 'Tierra con piedras volcánicas enterradas', granulometria: 'Limo con bloques de roca ocultos',
    humedad: 'Normal', climaSubsuelo: 'Frío / Templado',
    corrosion: 'Sin peligro',
    resistividad: 'Moderada',
    albedo: 0.21, albedoCategoria: 'Medio',
    albedoDescripcion: 'Suelo mixto limo-roca, reflectividad intermedia.',
    viabilidad: 'Media',
    viabilidadDescripcion: 'Terreno engañoso: rocas ocultas pueden dañar la maquinaria de hincado. Requiere estudio previo con sensores.'
  },
  {
    id: 'chimborazo', provincia: 'Chimborazo', region: 'Sierra',
    tipo: 'Arenas movedizas y tierra seca suelta', granulometria: 'Arena fina que vuela con el viento',
    humedad: 'Muy seco', climaSubsuelo: 'Frío',
    corrosion: 'Sin peligro',
    resistividad: 'Muy alta (>2000 Ω·m, roca basáltica)',
    albedo: 0.33, albedoCategoria: 'Alto',
    albedoDescripcion: 'Arena clara y seca de alta montaña; uno de los mejores albedos de la Sierra.',
    viabilidad: 'Media-Alta',
    viabilidadDescripcion: 'Excelente reflectividad, pero el viento fuerte puede erosionar las bases. Requiere protección contra el viento y malla de tierra con mejoradores químicos.'
  },
  {
    id: 'bolivar', provincia: 'Bolívar', region: 'Sierra',
    tipo: 'Tierra arcillosa de montaña', granulometria: 'Fino y pegajoso',
    humedad: 'Alta', climaSubsuelo: 'Frío / Templado',
    corrosion: 'Riesgo bajo',
    resistividad: 'Moderada',
    albedo: 0.16, albedoCategoria: 'Bajo-Medio',
    albedoDescripcion: 'Arcilla húmeda de montaña, reflectividad limitada.',
    viabilidad: 'Media',
    viabilidadDescripcion: 'Apto en terreno plano; el riesgo principal son derrumbes de laderas vecinas sobre las mesas de paneles.'
  },
  {
    id: 'canar', provincia: 'Cañar', region: 'Sierra',
    tipo: 'Tierra arcillosa común', granulometria: 'Fino a medio',
    humedad: 'Normal', climaSubsuelo: 'Frío',
    corrosion: 'Sin peligro',
    resistividad: 'Moderada',
    albedo: 0.19, albedoCategoria: 'Medio',
    albedoDescripcion: 'Suelo de comportamiento estándar, reflectividad media.',
    viabilidad: 'Alta',
    viabilidadDescripcion: 'Terreno noble y predecible; estructuras clavables de forma tradicional sin diseños costosos.'
  },
  {
    id: 'azuay', provincia: 'Azuay', region: 'Sierra',
    tipo: 'Tierra dura arcillosa con piedras firmes', granulometria: 'Compacto y denso',
    humedad: 'Normal', climaSubsuelo: 'Frío / Templado',
    corrosion: 'Sin peligro',
    resistividad: 'Moderada',
    albedo: 0.20, albedoCategoria: 'Medio',
    albedoDescripcion: 'Suelo compacto de tono medio; reflectividad razonable.',
    viabilidad: 'Muy alta',
    viabilidadDescripcion: 'Uno de los mejores suelos de la Sierra: firme, soporta mucho peso y los postes quedan bien anclados.'
  },
  {
    id: 'loja', provincia: 'Loja', region: 'Sierra',
    tipo: 'Tierra arenosa seca y roca dura', granulometria: 'Granos gruesos y piedra',
    humedad: 'Muy seco en valles', climaSubsuelo: 'Templado',
    corrosion: 'Sin peligro',
    resistividad: 'Muy alta (suelo seco y rocoso)',
    albedo: 0.30, albedoCategoria: 'Alto',
    albedoDescripcion: 'Arena y roca clara, buena reflectividad, favorable para bifacial.',
    viabilidad: 'Muy alta',
    viabilidadDescripcion: 'Excelente radiación solar y firmeza del suelo; hincado rápido. La malla de tierra requiere químicos por la alta resistividad.'
  },

  // ============ REGIÓN AMAZONÍA ============
  {
    id: 'sucumbios', provincia: 'Sucumbíos', region: 'Amazonía',
    tipo: 'Tierra roja arcillosa muy ácida', granulometria: 'Fino y lavado por la lluvia',
    humedad: 'Saturado (lluvia casi constante)', climaSubsuelo: 'Cálido (22-28°C)',
    corrosion: 'Extremo (ácido que destruye el hierro)',
    resistividad: 'Baja',
    albedo: 0.12, albedoCategoria: 'Bajo',
    albedoDescripcion: 'Suelo rojo saturado; reflectividad baja por la humedad constante.',
    viabilidad: 'Baja',
    viabilidadDescripcion: 'Corrosión extrema: destruye postes metálicos en pocos años. Exige recubrimientos plásticos o bases de cemento.'
  },
  {
    id: 'orellana', provincia: 'Orellana', region: 'Amazonía',
    tipo: 'Arcilla blanda y pantanosa', granulometria: 'Muy fino y fangoso',
    humedad: 'Saturado (agua estancada)', climaSubsuelo: 'Cálido',
    corrosion: 'Alto peligro',
    resistividad: 'Baja',
    albedo: 0.09, albedoCategoria: 'Muy bajo',
    albedoDescripcion: 'Barro saturado muy oscuro; reflectividad mínima, ganancia bifacial prácticamente nula.',
    viabilidad: 'Baja',
    viabilidadDescripcion: 'Suelo muy débil, no soporta peso; requiere bases de cemento flotantes. No recomendable como prioridad bifacial.'
  },
  {
    id: 'napo', provincia: 'Napo', region: 'Amazonía',
    tipo: 'Tierra fina con piedras de río', granulometria: 'Limo con gravas',
    humedad: 'Muy húmedo', climaSubsuelo: 'Templado / Cálido',
    corrosion: 'Moderado',
    resistividad: 'Moderada',
    albedo: 0.13, albedoCategoria: 'Bajo',
    albedoDescripcion: 'Suelo húmedo con gravas; reflectividad baja.',
    viabilidad: 'Media',
    viabilidadDescripcion: 'Cerca de montañas el suelo con piedras da más firmeza; controlar corrientes de agua por lluvias.'
  },
  {
    id: 'pastaza', provincia: 'Pastaza', region: 'Amazonía',
    tipo: 'Tierra de pantano muy blanda', granulometria: 'Arcilla esponjosa',
    humedad: 'Saturación total (inundado)', climaSubsuelo: 'Cálido',
    corrosion: 'Alto peligro (ácido y agua)',
    resistividad: 'Baja',
    albedo: 0.08, albedoCategoria: 'Muy bajo',
    albedoDescripcion: 'Superficie de pantano casi negra; el peor albedo del listado, sin aporte bifacial relevante.',
    viabilidad: 'Muy baja',
    viabilidadDescripcion: 'El peor suelo del país para construir: requiere rellenar con toneladas de piedra antes de instalar cualquier estructura.'
  },
  {
    id: 'morona_santiago', provincia: 'Morona Santiago', region: 'Amazonía',
    tipo: 'Piedra de río en valles / arcilla en llanuras', granulometria: 'Piedras redondas en valles',
    humedad: 'Alta', climaSubsuelo: 'Templado / Cálido',
    corrosion: 'Moderado',
    resistividad: 'Moderada',
    albedo: 0.18, albedoCategoria: 'Bajo-Medio',
    albedoDescripcion: 'Reflectividad variable: mejor en lechos de río con piedra que en llanuras arcillosas.',
    viabilidad: 'Media',
    viabilidadDescripcion: 'Terreno excelente cerca de ríos secos antiguos; muy blando en zonas selváticas planas.'
  },
  {
    id: 'zamora_chinchipe', provincia: 'Zamora Chinchipe', region: 'Amazonía',
    tipo: 'Capa delgada de tierra sobre roca sólida', granulometria: 'Piedra gigante y roca viva',
    humedad: 'Alta', climaSubsuelo: 'Templado',
    corrosion: 'Moderado',
    resistividad: 'Extrema (>2000 Ω·m, la roca no conduce)',
    albedo: 0.23, albedoCategoria: 'Medio',
    albedoDescripcion: 'Roca expuesta de tono claro-medio; reflectividad razonable.',
    viabilidad: 'Baja',
    viabilidadDescripcion: 'La roca está casi en superficie; imposible clavar postes directamente, hay que taladrar. Costo de instalación elevado.'
  },

  // ============ REGIÓN INSULAR ============
  {
    id: 'galapagos', provincia: 'Galápagos', region: 'Insular',
    tipo: 'Roca volcánica negra pura', granulometria: 'Roca sólida (basalto)',
    humedad: 'Muy seco', climaSubsuelo: 'Cálido',
    corrosion: 'Máximo peligro (aire marino salino)',
    resistividad: 'Extrema (>2000 Ω·m)',
    albedo: 0.06, albedoCategoria: 'Extremo bajo',
    albedoDescripcion: 'Basalto negro puro: el albedo más bajo del país. Prácticamente sin ganancia bifacial por reflexión del suelo.',
    viabilidad: 'Muy baja',
    viabilidadDescripcion: 'Prohibido clavar postes: es roca pura. Las estructuras deben anclarse con pernos especiales o bloques de cemento apoyados. No recomendable para bifacial (compensar con superficies reflectantes artificiales si se insiste en el sitio).'
  }
];

// ------------------------------------------------------------
// CATÁLOGO DE PANELES BIFACIALES
// Especificaciones basadas en fichas técnicas comerciales
// vigentes de módulos bifaciales N-Type / TOPCon (STC)
// ------------------------------------------------------------
export const catalogoPaneles = [
  {
    id: 'p1',
    modelo: 'Módulo N-Type Bifacial 595W (144 celdas, tipo JA Solar)',
    tecnologia: 'N-Type Bycium+ / TOPCon',
    especificacionesElectricas: {
      pmax: '595 W', voc: '52.58 V', vmp: '44.64 V',
      isc: '13.99 A', imp: '13.33 A',
      coefTemperaturaPmax: '-0.29 %/°C',
      eficienciaModulo: '23 %',
      factorBifacialidad: '≈80 %'
    },
    idealParaAlbedo: 'Alto (≥0.28)',
    ventaja: 'Alta bifacialidad y eficiencia frontal: máximo aprovechamiento en suelos claros como cangahua o arena seca de Sierra y Santa Elena.',
    certificacion: 'IEC 61215 / IEC 61730'
  },
  {
    id: 'p2',
    modelo: 'Módulo TOPCon Bifacial 500W doble vidrio (tipo Canadian Solar)',
    tecnologia: 'N-Type TOPCon, doble vidrio',
    especificacionesElectricas: {
      pmax: '500 W', voc: '39.3 V', vmp: '33.4 V',
      isc: '15.42 A', imp: '14.97 A',
      coefTemperaturaPmax: '-0.29 %/°C',
      eficienciaModulo: '22.5 %',
      factorBifacialidad: 'hasta 85 %'
    },
    idealParaAlbedo: 'Medio-Alto (0.22-0.35)',
    ventaja: 'Buen coeficiente de temperatura, ideal para climas fríos de Sierra (Pichincha, Chimborazo, Loja) donde el frío mejora la disipación térmica del cableado.',
    certificacion: 'IEC 61215 / IEC 61730 / IEC 61701 (niebla salina)'
  },
  {
    id: 'p3',
    modelo: 'Módulo TOPCon Bifacial 620W doble vidrio (tipo Risen)',
    tecnologia: 'N-Type TOPCon Half-Cut, doble vidrio',
    especificacionesElectricas: {
      pmax: '620 W (682 W equivalente bifacial)',
      coefTemperaturaPmax: '-0.29 %/°C',
      eficienciaModulo: '23 %',
      factorBifacialidad: '≈80 %'
    },
    idealParaAlbedo: 'Alto (≥0.28)',
    ventaja: 'Vidrio posterior (no backsheet polimérico) con mayor resistencia mecánica y UV; buena opción para zonas de alta radiación y suelos claros de Sierra.',
    certificacion: 'IEC 61215 / IEC 61730, resistencia a nieve 5400 Pa / viento 2400 Pa'
  },
  {
    id: 'p4',
    modelo: 'Módulo N-Type TOPCon Bifacial 575W (144 celdas, tipo Ulica)',
    tecnologia: 'N-Type TOPCon',
    especificacionesElectricas: {
      voc: '50.88 V', isc: '14.31 A',
      coefTemperaturaPmax: '-0.3 %/°C',
      potenciaBifacialMax: 'hasta 741 Wp',
      degradacionAnual: '<0.4 % / año'
    },
    idealParaAlbedo: 'Medio (0.18-0.28)',
    ventaja: 'Buena relación costo-desempeño con baja degradación a largo plazo; opción versátil para suelos de reflectividad intermedia (Cañar, Azuay, Manabí).',
    certificacion: 'Garantía de potencia 30 años'
  },
  {
    id: 'p5',
    modelo: 'Módulo Bifacial 630W monocristalino, marco reforzado IP68 (tipo Connera)',
    tecnologia: 'Monocristalino, ganancia bifacial moderada',
    especificacionesElectricas: {
      pmax: '630 W', voc: '44.80 V', vmp: '36.88 V',
      isc: '18.06 A', imp: '17.08 A',
      sistemaMaximo: '1500 V DC',
      cajaConexiones: 'IP68, 3 diodos de bypass'
    },
    idealParaAlbedo: 'Bajo (<0.20)',
    ventaja: 'Su ganancia bifacial es más modesta (~5% con 10% de irradiación trasera), por lo que su rendimiento depende menos del albedo. Marco anodizado resistente a corrosión: recomendado para suelos oscuros y agresivos como Esmeraldas, Sucumbíos o Guayas.',
    certificacion: 'IP68, marco anticorrosivo'
  },
  {
    id: 'p6',
    modelo: 'Módulo N-Type Bycium+ Bifacial 525W doble vidrio (tipo JA Solar)',
    tecnologia: 'N-Type Bycium+, doble vidrio, anti-PID/anti-LID',
    especificacionesElectricas: {
      pmax: '525 W', voc: '44.05 V', isc: '14.95 A',
      coefTemperaturaPmax: '-0.29 %/°C',
      eficienciaModulo: '22.5 %',
      gananciaBifacial: 'hasta 10 %'
    },
    idealParaAlbedo: 'Bajo-Medio (0.13-0.22)',
    ventaja: 'Doble vidrio protege las celdas en ambientes húmedos y salinos; buena resistencia a degradación en zonas costeras y amazónicas de alta humedad.',
    certificacion: 'IEC 61215 / IEC 61730, garantía 25-30 años'
  }
];

// ------------------------------------------------------------
// FUNCIÓN AUXILIAR: recomendar panel según albedo del terreno
// (motor de recomendación básico para el buscador bidireccional)
// ------------------------------------------------------------
export function obtenerPanelRecomendado(albedo) {
  if (albedo >= 0.28) return catalogoPaneles.find(p => p.id === 'p1');
  if (albedo >= 0.22) return catalogoPaneles.find(p => p.id === 'p3');
  if (albedo >= 0.18) return catalogoPaneles.find(p => p.id === 'p4');
  if (albedo >= 0.13) return catalogoPaneles.find(p => p.id === 'p6');
  return catalogoPaneles.find(p => p.id === 'p5'); // suelos muy oscuros / corrosivos
}

// ------------------------------------------------------------
// FUNCIÓN AUXILIAR: obtener suelo por id de provincia
// ------------------------------------------------------------
export function obtenerSueloPorId(id) {
  return datosSuelos.find(s => s.id === id);
}

const ciudadesAProvincias = {
  Quito: 'Pichincha',
  Guayaquil: 'Guayas',
  Cuenca: 'Azuay',
  Loja: 'Loja',
  Manta: 'Manabí',
  Ambato: 'Tungurahua',
  Otavalo: 'Imbabura'
};

function normalizarTexto(valor) {
  return valor
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function provinciaDesdeCiudadConfirmada(ciudad) {
  const ciudadLimpia = ciudad.toString().trim();
  const provinciaEnParentesis = ciudadLimpia.match(/\(([^)]+)\)/)?.[1];

  if (provinciaEnParentesis) {
    return provinciaEnParentesis;
  }

  const nombreCiudad = ciudadLimpia.replace(/\s*\([^)]*\)/g, '');
  return ciudadesAProvincias[nombreCiudad] || null;
}

export function obtenerProvinciasProveedor(proveedor) {
  if (!proveedor) {
    return [];
  }

  const provincias = new Set();
  const provinciaSede = proveedor.provinciaSede ? proveedor.provinciaSede.toString().trim() : '';
  const ciudadSede = proveedor.ciudadSede ? proveedor.ciudadSede.toString().trim() : '';

  if (
    provinciaSede &&
    !['n/d', 'no especificada públicamente', 'no especificada'].includes(normalizarTexto(provinciaSede))
  ) {
    provincias.add(provinciaSede);
  }

  const provinciaDesdeCiudadSede = ciudadesAProvincias[ciudadSede] || null;
  if (provinciaDesdeCiudadSede) {
    provincias.add(provinciaDesdeCiudadSede);
  }

  (proveedor.ciudadesConfirmadas || [])
    .map(provinciaDesdeCiudadConfirmada)
    .filter(Boolean)
    .forEach((provincia) => provincias.add(provincia));

  return [...provincias];
}

// ------------------------------------------------------------
// PROVEEDORES DE PANELES BIFACIALES EN ECUADOR
// Nota: la mayoría son distribuidores con sede en Quito o
// Guayaquil que despachan a nivel nacional, no locales físicos
// en cada provincia. Verificar stock/precios directamente antes
// de publicar en la plataforma, ya que esta info cambia rápido.
// ------------------------------------------------------------
export const proveedores = [
  {
    id: 'proviento',
    nombre: 'ProViento',
    provinciaSede: 'Pichincha',
    ciudadSede: 'Quito',
    ciudad: 'Quito',
    coberturaNacional: true,
    marcasDisponibles: ['JA Solar', 'Resun Solar', 'Trina Solar'],
    tipoPanel: 'Incluye modelos bifaciales half-cell de alta eficiencia (18 busbars)',
    panelesRelacionados: ['p1', 'p6'],
    sitioWeb: 'proviento.com.ec',
    notas: 'Vende únicamente celdas grado A; catálogo con paneles bifaciales monocristalinos.',
    disponibilidad: 'Cobertura nacional',
    contacto: 'Ventas y despacho a nivel nacional',
    logoFile: '/logos-proveedores/proviento.svg'
  },
  {
    id: 'distrisolar',
    nombre: 'DistriSolar Ecuador',
    provinciaSede: 'No especificada públicamente',
    ciudadSede: 'N/D',
    ciudad: 'N/D',
    coberturaNacional: true,
    marcasDisponibles: ['Canadian Solar'],
    tipoPanel: 'Distribuidor de equipos, componentes y accesorios Canadian Solar (incluye línea TOPCon bifacial)',
    panelesRelacionados: ['p2'],
    sitioWeb: 'distrisolarecuador.com',
    notas: 'Distribuidor especializado en Canadian Solar; confirmar sede exacta directamente con la empresa.',
    disponibilidad: 'Cobertura nacional',
    contacto: 'Confirmación directa con la empresa',
    logoFile: '/logos-proveedores/distrisolar.svg'
  },
  {
    id: 'victoria_led',
    nombre: 'Victoria LED',
    provinciaSede: 'No especificada públicamente',
    ciudadSede: 'N/D',
    ciudad: 'N/D',
    coberturaNacional: true,
    marcasDisponibles: ['JA Solar'],
    tipoPanel: 'Distribuidor oficial JA Solar en Ecuador',
    panelesRelacionados: ['p1', 'p6'],
    sitioWeb: 'Facebook: Victoria LED Ecuador',
    notas: 'Se autodenomina distribuidor oficial JA Solar; verificar catálogo bifacial vigente directamente.',
    disponibilidad: 'Cobertura nacional',
    contacto: 'Verificar catálogo bifacial vigente',
    logoFile: '/logos-proveedores/victoria-led.svg'
  },
  {
    id: 'sunny_future',
    nombre: 'Sunny Future',
    provinciaSede: 'Pichincha',
    ciudadSede: 'Quito',
    ciudad: 'Quito',
    coberturaNacional: true,
    ciudadesConfirmadas: ['Quito', 'Guayaquil', 'Cuenca', 'Loja', 'Manta', 'Ambato'],
    marcasDisponibles: ['Trina Solar', 'Jinko Solar', 'JA Solar', 'Astro Energy', 'Longi', 'Restar Solar'],
    tipoPanel: 'Catálogo con tecnologías mono PERC, half-cut y bifacial',
    panelesRelacionados: ['p1', 'p4', 'p6'],
    sitioWeb: 'sunnyfuture.co',
    notas: 'Logística propia de importación (vía Colombia); despacho confirmado a Sierra, Costa y Austro.',
    disponibilidad: 'Cobertura nacional',
    contacto: 'Logística propia y despacho nacional',
    logoFile: '/logos-proveedores/sunny-future.svg'
  },
  {
    id: 'enercity',
    nombre: 'Enercity S.A.',
    provinciaSede: 'Pichincha',
    ciudadSede: 'Quito',
    ciudad: 'Quito',
    coberturaNacional: true,
    ciudadesConfirmadas: ['Quito', 'Guayaquil', 'Otavalo (Imbabura)'],
    marcasDisponibles: ['Varias (integrador/instalador, no fabricante único)'],
    tipoPanel: 'Diseño, venta e instalación de sistemas fotovoltaicos residenciales, comerciales e industriales',
    panelesRelacionados: ['p1', 'p2', 'p3', 'p4'],
    sitioWeb: 'enercitysa.com',
    notas: 'Más de 2000 proyectos instalados; actúa como integrador, no solo vendedor de módulos.',
    disponibilidad: 'Cobertura nacional',
    contacto: 'Diseño, venta e instalación',
    logoFile: '/logos-proveedores/enercity.svg'
  },
  {
    id: 'panel_solar_ecuador',
    nombre: 'Panel Solar Ecuador',
    provinciaSede: 'N/D',
    ciudadSede: 'N/D',
    ciudad: 'N/D',
    coberturaNacional: true,
    ciudadesConfirmadas: ['Quito', 'Guayaquil', 'Cuenca', 'Loja', 'Manta', 'Ambato'],
    marcasDisponibles: ['No especifica marcas puntuales'],
    tipoPanel: 'Paneles residenciales/comerciales, kits, bombeo solar',
    panelesRelacionados: ['p4'],
    sitioWeb: 'panelsolarecuador.com',
    notas: 'Cobertura amplia declarada, pero no detalla si maneja específicamente línea bifacial.',
    disponibilidad: 'Cobertura nacional',
    contacto: 'Consulta comercial referencial',
    logoFile: '/logos-proveedores/panel-solar-ecuador.svg'
  }
];

// ------------------------------------------------------------
// FUNCIÓN AUXILIAR: proveedores con cobertura confirmada en
// una ciudad/provincia dada (para el mapa interactivo)
// ------------------------------------------------------------
export function obtenerProveedoresPorCobertura(ciudadOProvincia) {
  if (!ciudadOProvincia) {
    return proveedores;
  }

  const provinciaSeleccionada = obtenerSueloPorId(ciudadOProvincia)?.provincia || ciudadOProvincia;
  const textoBusqueda = normalizarTexto(provinciaSeleccionada);

  return proveedores.filter((proveedor) => {
    const sedeProvincia = normalizarTexto(proveedor.provinciaSede);
    const sedeCiudad = normalizarTexto(proveedor.ciudadSede);
    const tieneUbicacionEspecifica =
      !['n/d', 'no especificada públicamente', 'no especificada'].includes(sedeProvincia) ||
      !['n/d'].includes(sedeCiudad);

    if (!tieneUbicacionEspecifica) {
      return true;
    }

    const ciudadesConfirmadas = proveedor.ciudadesConfirmadas || [];
    const provinciasConfirmadas = ciudadesConfirmadas
      .map(provinciaDesdeCiudadConfirmada)
      .filter(Boolean)
      .map(normalizarTexto);

    const coincideCiudadOProvincia = provinciasConfirmadas.includes(textoBusqueda);

    return (
      sedeProvincia === textoBusqueda ||
      sedeCiudad === textoBusqueda ||
      coincideCiudadOProvincia
    );
  });
}

// ------------------------------------------------------------
// CATÁLOGO REFERENCIAL DE PROVEEDORES
// Nota: el proyecto no gestiona ventas ni stock en tiempo real.
// Este listado funciona como repositorio informativo para la UI.
// ------------------------------------------------------------
export const catalogoProveedoresReferenciales = [
  {
    id: 'prov-quito',
    nombre: 'Distribuidor Solar Quito',
    cobertura: ['p1', 'p2', 'p3'],
    ciudad: 'Quito',
    disponibilidad: 'Referencial',
    contacto: 'Catálogo local por validar',
    nota: 'Orientado a módulos bifaciales de alta eficiencia para Sierra.'
  },
  {
    id: 'prov-cuenca',
    nombre: 'Integrador FV Cuenca',
    cobertura: ['p1', 'p3', 'p4'],
    ciudad: 'Cuenca',
    disponibilidad: 'Referencial',
    contacto: 'Catálogo local por validar',
    nota: 'Adecuado para proyectos en suelos de albedo medio-alto.'
  },
  {
    id: 'prov-guayaquil',
    nombre: 'Proveedor Solar Costa',
    cobertura: ['p5', 'p6'],
    ciudad: 'Guayaquil',
    disponibilidad: 'Referencial',
    contacto: 'Catálogo local por validar',
    nota: 'Enfocado en ambientes corrosivos y húmedos de Costa y Amazonía.'
  }
];

// ------------------------------------------------------------
// FUNCIÓN AUXILIAR: obtener la etiqueta legible del albedo
// ------------------------------------------------------------
export function obtenerCategoriaAlbedo(albedo) {
  return referenciaAlbedo.escala.find(({ rango }) => {
    if (rango.includes('+')) {
      const limiteInferior = parseFloat(rango);
      return albedo >= limiteInferior;
    }

    const [minimo, maximo] = rango.split(' - ').map(Number);
    return albedo >= minimo && albedo <= maximo;
  }) || referenciaAlbedo.escala[referenciaAlbedo.escala.length - 1];
}

// ------------------------------------------------------------
// FUNCIÓN AUXILIAR: obtener proveedores referenciales por panel
// ------------------------------------------------------------
export function obtenerProveedoresPorPanel(panelId) {
  return proveedores.filter(proveedor =>
    proveedor.panelesRelacionados.includes(panelId)
  );
}

// ------------------------------------------------------------
// FUNCIÓN AUXILIAR: obtener provincias compatibles con un panel
// ------------------------------------------------------------
export function obtenerProvinciasPorPanel(panelId) {
  const rangoPorPanel = {
    p1: [0.28, 1],
    p2: [0.22, 0.35],
    p3: [0.28, 1],
    p4: [0.18, 0.28],
    p5: [0, 0.20],
    p6: [0.13, 0.22]
  };

  const [minimo, maximo] = rangoPorPanel[panelId] || [0, 1];

  return datosSuelos
    .filter((suelo) => suelo.albedo >= minimo && suelo.albedo <= maximo)
    .sort((a, b) => a.albedo - b.albedo);
}