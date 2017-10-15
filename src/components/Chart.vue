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
      <p v-if="subsection <= 2">
        Este nivel estudia la asimilación por sector industrial de tecnologías digitales consideradas maduras como computación (PC, servidores), el uso de Internet, aplicaciones de Internet (banca electrónica, publicidad, venta de productos, compra de insumos, acceso a información de productos y servicios, provisión de servicio a clientes, correo electrónico, interacción con el gobierno), uso de banda ancha (ADSL, Fibra óptica, cable modem, LTE), el despliegue de LAN, la existencia de sitio Web, y el software de gestión.
      </p>
      <p v-else>
        La asimilación de tecnologías de avanzada debe considerar siete categorías de tecnologías digitales: ciberseguridad, sensores/m2m, robotica, impresoras 3d, computacion en la nube, big data/analiticas, e inteligencia artificial/aprendizaje de maquinas.
      </p>
    </div>
    <div class="col-sm-9 row">
      <div class="col-sm-6">
        <select v-model="size" @change="fillData()">
          <option disabled value="" selected>Seleccione tamaño de empresa</option>
          <option value="large">Empresas pequeñas, medianas y grandes</option>
          <option value="small">Microempresas y pequeñas empresas</option>
        </select>
      </div>
      <div class="col-sm-6">
        <select v-model="indicator" @change="fillData()">
          <option disabled value="" selected>Seleccione un indicador</option>
          <option value="total">Digitalización total</option>
          <option value="infrastructure">Adopción de infraestructura tecnológica digital</option>
          <option value="supply-chain">Digitalización de la cadena de aprovisionamiento</option>
          <option value="processing">Digitalización de procesamiento</option>
          <option value="distribution">Digitalización de canales de distribución</option>
        </select>
      </div>
    </div>
    <div class="col-sm-9 row">
      <div class="col-sm-6">
        <select v-model="sector" @change="fillData()">
          <option value="all">Todos los sectores</option>
          <option value="agriculture">Agricultura</option>
          <option value="mining">Minería</option>
          <option value="manufactoring">Industrias manufactureras</option>
          <option value="commerce">Comercio</option>
          <option value="transportation">Correo y almacenamiento</option>
          <option value="hospitality">Alojamiento y servicios de comida</option>
          <option value="it">Información y Comunicaciones</option>
          <option value="real-estate">Actividades inmobiliarias</option>
          <option value="professional">Profesionales y científicas</option>
          <option value="other">Otros servicios</option>
        </select>
      </div>
      <div class="col-sm-2">
        <select v-model="year" @change="fillData()">
          <option disabled value="" selected>Año</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
        </select>
      </div>
      <div class="col-sm-12">
        <bar-chart
          class="chart-item"
          :chart-data="dataCollection"
          :options="dataOptions"
          >
        </bar-chart>
      </div>
      <div v-show="sectorSelected" class="col-sm-12">
        <table class="table">
          <thead>
            <tr>
              <th>Categoría</th>
              <th>Porcentaje</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(category, index) in tableLabels" :key="category">
              <td>{{ category }}</td>
              <td>{{ tableData[index] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </page>
</template>

<script>
  import _ from 'lodash'

  import NavData from '@/lib/data/nav'
  import ChartData from '@/lib/data/chart'
  import BarChart from '@/lib/chart/bar'

  import Page from '@/components/Page'
  import Lipsum from '@/components/Lipsum'

  export default {
    name: 'chart',

    props: ['section', 'subsection'],

    data () {
      return {
        sections: NavData.sections,
        subsections: NavData.subsections,
        size: '',
        indicator: '',
        sector: 'all',
        year: '',
        dataOptions: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            xAxes: [
              {
                barPercentage: 0.8,
                categoryPercentage: 1.0,
                ticks: {
                  autoSkip: false
                }
              }
            ]
          }
        },
        dataCollection: null
      }
    },

    mounted () {
      this.fillData()
    },

    computed: {
      showChart: function () {
        return this.sector === 'all' &&
               this.size !== '' &&
               this.indicator !== '' &&
               this.year !== ''
      },

      sectorSelected: function () {
        return this.sector !== 'all' &&
               this.size !== '' &&
               this.indicator !== '' &&
               this.year !== ''
      },

      chartData: function () {
        let record = _.find(ChartData.summaryData, {
          type: 'sector',
          name: 'adoption-mature',
          size: this.size,
          indicator: this.indicator,
          year: this.year
        })
        if (record) {
          return record.data
        } else {
          return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
      },

      chartLabels: function () {
        let record = _.find(ChartData.summaryLabels, {
          size: this.size
        })
        if (record) {
          return record.labels
        } else {
          return ['']
        }
      },

      tableLabels: function () {
        return ChartData.detailLabels
      },

      tableData: function () {
        let record = _.find(ChartData.detailData, {
          type: 'sector',
          name: 'adoption-mature',
          size: this.size,
          // indicator: this.indicator,
          sector: this.sector,
          year: this.year
        })
        if (record) {
          return record.data
        } else {
          return ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
        }
      }
    },

    methods: {
      fillData: function () {
        this.dataCollection = {
          labels: this.chartLabels,
          datasets: [
            {
              backgroundColor: '#f87979',
              data: this.chartData
            }
          ]
        }
      }
    },

    components: {
      NavData,
      ChartData,
      BarChart,
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
  .chart-item {
    margin-top: 2em;
  }
</style>

