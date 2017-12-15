import {chartLevels} from '@/lib/data/chart-nav'

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
