<template lang="html">
  <div class="page">
    <nav-bar />
    <div :class="{ container: container }">
      <slot></slot>
    </div>
    <nav-footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import NavFooter from '@/components/NavFooter'

export default {
  name: 'screen',

  props: {
    container: {
      default: true,
      type: Boolean
    }
  },

  components: {
    NavBar,
    NavFooter
  }
}
</script>

<style lang="css" scoped>
</style>
