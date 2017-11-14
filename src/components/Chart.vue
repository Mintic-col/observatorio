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
      <div class="col-sm-4">
        <select v-model="size">
          <option value="Total">Todos tamaños de empresa</option>
          <option value="Micros">Microempresas</option>
          <option value="Pymes">Pymes</option>
          <option value="Grandes">Grandes</option>
        </select>
      </div>
      <div class="col-sm-4">
        <select v-model="region">
          <option value="Total">Nación</option>
          <option value="Region Atlantico">Costa Atlántica</option>
          <option value="Region Pacifico">Costa Pacifica</option>
          <option value="Region Central">Región Central</option>
          <option value="Region Oriental">Región Oriental</option>
          <option value="Antioquia">Antioquia</option>
          <option value="Eje Cafetero">Eje Cafetero</option>
          <option value="Region de la Orinoquia y Amazonia">Región de la Orinoquia y Amazonia</option>
        </select>
      </div>
      <div class="col-sm-4">
        <select v-model="year">
          <option value="2015" selected>2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
        </select>
      </div>
      <div class="col-sm-12">
        <select v-model="sector">
          <option value="Total:Total:Total">Todos los sectores</option>
          <option value="Sector Primario:Total:Total">Sector primario</option>
          <option value="Sector Primario:Agricultura y ganadería:Total">&nbsp;&nbsp;&nbsp;&nbsp;Agricultura y ganadería</option>
          <option value="Sector Primario:Minas y canteras:Total">&nbsp;&nbsp;&nbsp;&nbsp;Minas y canteras</option>
          <option value="Sector Secundario:Total:Total">Sector secundario</option>
          <option value="Sector Secundario:Industrias manufactureras:Total">&nbsp;&nbsp;&nbsp;&nbsp;Manufactura</option>
          <option value="Sector Secundario:Industrias manufactureras:Textiles, prendas y cueros">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Textiles, prendas y cueros</option>
          <option value="Sector Secundario:Industrias manufactureras:Alimentos y Bebidas">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alimentos y Bebidas</option>
          <option value="Sector Secundario:Industrias manufactureras:Productos metalurgicos ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Productos metalurgicos</option>
          <option value="Sector Secundario:Industrias manufactureras:Productos de quimicos /farmaceuticos /plasticos">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Productos de quimicos /farmaceuticos /plasticos</option>
          <option value="Sector Secundario:Industrias manufactureras:Madera y muebles">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Madera y muebles</option>
          <option value="Sector Secundario:Industrias manufactureras:Papel e impresión">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Papel e impresión</option>
          <option value="Sector Secundario:Industrias manufactureras:Otros manufactura">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Otros manufactura</option>
          <option value="Sector Secundario:Servicios Publicos:Total">&nbsp;&nbsp;&nbsp;&nbsp;Servicios públicos</option>
          <option value="Sector Secundario:Construccion:Total">&nbsp;&nbsp;&nbsp;&nbsp;Construcción</option>
          <option value="Sector Terciario:Total:Total">Sector terciario</option>
          <option value="Sector Terciario:Comercio:Total">&nbsp;&nbsp;&nbsp;&nbsp;Comercio</option>
          <option value="Sector Terciario:Servicios:Total">&nbsp;&nbsp;&nbsp;&nbsp;Servicios</option>
          <option value="Sector Terciario:Servicios:Transporte y almacenamiento">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transporte y almacenamiento</option>
          <option value="Sector Terciario:Servicios:Alojamiento y servicios de comida">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alojamiento y servicios de comida</option>
          <option value="Sector Terciario:Servicios:Información y comunicaciones">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Información y comunicaciones</option>
          <option value="Sector Terciario:Servicios:Actividades financieras y de seguros">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Actividades financieras y de seguros</option>
          <option value="Sector Terciario:Servicios:Actividades inmobiliarias y Actividades de servicios administrativos y de apoyo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Actividades inmobiliarias y Actividades de servicios administrativos y de apoyo</option>
          <option value="Sector Terciario:Servicios:Actividades profesionales, científicas y técnicas">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Actividades profesionales, científicas y técnicas</option>
          <option value="Sector Terciario:Servicios:Administración pública y defensa">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Administración pública y defensa</option>
          <option value="Sector Terciario:Servicios:Educacion">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Educacion</option>
          <option value="Sector Terciario:Servicios:Atencion de salud y de asistencia social">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Atencion de salud y de asistencia social</option>
          <option value="Sector Terciario:Servicios:Actividades artísticas, de entretenimiento y recreación">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Actividades artísticas, de entretenimiento y recreación</option>
          <option value="Sector Terciario:Servicios:Otros servicios">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Otros servicios</option>
        </select>
      </div>
      <!-- <div class="col-sm-12">
        <select v-if="subsection == 1" v-model="indicator">
          <option disabled value="" selected>Seleccione un indicador</option>
          <option value="total">Digitalización total</option>
          <option value="infrastructure">Adopción de infraestructura tecnológica digital</option>
          <option value="supply-chain">Digitalización de la cadena de aprovisionamiento</option>
          <option value="processing">Digitalización de procesamiento</option>
          <option value="distribution">Digitalización de canales de distribución</option>
        </select>
        <select v-if="subsection == 2" v-model="indicator">
          <option disabled value="" selected>Seleccione un indicador</option>
          <option value="1">Índice de gestión de tecnologías maduras</option>
          <option value="2">Índice de gobernanza de tecnologías maduras</option>
          <option value="3">Índice de presupuesto de tecnologías maduras</option>
          <option value="4">Índice de capacitación de tecnologías maduras</option>
          <option value="5">Índice de seguridad de tecnologías maduras</option>
          <option value="6">Índice de innovación de tecnologías maduras</option>
        </select>
        <select v-if="subsection == 3" v-model="indicator">
          <option disabled value="" selected>Seleccione un indicador</option>
          <option value="1">Índice de digitalización de tecnologías avanzadas</option>
          <option value="2">Adopción de infraestructura de tecnologías de avanzada</option>
          <option value="3">Digitalización de tecnologías avanzadas en cadena de aprovisionamiento</option>
          <option value="4">Digitalización de tecnologías avanzadas en procesamiento</option>
          <option value="5">Digitalización de tecnologías avanzadas en canales de distribución</option>
        </select>
        <select v-if="subsection == 4" v-model="indicator">
          <option disabled value="" selected>Seleccione un indicador</option>
          <option value="1">Índice de gestión de tecnologías digitales avanzadas</option>
          <option value="2">Índice de gobernanza de tecnologías digitales avanzadas</option>
          <option value="3">Índice de capital humano de tecnologías digitales avanzadas</option>
        </select>
     </div> -->
      <div class="col-sm-12">
        <bar-chart
          class="chart-item"
          :chart-data="dataCollection"
          :options="dataOptions"
          :height="200"
          >
        </bar-chart>
      </div>
      <div v-if="selected_results" class="col-sm-12">
        <table class="table">
          <thead>
            <tr>
              <th>Categoría</th>
              <th>Porcentaje</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, key) in selected_results[0]" v-if="percentageRow(key)" :key="key">
              <td>{{ key }}</td>
              <td>{{ showValue(value) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </page>
</template>

<script>
  import _ from 'lodash'
  import Papa from 'papaparse'

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
        size: 'Total',
        indicator: '',
        sector: 'Total:Total:Total',
        region: 'Total',
        year: '2015',
        dataOptions: {
          responsive: true,
          maintainAspectRatio: true,
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
            ],
            yAxes: [
              {
                ticks: {
                  min: 0,
                  max: 100,
                  stepSize: 20
                }
              }
            ]
          }
        },
        dataCollection: null,
        results: null,
        dataFiles: [
          {
            section: 3,
            subsection: 1,
            type: 'sector',
            url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQEARxmtLDf1Km8q8hVeuL_uXXZkxMrUH1I39qgcCbI3fRlThG2jx9GmVG5hSPTV8sk6tGAMjjmZ8-q/pub?gid=890321464&single=true&output=csv'
          },
          {
            section: 3,
            subsection: 2,
            type: 'sector',
            url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTPWVOQyE3hfHAg9IlVyHoVaG7n9OgVHVmuube5s0eLWaIMiBTpMVVqzenzlp_mfaSxZgAZeP3HuwLZ/pub?gid=932020998&single=true&output=csv'
          },
          {
            section: 4,
            subsection: 1,
            type: 'region',
            url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQEARxmtLDf1Km8q8hVeuL_uXXZkxMrUH1I39qgcCbI3fRlThG2jx9GmVG5hSPTV8sk6tGAMjjmZ8-q/pub?gid=1487174477&single=true&output=csv'
          },
          {
            section: 4,
            subsection: 2,
            type: 'region',
            url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTPWVOQyE3hfHAg9IlVyHoVaG7n9OgVHVmuube5s0eLWaIMiBTpMVVqzenzlp_mfaSxZgAZeP3HuwLZ/pub?gid=353370071&single=true&output=csv'
          },
          {
            section: 5,
            subsection: 1,
            type: 'size',
            url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQEARxmtLDf1Km8q8hVeuL_uXXZkxMrUH1I39qgcCbI3fRlThG2jx9GmVG5hSPTV8sk6tGAMjjmZ8-q/pub?gid=1406692202&single=true&output=csv'
          },
          {
            section: 5,
            subsection: 2,
            type: 'size',
            url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTPWVOQyE3hfHAg9IlVyHoVaG7n9OgVHVmuube5s0eLWaIMiBTpMVVqzenzlp_mfaSxZgAZeP3HuwLZ/pub?gid=1422745164&single=true&output=csv'
          }
        ]
      }
    },

    mounted () {
      let that = this
      if (this.dataFile) {
        Papa.parse(this.dataFile, {
          download: true,
          header: true,
          complete: function (results, file) {
            that.results = results
          }
        })
      }
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
      },

      selected_results: function () {
        let [sector, economicSector, subSector] = this.sector.split(':')
        if (this.results) {
          let results = _.filter(this.results.data, {
            'Año': this.year,
            'Tamaño de Empresa': this.size,
            'Region Geografica': this.region,
            'Sector': sector,
            'Sector Economico': economicSector,
            'Sub sector': subSector
          })
          console.log('FOUND ' + results.length +
                      '  [Año: ' + this.year +
                      ', Tamaño de Empresa: ' + this.size +
                      ', Region Geografica: ' + this.region +
                      ', Sector: ' + sector +
                      ', Sector Economico: ' + economicSector +
                      ', Sub sector: ' + subSector + ']')
          return results
        } else {
          return null
        }
      },

      dataFile: function () {
        let obj = _.find(this.dataFiles, { section: parseInt(this.section), subsection: parseInt(this.subsection) })
        return obj ? obj.url : null
      }
    },

    methods: {
      showValue: function (value) {
        return _.trim(value) === '' ? '--' : value
      },

      percentageRow: function (key) {
        return _.startsWith(key, 'Proporcion') || _.startsWith(key, 'Porcentaje')
      },

      fillData: function () {
        let labels = []
        let values = []
        if (this.subsection === 1) {
          values = [0, 0, 0, 0, 0]
          labels = ['Calculo del Indice', 'Distribucion', 'Infraestructura', 'Insumos', 'Procesamiento']
          if (this.selected_results.length) {
            values = [
              this.selected_results[0]['Calculo del Indice'],
              this.selected_results[0]['Distribucion'],
              this.selected_results[0]['Infraestructura'],
              this.selected_results[0]['Insumos'],
              this.selected_results[0]['Procesamiento']
            ]
          }
        }
        if (this.subsection === 2) {
          values = [0, 0, 0, 0, 0, 0]
          labels = ['Calculo del Indice', 'GOBERNANZA', 'PRESUPUESTO', 'CAPACITIACIÓN', 'SEGURIDAD', 'INNOVACIÓN']
          if (this.selected_results.length) {
            values = [
              this.selected_results[0]['Calculo del Indice'],
              this.selected_results[0]['GOBERNANZA'],
              this.selected_results[0]['PRESUPUESTO'],
              this.selected_results[0]['CAPACITIACIÓN'],
              this.selected_results[0]['SEGURIDAD'],
              this.selected_results[0]['INNOVACIÓN']
            ]
          }
        }

        this.dataCollection = {
          labels: labels,
          datasets: [
            {
              backgroundColor: '#f87979',
              data: values
            }
          ]
        }
      }
    },

    watch: {
      dataFile: function () {
        let that = this
        if (this.dataFile) {
          Papa.parse(this.dataFile, {
            download: true,
            header: true,
            complete: function (results, file) {
              that.results = results
            }
          })
        }
      },

      selected_results: function () {
        this.fillData()
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
  select {
    margin-bottom: 0.5em;
    margin-right: 0.5em;
  }
</style>

