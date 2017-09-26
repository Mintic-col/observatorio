<template>
  <page class="chart">
    <div class="col-sm-3">
      <ul class="nav nav-pills nav-stacked">
        <li v-for="(item, index) in subsections[section-1]" :key="item" :class="{ 'active': index === parseInt(subsection)-1 }">
          <router-link :to="{name: 'Chart', params: {section: section, subsection: index + 1}}">
            {{ item }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="col-sm-9">
      <h4 class="grouping">{{ sections[section-1] }}</h4>
      <h2>{{ subsections[section-1][subsection-1] }}</h2>
      <p>
        Este nivel estudia la asimilación por sector industrial de tecnologías digitales consideradas maduras como computación (PC, servidores), el uso de Internet, aplicaciones de Internet (banca electrónica, publicidad, venta de productos, compra de insumos, acceso a información de productos y servicios, provisión de servicio a clientes, correo electrónico, interacción con el gobierno), uso de banda ancha (ADSL, Fibra óptica, cable modem, LTE), el despliegue de LAN, la existencia de sitio Web, y el software de gestión.
      </p>
    </div>
  </page>
</template>

<script>
import Page from '@/components/Page'
import Lipsum from '@/components/Lipsum'

export default {
  name: 'chart',

  props: ['section', 'subsection'],

  data () {
    return {
      sections: [
        'Visión',
        'Medición',
        'Sector',
        'Región',
        'Dimensiones'
      ],
      subsections: [
        [
          'Que es la economía digital?',
          'Tendencias mundiales de digitalización de las economías',
          'La importancia económica de la digitalización',
          'La economía digital y Colombia'
        ],
        [
          'Dimensiones de la economía digital',
          'Experiencia internacional apara la medición de la economía digital',
          'Índices para medir el desarrollo de la economía digital de Colombia'
        ],
        [
          'Adopción de tecnologías digitales maduras',
          'Gestión de tecnologías digitales maduras',
          'Adopción de tecnologías digitales avanzadas',
          'Gestión de tecnologías digitales avanzadas'
        ],
        [
          'Adopción de tecnologías digitales maduras',
          'Gestión de tecnologías digitales maduras',
          'Adopción de tecnologías digitales avanzadas',
          'Gestión de tecnologías digitales avanzadas'
        ],
        [
          'Adopción de tecnologías digitales maduras',
          'Gestión de tecnologías digitales maduras',
          'Adopción de tecnologías digitales avanzadas',
          'Gestión de tecnologías digitales avanzadas'
        ]
      ]
    }
  },

  components: {
    Page,
    Lipsum
  }

}
</script>

<style scoped>
  .chart {
    text-align: left;
  }
  .nav-pills li.active a {
    background-color: gray;
  }
  h4.grouping {
    text-transform: uppercase;
    font-weight: bold;
  }
</style>

