<template>
  <page class="static">
    <div class="col-sm-3">
      <sub-nav :section="section" :subsection="subsection" />
    </div>
    <div class="col-sm-9">
      <h2>{{ level.title }}</h2>
      <div v-html="content" />
    </div>
  </page>
</template>

<script>
  import { getLevel } from '@/lib/data/nav'
  import StaticData from '@/lib/data/static'

  import SubNav from '@/components/SubNav'
  import Page from '@/components/Page'
  import Lipsum from '@/components/Lipsum'

  export default {
    name: 'static',

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
      },

      content () {
        return StaticData.static[this.sectionId - 1][this.subsectionId - 1]
      }
    },

    components: {
      SubNav,
      Page,
      Lipsum
    }

}
</script>

<style scoped>
  .static {
    text-align: left;
  }
  .nav-pills li.active a {
    background-color: gray;
  }
</style>

