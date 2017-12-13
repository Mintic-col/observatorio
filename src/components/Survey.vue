<template>
  <page class="chart">
    <div class="col-sm-3">
      <sub-nav :section="sectionId" :subsection="subsectionId" />
    </div>
    <div class="col-sm-9">
      <h2>{{ level.title }}</h2>
    </div>
  </page>
</template>

<script>
import { getLevel } from '@/lib/data/nav'

import SubNav from '@/components/SubNav'
import Page from '@/components/Page'

export default {
  name: 'chart',

  props: ['section', 'subsection'],

  computed: {
    sectionId () {
      return parseInt(this.section)
    },

    subsectionId () {
      return parseInt(this.subsection)
    },

    level () {
      return getLevel(this.sectionId, this.subsectionId)
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

