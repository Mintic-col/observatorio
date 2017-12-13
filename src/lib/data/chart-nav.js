import Papa from 'papaparse'
import _ from 'lodash'

export const chartLevels = [
  {
    title: 'Adopción de tecnologías digitales maduras',
    description: 'Este nivel estudia la asimilación por sector industrial de tecnologías digitales consideradas maduras como computación (PC, servidores), el uso de Internet, aplicaciones de Internet (banca electrónica, publicidad, venta de productos, compra de insumos, acceso a información de productos y servicios, provisión de servicio a clientes, correo electrónico, interacción con el gobierno), uso de banda ancha (ADSL, Fibra óptica, cable modem, LTE), el despliegue de LAN, la existencia de sitio Web, y el software de gestión.',
    years: ['2015', '2016', '2017'],
    dataFile: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vScgfj7wnWUCwfFYU3T7h3TRfu1ggQglMfzitHjC6Y-L-2XbCfTPN3h4WCi8-muk_ZzTY9YH_5iHpFK/pub?gid=75109715&single=true&output=csv',
    indicators: [
      { value: 'Calculo del Indice', name: 'Indice de Digitalización' },
      { value: 'Infraestructura', name: 'Infraestructura' },
      { value: 'Insumos', name: 'Insumos' },
      { value: 'Procesamiento', name: 'Procesamiento' },
      { value: 'Distribucion', name: 'Distribucion' }
    ]
  },
  {
    title: 'Gestión de tecnologías digitales maduras',
    description: 'Este nivel estudia la asimilación por sector industrial de tecnologías digitales consideradas maduras como computación (PC, servidores), el uso de Internet, aplicaciones de Internet (banca electrónica, publicidad, venta de productos, compra de insumos, acceso a información de productos y servicios, provisión de servicio a clientes, correo electrónico, interacción con el gobierno), uso de banda ancha (ADSL, Fibra óptica, cable modem, LTE), el despliegue de LAN, la existencia de sitio Web, y el software de gestión.',
    dataFile: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vScgfj7wnWUCwfFYU3T7h3TRfu1ggQglMfzitHjC6Y-L-2XbCfTPN3h4WCi8-muk_ZzTY9YH_5iHpFK/pub?gid=433413066&single=true&output=csv',
    years: ['2017'],
    indicators: [
      { value: 'Calculo del Indice', name: 'Indice de Digitalización' },
      { value: 'GOBERNANZA', name: 'Gobernanza' },
      { value: 'PRESUPUESTO', name: 'Presupuesto' },
      { value: 'CAPACITIACIÓN', name: 'Capacitiación' },
      { value: 'SEGURIDAD', name: 'Seguridad' },
      { value: 'INNOVACIÓN', name: 'Innovación' }
    ]
  },
  {
    title: 'Adopción de tecnologías digitales avanzadas',
    description: 'La asimilación de tecnologías de avanzada debe considerar siete categorías de tecnologías digitales: ciberseguridad, sensores/m2m, robotica, impresoras 3d, computacion en la nube, big data/analiticas, e inteligencia artificial/aprendizaje de maquinas.',
    dataFile: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vScgfj7wnWUCwfFYU3T7h3TRfu1ggQglMfzitHjC6Y-L-2XbCfTPN3h4WCi8-muk_ZzTY9YH_5iHpFK/pub?gid=1096815165&single=true&output=csv',
    years: ['2015', '2016', '2017'],
    indicators: [
      { value: 'Calculo del Indice', name: 'Indice de Digitalización' },
      { value: 'INFRAESTRUCTURA', name: 'Infraestructura' },
      { value: 'PROCESAMIENTO', name: 'Procesamiento' },
      { value: 'DISTRIBUCION', name: 'Distribucion' }
    ]
  },
  {
    title: 'Gestión de tecnologías digitales avanzadas',
    description: 'La asimilación de tecnologías de avanzada debe considerar siete categorías de tecnologías digitales: ciberseguridad, sensores/m2m, robotica, impresoras 3d, computacion en la nube, big data/analiticas, e inteligencia artificial/aprendizaje de maquinas.',
    dataFile: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vScgfj7wnWUCwfFYU3T7h3TRfu1ggQglMfzitHjC6Y-L-2XbCfTPN3h4WCi8-muk_ZzTY9YH_5iHpFK/pub?gid=1442572218&single=true&output=csv',
    years: ['2017'],
    indicators: [
      { value: 'Calculo del Indice', name: 'Indice de Digitalización' },
      { value: 'ESTRATEGIA', name: 'Estrategia' },
      { value: 'GOBERNANZA', name: 'Gobernanza' },
      { value: 'CAPITAL HUMANO', name: 'Capital Humano' }
    ]
  }
]

export const sizes = [
  { value: 'Total', name: 'Todos tamaños de empresa' },
  { value: 'Micros', name: 'Microempresas' },
  { value: 'Pymes', name: 'Pymes' },
  { value: 'Grandes', name: 'Grandes' }
]

export const regions = [
  { value: 'Total', name: 'Nación' },
  { value: 'Region Atlantico', name: 'Costa Atlántica' },
  { value: 'Region Pacifico', name: 'Costa Pacifica' },
  { value: 'Region Central', name: 'Región Central' },
  { value: 'Region Oriental', name: 'Región Oriental' },
  { value: 'Antioquia', name: 'Antioquia' },
  { value: 'Eje Cafetero', name: 'Eje Cafetero' },
  { value: 'Region de la Orinoquia y Amazonia', name: 'Región de la Orinoquia y Amazonia' }
]

export const sectorGroups = [
  {
    value: 'Total',
    name: 'Todos los sectores'
  },
  {
    value: 'Sector Primario',
    name: 'Sector primario',
    sectors: [
      { value: 'Total', name: 'Todos los sectores' },
      { value: 'Agricultura y ganadería', name: 'Agricultura y ganadería' },
      { value: 'Minas y canteras', name: 'Minas y canteras' }
    ]
  },
  {
    value: 'Sector Secundario',
    name: 'Sector secundario',
    sectors: [
      { value: 'Total', name: 'Todos los sectores' },
      {
        value: 'Industrias manufactureras',
        name: 'Manufactura',
        subSectors: [
          { value: 'Total', name: 'Todos los sectores' },
          { value: 'Textiles, prendas y cueros', name: 'Textiles, prendas y cueros' },
          { value: 'Alimentos y Bebidas', name: 'Alimentos y Bebidas' },
          { value: 'Productos metalurgicos', name: 'Productos metalurgicos' },
          { value: 'Productos de quimicos /farmaceuticos /plasticos', name: 'Productos de quimicos /farmaceuticos /plasticos' },
          { value: 'Madera y muebles', name: 'Madera y muebles' },
          { value: 'Papel e impresión', name: 'Papel e impresión' },
          { value: 'Otros manufactura', name: 'Otros manufactura' }
        ]
      },
      { value: 'Servicios Publicos', name: 'Servicios públicos' },
      { value: 'Construccion', name: 'Construcción' }
    ]
  },
  {
    value: 'Sector Terciario',
    name: 'Sector terciario',
    sectors: [
      { value: 'Total', name: 'Todos los sectores' },
      { value: 'Comercio', name: 'Comercio' },
      {
        value: 'Servicios',
        name: 'Servicios',
        subSectors: [
          { value: 'Total', name: 'Todos los sectores' },
          { value: 'Transporte y almacenamiento', name: 'Transporte y almacenamiento' },
          { value: 'Alojamiento y servicios de comida', name: 'Alojamiento y servicios de comida' },
          { value: 'Información y comunicaciones', name: 'Información y comunicaciones' },
          { value: 'Actividades financieras y de seguros', name: 'Actividades financieras y de seguros' },
          { value: 'Actividades inmobiliarias y Actividades de servicios administrativos y de apoyo', name: 'Actividades inmobiliarias y Actividades de servicios administrativos y de apoyo' },
          { value: 'Actividades profesionales, científicas y técnicas', name: 'Actividades profesionales, científicas y técnicas' },
          { value: 'Administración pública y defensa', name: 'Administración pública y defensa' },
          { value: 'Educacion', name: 'Educacion' },
          { value: 'Atencion de salud y de asistencia social', name: 'Atencion de salud y de asistencia social' },
          { value: 'Actividades artísticas, de entretenimiento y recreación', name: 'Actividades artísticas, de entretenimiento y recreación' },
          { value: 'Otros servicios', name: 'Otros servicios' }
        ]
      }
    ]
  }
]

export const fetchData = (dataFile) => {
  if (dataFile) {
    return new Promise(resolve => {
      Papa.parse(dataFile, {
        download: true,
        header: true,
        complete (results, file) {
          resolve(results)
        }
      })
    })
  } else {
    return Promise.resolve(null)
  }
}

const filters = ({year, size, region, sectorGroup, sector, subSector}) => {
  return {
    'Año': year,
    'Tamaño de Empresa': size,
    'Region Geografica': region,
    'Sector': sectorGroup,
    'Sector Economico': sector,
    'Sub sector': subSector
  }
}

export const filtered = (results, dimensions) => {
  if (results) {
    let settings = filters(dimensions)
    let filtered = _.filter(results.data, settings)

    console.log('FOUND ' + filtered.length + ' ' +
                JSON.stringify(settings, null, 2))

    return filtered
  } else {
    return null
  }
}

export const filteredForChart = (results, settings, dimensions) => {
  if (results) {
    let filterSettings = _.omit(filters(dimensions), settings.dimension)
    let filtered = _.filter(results.data, filterSettings)
    console.log('FOUND ' + filtered.length + ' records for chart')
    return filtered
  } else {
    return null
  }
}
