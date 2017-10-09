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
    <div class="col-sm-9 row">
      <div class="col-sm-6">
        <select v-model="selectedA">
          <option disabled value="" selected>Seleccione tamaño de empresa</option>
          <option>Empresas pequeñas, medianas y grandes</option>
          <option>Microempresas y pequeñas empresas</option>
        </select>
      </div>
      <div class="col-sm-6">
        <select v-model="selectedB">
          <option disabled value="" selected>Seleccione un indicador</option>
          <option>Digitalización total</option>
          <option>Adopción de infraestructura tecnológica digital</option>
          <option>Digitalización de la cadena de aprovisionamiento</option>
          <option>Digitalización de procesamiento</option>
          <option>Digitalización de canales de distribución</option>
        </select>
      </div>
    </div>
    <div class="col-sm-9 row">
      <div class="col-sm-6">
        <select v-model="selectedC">
          <option disabled value="" selected>Compare entre sectores</option>
          <option>Todos los sectores</option>
          <option>Agricultura</option>
          <option>Minería</option>
          <option>Industrias manufactureras</option>
          <option>Comercio</option>
          <option>Correo y almacenamiento</option>
          <option>Alojamiento y servicios de comida</option>
          <option>Información y Comunicaciones</option>
          <option>Actividades inmobiliarias</option>
        </select>
      </div>
      <div class="col-sm-2">
        <select v-model="selectedD">
          <option disabled value="" selected>Año</option>
          <option>2013</option>
          <option>2014</option>
          <option>2015</option>
        </select>
      </div>
      <div class="col-sm-12 row">
        <bar-chart
          class="chart"
          :data="dataCollection"
          :options="dataOptions"
          >
        </bar-chart>
      </div>
    </div>
  </page>
</template>

<script>
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
      selectedA: '',
      selectedB: '',
      selectedC: '',
      selectedD: '',
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
      dataCollection: {
        labels: [
          'Agricultura',
          'Minería',
          'Industrias manufactureras',
          'Comercio',
          'Correo y almacenamiento',
          'Alojamiento y servicios de comida',
          'Información y Comunicaciones',
          'Actividades inmobiliarias'
        ],
        datasets: [
          {
            backgroundColor: '#f87979',
            data: [0, 0, 53.21, 54.09, 58.92, 57.78, 64.01, 58.30, 61.44, 57.17]
          }
        ]
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
  .chart {
    margin-top: 2em;
  }
</style>

