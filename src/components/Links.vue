<template>
  <page class="chart">
    <div class="col-sm-3">
      <sub-nav :section="section" :subsection="subsection" />
    </div>
    <div class="col-sm-9">
      <h2>{{ level.title }} documentos</h2>
      <p v-for="link in links[subsectionId-1]" :key="link[0]"><a v-if="link[1].length" :href="'/static/docs/' + downloadGroup + link[1]">{{ link[0] }}</a><span v-else>{{ link[0] }}</span></p>
    </div>
  </page>
</template>

<script>
  import { getLevel } from '@/lib/data/nav'
  import LinksData from '@/lib/data/links'

  import SubNav from '@/components/SubNav'
  import Page from '@/components/Page'

  export default {
    name: 'chart',

    props: ['section', 'subsection'],

    data () {
      return {
        links: LinksData.links
      }
    },

    computed: {
      sectionId () {
        return parseInt(this.section)
      },

      subsectionId () {
        return parseInt(this.subsection)
      },

      level () {
        return getLevel(this.section, this.subsection)
      },

      downloadGroup () {
        return ['int/', 'la/'][this.subsection - 1]
      }
    },

    components: {
      SubNav,
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

