<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
         <router-link class="navbar-brand" :to="{name: 'Home'}">
           Inicio
        </router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li 
            v-for="(section, sectionIdx) in sections"
            :key="sectionIdx"
            class="dropdown"
          >
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              {{section.title}}
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li 
                v-for="(level, levelIdx) in section.levels"
                :key="levelIdx"
              >
                <router-link :to="{name: section.route, params: {section: sectionIdx + 1, subsection: levelIdx + 1}}">
                  {{level.title}}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>

<script>
  import {sections} from '@/lib/data/nav'

  export default {
    name: 'navbar',

    computed: {
      sections () {
        return sections
      }
    }
  }
</script>

<style scoped>
.navbar {
  margin-bottom: 0px;
}
</style>