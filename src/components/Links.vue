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
  import NavData from '@/lib/data/nav'
  import LinksData from '@/lib/data/links'

  import Page from '@/components/Page'

  export default {
    name: 'chart',

    props: ['section', 'subsection'],

    data () {
      return {
        subsections: NavData.subsections,
        links: LinksData.links
      }
    },

    components: {
      NavData,
      LinksData,
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

