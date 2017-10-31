<template>
  <page class="static">
    <div class="col-sm-3">
      <ul class="nav nav-pills nav-stacked">
        <li v-for="(item, index) in subsections[section-1]" :key="item" :class="{ 'active': index === parseInt(subsection)-1 }">
          <router-link :to="{name: 'Static', params: {section: section, subsection: index + 1}}">
            {{ item }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="col-sm-9">
      <h2>{{ subsections[section-1][subsection-1] }}</h2>
      <div v-html="staticText[section-1][subsection-1]"></div>
    </div>
  </page>
</template>

<script>
  import NavData from '@/lib/data/nav'
  import StaticData from '@/lib/data/static'

  import Page from '@/components/Page'
  import Lipsum from '@/components/Lipsum'

  export default {
    name: 'static',

    props: ['section', 'subsection'],

    data () {
      return {
        subsections: NavData.subsections,
        staticText: StaticData.static
      }
    },

    components: {
      NavData,
      StaticData,
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

