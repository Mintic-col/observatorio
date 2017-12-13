<template>
  <page class="chart">
    <div class="col-sm-3">
      <sub-nav :section="sectionId" :subsection="subsectionId" />
    </div>
    <div class="col-sm-9">
      <h4 class="grouping">{{ title }}</h4>
      <h2>{{ level.title }}</h2>
      <p>
        {{ level.description }}
      </p>
      <div class="col-sm-3">
        <select v-model="year" class="form-control">
          <option 
            v-for="year in level.years" 
            :value="year"
            :key="year"
          >
            {{ year }}
          </option>
        </select>
      </div>
      <div class="col-sm-3">
        <select v-model="indicator" class="form-control">
          <option 
            v-for="indicator in level.indicators"
            :key="indicator.value"
            :value="indicator.value"
          >
            {{ indicator.name }}
          </option>
        </select>
      </div>
      <div class="col-sm-3">
        <select v-model="size" class="form-control">
          <option v-for="option in sizes" :key="option.value" :value="option.value">
            {{option.name}}
          </option>
        </select>
      </div>
      <div class="col-sm-3">
        <select v-model="region" class="form-control">
          <option v-for="option in regions" :key="option.value" :value="option.value">
            {{option.name}}
          </option>
        </select>
      </div>
      <div class="col-sm-4">
        <select v-model="sectorGroup" class="form-control">
          <option v-for="option in sectorGroups" :key="option.value" :value="option.value">
            {{option.name}}
          </option>
        </select>
      </div>
      <div class="col-sm-4">
        <select v-if="sectors.length" v-model="sector" class="form-control">
          <option v-for="option in sectors" :key="option.value" :value="option.value">
            {{option.name}}
          </option>
        </select>
      </div>
      <div class="col-sm-4">
        <select v-if="subSectors.length" v-model="subSector" class="form-control">
          <option v-for="option in subSectors" :key="option.value" :value="option.value">
            {{option.name}}
          </option>
        </select>
      </div>
      <div class="col-sm-12 chart-container">
        <bar-chart
          class="chart-item"
          :chartData="chartData"
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

  import { getSection, getLevel } from '@/lib/data/nav'
  import * as Chart from '@/lib/data/chart-nav'

  import BarChart from '@/lib/chart/bar'
  import SubNav from '@/components/SubNav'
  import Page from '@/components/Page'
  import Lipsum from '@/components/Lipsum'

  export default {
    name: 'chart',

    props: ['section', 'subsection'],

    data () {
      return {
        sizes: Chart.sizes,
        regions: Chart.regions,
        sectorGroups: Chart.sectorGroups,
        size: 'Total',
        indicator: 'Calculo del Indice',
        sectorGroup: 'Total',
        sector: 'Total',
        subSector: 'Total',
        region: 'Total',
        year: null,
        results: null
      }
    },

    mounted () {
      this.initialize()
    },

    computed: {
      sectionId () {
        return parseInt(this.section)
      },

      subsectionId () {
        return parseInt(this.subsection)
      },

      title () {
        return getSection(this.sectionId).title
      },

      level () {
        return getLevel(this.sectionId, this.subsectionId)
      },

      sectors () {
        let sg = _.find(this.sectorGroups, {'value': this.sectorGroup})
        return sg && sg.sectors ? sg.sectors : []
      },

      subSectors () {
        let ss = _.find(this.sectors, {'value': this.sector})
        return ss && ss.subSectors ? ss.subSectors : []
      },

      tableResults () {
        return Chart.filtered(this.results, this)
      },

      validTableResults () {
        return this.tableResults &&
          this.tableResults[0] &&
          _.trim(this.tableResults[0]['Calculo del Indice'] || this.tableResults[0][' Calculo del Indice ']) !== ''
      },

      chartResults () {
        return Chart.filteredForChart(this.results, this.chartSettings, this)
      },

      chartSettings () {
        let bars = null
        let selected = null
        let dimension = null
        let click = null

        if (this.sectionId === 5) {
          bars = this.sizes
          selected = _.findIndex(bars, {'value': this.size})
          dimension = 'Tamaño de Empresa'
          click = array => {
            this.size = bars[array[0]._index].value
          }
        } else if (this.sectionId === 4) {
          bars = this.regions
          selected = _.findIndex(bars, {'value': this.region})
          dimension = 'Region Geografica'
          click = array => {
            this.region = bars[array[0]._index].value
          }
        } else if (this.sectionId === 3) {
          if (this.subSectors.length) {
            bars = this.subSectors
            selected = _.findIndex(bars, {'value': this.subSector})
            dimension = 'Sub sector'
            click = array => {
              this.subSector = bars[array[0]._index].value
            }
          } else if (this.sectors.length) {
            bars = this.sectors
            selected = _.findIndex(bars, {'value': this.sector})
            dimension = 'Sector Economico'
            click = array => {
              this.sector = bars[array[0]._index].value
              this.subSector = 'Total'
            }
          } else {
            bars = this.sectorGroups
            selected = _.findIndex(bars, {'value': this.sectorGroup})
            dimension = 'Sector'
            click = array => {
              this.sectorGroup = bars[array[0]._index].value
              this.sector = 'Total'
            }
          }
        }

        return {bars, selected, dimension, click}
      },

      chartData () {
        let {bars, selected, dimension} = this.chartSettings

        let values = _.map(bars, ({name, value}) => {
          if (this.chartResults) {
            let record = _.find(this.chartResults, row => row[dimension] === value)
            return record ? parseFloat(record[this.indicator] || record[' ' + this.indicator + ' ']) : 0
          } else {
            return 0
          }
        })

        let backgroundColor = _.times(bars.length, _.constant('#f87979'))
        if (selected >= 0) {
          backgroundColor[selected] = '#7979f8'
        }

        return {
          datasets: [{backgroundColor: backgroundColor, data: values}],
          labels: _.map(bars, 'name')
        }
      },

      dataOptions () {
        return {
          responsive: true,
          maintainAspectRatio: true,
          onClick: this.clickEvent,
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
        }
      }
    },

    methods: {
      initialize () {
        let {level} = this

        this.indicator = _.first(level.indicators).value

        if (!_.includes(level.years, this.year)) {
          this.year = _.first(level.years)
        }

        Chart.fetchData(level.dataFile).then(results => {
          this.results = results
        })
      },

      clickEvent (event, array) {
        if (array.length > 0) {
          this.chartSettings.click(array)
        }
      },

      showValue (value) {
        let v = _.trim(value)
        return v === '' ? 'n.d.' : (_.endsWith(v, '%') ? v : v + '%')
      },

      isPercentageRow (key) {
        return _.startsWith(_.trim(key), 'Porcentaje') || _.startsWith(_.trim(key), 'Proporcion')
      }
    },

    watch: {
      section () {
        this.indicator = 'Calculo del Indice'
      },

      subsection () {
        this.initialize()
      },

      sectorGroup () {
        this.sector = 'Total'
        this.subSector = 'Total'
      },

      sector () {
        this.subSector = 'Total'
      }
    },

    components: {
      SubNav,
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

