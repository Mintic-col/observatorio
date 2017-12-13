const chartLevels = [
  {
    title: 'Adopción de tecnologías digitales maduras',
    description: 'Este nivel estudia la asimilación por sector industrial de tecnologías digitales consideradas maduras como computación (PC, servidores), el uso de Internet, aplicaciones de Internet (banca electrónica, publicidad, venta de productos, compra de insumos, acceso a información de productos y servicios, provisión de servicio a clientes, correo electrónico, interacción con el gobierno), uso de banda ancha (ADSL, Fibra óptica, cable modem, LTE), el despliegue de LAN, la existencia de sitio Web, y el software de gestión.'
  },
  {
    title: 'Gestión de tecnologías digitales maduras',
    description: 'Este nivel estudia la asimilación por sector industrial de tecnologías digitales consideradas maduras como computación (PC, servidores), el uso de Internet, aplicaciones de Internet (banca electrónica, publicidad, venta de productos, compra de insumos, acceso a información de productos y servicios, provisión de servicio a clientes, correo electrónico, interacción con el gobierno), uso de banda ancha (ADSL, Fibra óptica, cable modem, LTE), el despliegue de LAN, la existencia de sitio Web, y el software de gestión.'
  },
  {
    title: 'Adopción de tecnologías digitales avanzadas',
    description: 'La asimilación de tecnologías de avanzada debe considerar siete categorías de tecnologías digitales: ciberseguridad, sensores/m2m, robotica, impresoras 3d, computacion en la nube, big data/analiticas, e inteligencia artificial/aprendizaje de maquinas.'
  },
  {
    title: 'Gestión de tecnologías digitales avanzadas',
    description: 'La asimilación de tecnologías de avanzada debe considerar siete categorías de tecnologías digitales: ciberseguridad, sensores/m2m, robotica, impresoras 3d, computacion en la nube, big data/analiticas, e inteligencia artificial/aprendizaje de maquinas.'
  }
]

export const sections = [
  {
    title: 'Visión',
    route: 'Static',
    levels: [
      { title: 'Que es la economía digital?' },
      { title: 'Tendencias mundiales de digitalización de las economías' },
      { title: 'La importancia económica de la digitalización' },
      { title: 'La economía digital y Colombia' }
    ]
  },
  {
    title: 'Medición',
    route: 'Static',
    levels: [
      { title: 'Dimensiones de la economía digital' },
      { title: 'Experiencia internacional apara la medición de la economía digital' },
      { title: 'Índices para medir el desarrollo de la economía digital de Colombia' }
    ]
  },
  {
    title: 'Sector',
    route: 'Chart',
    levels: chartLevels
  },
  {
    title: 'Región',
    route: 'Chart',
    levels: chartLevels
  },
  {
    title: 'Dimensiones',
    route: 'Chart',
    levels: chartLevels
  },
  {
    title: 'Encuestas',
    route: 'Survey',
    levels: [
      { title: 'Departamento Administrativo Nacional de Estadística (DANE)' },
      { title: 'Ministerio de Tecnologías de la Información y las Comunicaciones (MINTIC)' },
      { title: 'Otras encuestas' }
    ]
  },
  {
    title: 'Documentos',
    route: 'Links',
    levels: [
      { title: 'Internacional' },
      { title: 'America Latina' }
    ]
  }
]

export const getSection = (section) => {
  return sections[section - 1]
}

export const getLevel = (section, subsection) => {
  return getSection(section).levels[subsection - 1]
}
