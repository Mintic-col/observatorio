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
      <div class="col-sm-2">
        <select  v-if="subsection == 1 || subsection == 3" v-model="year">
          <option value="2015" selected>2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
        </select>
        <select  v-else v-model="year">
          <option value="2017" selected>2017</option>
        </select>
      </div>
      <div class="col-sm-3">
        <select v-if="subsection == 1" v-model="indicator" @change="fillData()">
          <option value="Calculo del Indice">Indice de Digitalización</option>
          <option value="Infraestructura">Infraestructura</option>
          <option value="Insumos">Insumos</option>
          <option value="Procesamiento">Procesamiento</option>
          <option value="Distribucion">Distribucion</option>
        </select>
        <select v-if="subsection == 2" v-model="indicator" @change="fillData()">
          <option value="Calculo del Indice">Indice de Digitalización</option>
          <option value="GOBERNANZA">Gobernanza</option>
          <option value="PRESUPUESTO">Presupuesto</option>
          <option value="CAPACITIACIÓN">Capacitiación</option>
          <option value="SEGURIDAD">Seguridad</option>
          <option value="INNOVACIÓN">Innovación</option>
        </select>
        <select v-if="subsection == 3" v-model="indicator" @change="fillData()">
          <option value="Calculo del Indice">Indice de Digitalización</option>
          <option value="INFRAESTRUCTURA">Infraestructura</option>
          <option value="PROCESAMIENTO">Procesamiento</option>
          <option value="DISTRIBUCION">Distribucion</option>
        </select>
        <select v-if="subsection == 4" v-model="indicator" @change="fillData()">
          <option value="Calculo del Indice">Indice de Digitalización</option>
          <option value="ESTRATEGIA">Estrategia</option>
          <option value="GOBERNANZA">Gobernanza</option>
          <option value="CAPITAL HUMANO">Capital Humano</option>
        </select>
      </div>
      <div class="col-sm-3">
        <select v-model="size">
          <option value="Total">Todos tamaños de empresa</option>
          <option value="Micros">Microempresas</option>
          <option value="Pymes">Pymes</option>
          <option value="Grandes">Grandes</option>
        </select>
      </div>
      <div class="col-sm-3">
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
      <div class="col-sm-12">
        <select v-model="sectorGroup" @change="changeSectorGroup()">
          <option value="Total">Todos los sectores</option>
          <option value="Sector Primario">Sector primario</option>
          <option value="Sector Secundario">Sector secundario</option>
          <option value="Sector Terciario">Sector terciario</option>
        </select>
        <select v-if="sectorGroup != 'Total'" v-model="sector" @change="changeSector()">
          <option value="Total">Todos los sectores</option>
          <option v-if="sectorGroup == 'Sector Primario'" value="Agricultura y ganadería">Agricultura y ganadería</option>
          <option v-if="sectorGroup == 'Sector Primario'" value="Minas y canteras">Minas y canteras</option>
          <option v-if="sectorGroup == 'Sector Secundario'" value="Industrias manufactureras">Manufactura</option>
          <!-- <option v-if="sectorGroup == 'Sector Secundario'" value="Servicios Publicos">Servicios públicos</option>
          <option v-if="sectorGroup == 'Sector Secundario'" value="Construccion">Construcción</option>
          <option v-if="sectorGroup == 'Sector Terciario'" value="Comercio">Comercio</option> -->
          <option v-if="sectorGroup == 'Sector Terciario'" value="Servicios">Servicios</option>
        </select>
         <select v-if="subSectorSelection" v-model="subSector">
          <option value="Total">Todos los sectores</option>
          <option v-if="sector == 'Industrias manufactureras'" value="Textiles, prendas y cueros">Textiles, prendas y cueros</option>
          <option v-if="sector == 'Industrias manufactureras'" value="Alimentos y Bebidas">Alimentos y Bebidas</option>
          <option v-if="sector == 'Industrias manufactureras'" value="Productos metalurgicos ">Productos metalurgicos</option>
          <option v-if="sector == 'Industrias manufactureras'" value="Productos de quimicos /farmaceuticos /plasticos">Productos de quimicos /farmaceuticos /plasticos</option>
          <option v-if="sector == 'Industrias manufactureras'" value="Madera y muebles">Madera y muebles</option>
          <option v-if="sector == 'Industrias manufactureras'" value="Papel e impresión">Papel e impresión</option>
          <option v-if="sector == 'Industrias manufactureras'" value="Otros manufactura">Otros manufactura</option>
          <option v-if="sector == 'Servicios'" value="Transporte y almacenamiento">Transporte y almacenamiento</option>
          <option v-if="sector == 'Servicios'" value="Alojamiento y servicios de comida">Alojamiento y servicios de comida</option>
          <option v-if="sector == 'Servicios'" value="Información y comunicaciones">Información y comunicaciones</option>
          <option v-if="sector == 'Servicios'" value="Actividades financieras y de seguros">Actividades financieras y de seguros</option>
          <option v-if="sector == 'Servicios'" value="Actividades inmobiliarias y Actividades de servicios administrativos y de apoyo">Actividades inmobiliarias y Actividades de servicios administrativos y de apoyo</option>
          <option v-if="sector == 'Servicios'" value="Actividades profesionales, científicas y técnicas">Actividades profesionales, científicas y técnicas</option>
          <option v-if="sector == 'Servicios'" value="Administración pública y defensa">Administración pública y defensa</option>
          <option v-if="sector == 'Servicios'" value="Educacion">Educacion</option>
          <option v-if="sector == 'Servicios'" value="Atencion de salud y de asistencia social">Atencion de salud y de asistencia social</option>
          <option v-if="sector == 'Servicios'" value="Actividades artísticas, de entretenimiento y recreación">Actividades artísticas, de entretenimiento y recreación</option>
          <option v-if="sector == 'Servicios'" value="Otros servicios">Otros servicios</option>
        </select>
      </div>
      <div class="col-sm-12 chart-container">
        <bar-chart
          class="chart-item"
          :chartData="dataCollection"
          :options="dataOptions"
          :height="200"
          >
        </bar-chart>
        <div v-if="!validTableResults" class="chart-overlay"><br />NO DISPONIBLE POR FALTA DE DATOS </div>
      </div>
      <div v-if="tableResults" class="col-sm-12">
        <table class="table">
          <thead>
            <tr>
              <th>Categoría</th>
              <th>Porcentaje</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, key) in tableResults[0]" v-if="isPercentageRow(key)" :key="key">
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
        indicator: 'Calculo del Indice',
        sectorGroup: 'Total',
        sector: 'Total',
        subSector: 'Total',
        region: 'Total',
        year: (this.subsection === '2' || this.subsection === '4') ? '2017' : '2015',
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
        dataCollection: { datasets: [], labels: [] },
        results: null,
        dataFiles: [
          {
            subsection: 1,
            url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vScgfj7wnWUCwfFYU3T7h3TRfu1ggQglMfzitHjC6Y-L-2XbCfTPN3h4WCi8-muk_ZzTY9YH_5iHpFK/pub?gid=75109715&single=true&output=csv'
          },
          {
            subsection: 2,
            url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vScgfj7wnWUCwfFYU3T7h3TRfu1ggQglMfzitHjC6Y-L-2XbCfTPN3h4WCi8-muk_ZzTY9YH_5iHpFK/pub?gid=433413066&single=true&output=csv'
          },
          {
            subsection: 3,
            url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vScgfj7wnWUCwfFYU3T7h3TRfu1ggQglMfzitHjC6Y-L-2XbCfTPN3h4WCi8-muk_ZzTY9YH_5iHpFK/pub?gid=1096815165&single=true&output=csv'
          },
          {
            subsection: 4,
            url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vScgfj7wnWUCwfFYU3T7h3TRfu1ggQglMfzitHjC6Y-L-2XbCfTPN3h4WCi8-muk_ZzTY9YH_5iHpFK/pub?gid=1442572218&single=true&output=csv'
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
      subSectorSelection: function () {
        return (this.sectorGroup === 'Sector Secundario' && this.sector === 'Industrias manufactureras') ||
               (this.sectorGroup === 'Sector Terciario' && this.sector === 'Servicios')
      },

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

      tableResults: function () {
        if (this.results) {
          let results = _.filter(this.results.data, {
            'Año': this.year,
            'Tamaño de Empresa': this.size,
            'Region Geografica': this.region,
            'Sector': this.sectorGroup,
            'Sector Economico': this.sector,
            'Sub sector': this.subSector
          })
          console.log('FOUND ' + results.length +
                      '  [Año: ' + this.year +
                      ', Tamaño de Empresa: ' + this.size +
                      ', Region Geografica: ' + this.region +
                      ', Sector: ' + this.sectorGroup +
                      ', Sector Economico: ' + this.sector +
                      ', Sub sector: ' + this.subSector + ']')
          return results
        } else {
          return null
        }
      },

      validTableResults: function () {
        return this.tableResults && this.tableResults[0] && _.trim(this.tableResults[0]['Calculo del Indice'] || this.tableResults[0][' Calculo del Indice ']) !== ''
      },

      chartResults: function () {
        if (this.results) {
          let results = null
          if (parseInt(this.section) === 5) {
            results = _.filter(this.results.data, {
              'Año': this.year,
              'Region Geografica': this.region,
              'Sector': this.sectorGroup,
              'Sector Economico': this.sector,
              'Sub sector': this.subSector
            })
          } else if (parseInt(this.section) === 4) {
            results = _.filter(this.results.data, {
              'Año': this.year,
              'Tamaño de Empresa': this.size,
              'Sector': this.sectorGroup,
              'Sector Economico': this.sector,
              'Sub sector': this.subSector
            })
          } else {
            if (this.sectorGroup === 'Total') {
              results = _.filter(this.results.data, {
                'Año': this.year,
                'Tamaño de Empresa': this.size,
                'Region Geografica': this.region,
                'Sector Economico': this.sector,
                'Sub sector': this.subSector
              })
            } else {
              results = _.filter(this.results.data, {
                'Año': this.year,
                'Tamaño de Empresa': this.size,
                'Region Geografica': this.region,
                'Sector': this.sectorGroup,
                'Sub sector': this.subSector
              })
            }
            if ((this.sectorGroup === 'Sector Secundario' && this.sector === 'Industrias manufactureras') ||
                (this.sectorGroup === 'Sector Terciario' && this.sector === 'Servicios')) {
              results = _.filter(this.results.data, {
                'Año': this.year,
                'Tamaño de Empresa': this.size,
                'Region Geografica': this.region,
                'Sector': this.sectorGroup,
                'Sector Economico': this.sector
              })
            }
          }
          console.log('FOUND ' + results.length + ' records for chart')
          return results
        } else {
          return null
        }
      },

      dataFile: function () {
        let obj = _.find(this.dataFiles, { subsection: parseInt(this.subsection) })
        return obj ? obj.url : null
      }
    },

    methods: {
      changeSectorGroup: function () {
        this.sector = 'Total'
        this.subSector = 'Total'
      },

      changeSector: function () {
        this.subSector = 'Total'
      },

      showValue: function (value) {
        let v = _.trim(value)
        return v === '' ? 'n.d.' : (_.endsWith(v, '%') ? v : v + '%')
      },

      isPercentageRow: function (key) {
        return _.startsWith(_.trim(key), 'Porcentaje') || _.startsWith(_.trim(key), 'Proporcion')
      },

      fillData: function () {
        let labels = []
        let values = []
        let keys = []
        let selectedIndex = -1

        if (parseInt(this.section) === 5) {
          labels = ['Todos tamaños de empresa', 'Microempresas', 'Pymes', 'Grandes']
          keys = ['Total', 'Micros', 'Pymes', 'Grandes']
          selectedIndex = keys.indexOf(this.size)
        } else if (parseInt(this.section) === 4) {
          labels = ['Nación', 'Costa Atlántica', 'Costa Pacifica', 'Región Central', 'Región Oriental', 'Antioquia', 'Eje Cafetero', 'Región de la Orinoquia y Amazonia']
          keys = ['Total', 'Region Atlantico', 'Region Pacifico', 'Region Central', 'Region Oriental', 'Antioquia', 'Eje Cafetero', 'Region de la Orinoquia y Amazonia']
          selectedIndex = keys.indexOf(this.region)
        } else if (parseInt(this.section) === 3) {
          if (this.sectorGroup === 'Total') {
            labels = ['Todos los sectores', 'Sector primario', 'Sector secundario', 'Sector terciario']
            keys = ['Total', 'Sector Primario', 'Sector Secundario', 'Sector Terciario']
            selectedIndex = keys.indexOf(this.sectorGroup)
          }
          if (this.sectorGroup === 'Sector Primario') {
            labels = ['Todos los sectores', 'Agricultura y ganadería', 'Minas y canteras']
            keys = ['Total', 'Agricultura y ganadería', 'Minas y canteras']
            selectedIndex = keys.indexOf(this.sector)
          }
          if (this.sectorGroup === 'Sector Secundario') {
            labels = ['Todos los sectores', 'Manufactura', 'Servicios públicos', 'Construcción']
            keys = ['Total', 'Industrias manufactureras', 'Servicios Publicos', 'Construccion']
            selectedIndex = keys.indexOf(this.sector)
          }
          if (this.sectorGroup === 'Sector Terciario') {
            labels = ['Todos los sectores', 'Comercio', 'Servicios']
            keys = ['Total', 'Comercio', 'Servicios']
            selectedIndex = keys.indexOf(this.sector)
          }
          if (this.sectorGroup === 'Sector Secundario' && this.sector === 'Industrias manufactureras') {
            labels = ['Todos los sectores', 'Textiles, prendas y cueros', 'Alimentos y Bebidas', 'Productos metalurgicos', 'Productos de quimicos /farmaceuticos /plasticos', 'Madera y muebles', 'Papel e impresión', 'Otros manufactura']
            keys = ['Total', 'Textiles, prendas y cueros', 'Alimentos y Bebidas', 'Productos metalurgicos', 'Productos de quimicos /farmaceuticos /plasticos', 'Madera y muebles', 'Papel e impresión', 'Otros manufactura']
            selectedIndex = keys.indexOf(this.subSector)
          }
          if (this.sectorGroup === 'Sector Terciario' && this.sector === 'Servicios') {
            labels = ['Todos los sectores', 'Transporte y almacenamiento', 'Alojamiento y servicios de comida', 'Información y comunicaciones', 'Actividades financieras y de seguros', 'Actividades inmobiliarias y Actividades de servicios administrativos y de apoyo', 'Actividades profesionales, científicas y técnicas', 'Administración pública y defensa', 'Educacion', 'Atencion de salud y de asistencia social', 'Actividades artísticas, de entretenimiento y recreación', 'Otros servicios']
            keys = ['Total', 'Transporte y almacenamiento', 'Alojamiento y servicios de comida', 'Información y comunicaciones', 'Actividades financieras y de seguros', 'Actividades inmobiliarias y Actividades de servicios administrativos y de apoyo', 'Actividades profesionales, científicas y técnicas', 'Administración pública y defensa', 'Educacion', 'Atencion de salud y de asistencia social', 'Actividades artísticas, de entretenimiento y recreación', 'Otros servicios']
            selectedIndex = keys.indexOf(this.subSector)
          }
        }

        let that = this
        values = _.map(keys, function (key) {
          if (that.chartResults) {
            let record = null
            if (parseInt(that.section) === 5) {
              record = _.find(that.chartResults, { 'Tamaño de Empresa': key })
            } else if (parseInt(that.section) === 4) {
              record = _.find(that.chartResults, { 'Region Geografica': key })
            } else if (parseInt(that.section) === 3) {
              if (that.sectorGroup === 'Total') {
                record = _.find(that.chartResults, { 'Sector': key })
              } else {
                record = _.find(that.chartResults, { 'Sector Economico': key })
              }
              if ((that.sectorGroup === 'Sector Secundario' && that.sector === 'Industrias manufactureras') ||
                  (that.sectorGroup === 'Sector Terciario' && that.sector === 'Servicios')) {
                record = _.find(that.chartResults, { 'Sub sector': key })
              }
            }
            return record ? parseFloat(record[that.indicator] || record[' ' + that.indicator + ' ']) : 0
          } else {
            return 0
          }
        })

        let backgroundColor = _.times(labels.length, _.constant('#f87979'))
        if (selectedIndex >= 0) {
          backgroundColor[selectedIndex] = '#7979f8'
        }
        this.dataCollection = {
          datasets: [{backgroundColor: backgroundColor, data: values}],
          labels: labels
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
        } else {
          that.results = null
        }
      },

      tableResults: function () {
        this.fillData()
      },

      section: function (to, from) {
        this.indicator = 'Calculo del Indice'
        this.fillData()
      },

      subsection: function (to, from) {
        this.indicator = 'Calculo del Indice'
        this.year = '2017'

        if (parseInt(to) === 1) {
          this.year = '2015'
        }
      }
    },

    components: {
      NavData,
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
  .chart-container {
    position: relative;
  }
  .chart-overlay {
    width: 300px;
    height: 55px;
    position: absolute;
    top: 100px;
    left: 30%;
    background-color: lightblue;
    text-align: center;
    font-weight: bold;
  }
</style>

