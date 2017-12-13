<template>
  <ul class="nav nav-pills nav-stacked">
    <li 
      v-for="(level, index) in sectionNav.levels" 
      :key="index" 
      :class="{ 'active': index === subsection - 1 }"
    >
      <router-link :to="{name: section.route, params: {section: section, subsection: index + 1}}">
        {{ level.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
  import {getSection} from '@/lib/data/nav'
  
  export default {
    props: {
      section: Number,
      subsection: Number
    },

    computed: {
      sectionNav () {
        return getSection(this.section)
      }
    }
  }
</script>

<style>

</style>
