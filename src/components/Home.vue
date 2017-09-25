<template>
  <page class="home">
    <h1>{{ msg }}</h1>
  </page>
</template>

<script>
  import Page from '@/components/Page'

  export default {
    name: 'home',

    data () {
      return {
        msg: 'Bienvenido al Observatorio de Colombia'
      }
    },

    components: {
      Page
    }

  }
</script>

<style scoped>
</style>
