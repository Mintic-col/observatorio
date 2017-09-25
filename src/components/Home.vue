<template>
  <div class="home">
    <nav-bar />
    <h1>{{ msg }}</h1>
    <nav-footer />
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'
  import NavFooter from '@/components/NavFooter'

  export default {

    name: 'home',
    data () {
      return {
        msg: 'Bienvenido al Observatorio de Colombia'
      }
    },

    components: {
      NavBar,
      NavFooter
    }

  }
</script>

<style scoped>
</style>
