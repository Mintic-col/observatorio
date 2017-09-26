<template>
  <page class="chart">
    <div class="col-sm-3">
      <ul class="nav nav-pills nav-stacked">
        <li v-for="(item, index) in subsections[section-1]" :key="item" :class="{ 'active': index === parseInt(subsection)-1 }">
          <router-link :to="{name: 'Links', params: {section: section, subsection: index + 1}}">
            {{ item }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="col-sm-9">
      <h2>{{ subsections[section-1][subsection-1] }} documentos</h2>
      <p v-for="link in links[subsection-1]" :key="link">{{ link }}</p>
    </div>
  </page>
</template>

<script>
import Page from '@/components/Page'

export default {
  name: 'chart',

  props: ['section', 'subsection'],

  data () {
    return {
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
        ],
        [
          'Departamento Administrativo Nacional de Estadística (DANE)',
          'Ministerio de Tecnologías de la Información y las Comunicaciones (MINTIC)',
          'Otras encuestas'
        ],
        [
          'Internacional',
          'America Latina'
        ]
      ],
      links: [
        [
          'OECD.Measuring the Digital Economy: a new perspective, December 8, 2014',
          'BEA – US Department of Commerce.Measuring the Digital Economy, November 18, 2016',
          'OECD Measuring GDP in a Digitalised Economy, November 17, 2016',
          'Barbet and Coutinet.Measuring the digital economy: state-of-the-art Developments and Future Prospects, Second Quarter, 2001',
          'Mesenbourg. Measuring the digital economy, March 30, 2001'
        ],
        [
          'Katz, R.El ecosistema y la economía digital en América Latina, CAF, CEPAL, Asiet y Fundación Telefónica. 2015.',
          'Katz, R.Industrialización inclusive y sostenible en América Latina, CEPAL, 2017.',
          'CAF. Hacia la transformación digital de América Latina y el Caribe; El Observatorio CAF del Ecosistema Digital, 2017.'
        ]
      ]
    }
  },

  components: {
    Page
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

