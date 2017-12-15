<template>
  <page class="home" :container="false">
    <div class="jumbotron row">
      <img class="col-md-4 jumbo" src="/static/images/robotic.jpg" />
      <img class="col-md-4 jumbo" src="/static/images/farming.jpg" />
      <img class="col-md-4 jumbo" src="/static/images/meeting.jpg" />
      <h1>{{ msg }}</h1>
    </div>
    <div class="container">
      <img src="/static/images/CCB.png" height="100" />
      <img src="/static/images/MINTIC.png" height="100" />
      <div class="sections row">
        <div class="col-md-3">
          <p>La economía digital y su importancia para Colombia</p>
        </div>
        <div class="col-md-3">
          <p>Midiendo la economía digital<br /><br /></p>
        </div>
        <div class="col-md-3">
          <p>La digitalización por sector industrial</p>
        </div>
        <div class="col-md-3">
          <p>La economía digital por región<br /><br /></p>
        </div>
      </div>
      <div class="section-buttons row">
        <div class="col-md-3">
          <router-link class="btn btn-primary" :to="{name: 'Static', params: {section: 1, subsection: 1}}">
            Visión »
          </router-link>
        </div>
        <div class="col-md-3">
          <router-link class="btn btn-primary" :to="{name: 'Static', params: {section: 2, subsection: 1}}">
            Medición »
          </router-link>
        </div>
        <div class="col-md-3">
          <router-link class="btn btn-primary" :to="{name: 'Chart', params: {section: 3, subsection: 1}}">
            Sector »
          </router-link>
        </div>
        <div class="col-md-3">
          <router-link class="btn btn-primary" :to="{name: 'Chart', params: {section: 4, subsection: 1}}">
            Región »
          </router-link>
        </div>
      </div>
      <div class="sections row">
        <div class="col-md-4">
          <p>La digitalización por dimensión de establecimiento</p>
        </div>
        <div class="col-md-4">
          <p>Encuestas sobre la digitalización del sector productivo en Colombia</p>
        </div>
        <div class="col-md-4">
          <p>Documentos relevantes para el estudio de la economía digital</p>
        </div>
      </div>
      <div class="section-buttons row">
        <div class="col-md-4">
          <router-link class="btn btn-primary" :to="{name: 'Chart', params: {section: 5, subsection: 1}}">
            Dimensiones »
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link class="btn btn-primary" :to="{name: 'Links', params: {section: 6, subsection: 1}}">
            Encuestas »
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link class="btn btn-primary" :to="{name: 'Links', params: {section: 7, subsection: 1}}">
            Documentos »
          </router-link>
        </div>
      </div>
    </div>
  </page>
</template>

<script>
  import Page from '@/components/Page'

  export default {
    name: 'home',

    data () {
      return {
        msg: 'Bienvenido al Observatorio de la Economía Digital de Colombia'
      }
    },

    components: {
      Page
    }

  }
</script>

<style scoped>
h1 {
  font-size: 36pt;
}
.jumbo {
  padding: 0;
  margin-bottom: 1em;
}
.sections {
  margin-top: 4em;
}
.jumbotron {
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
