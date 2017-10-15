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
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Visión
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link :to="{name: 'Static', params: {section: 1, subsection: 1}}">
                  Que es la economía digital?
                </router-link>
              </li>
              <li>
                <router-link :to="{name: 'Static', params: {section: 1, subsection: 2}}">
                  Tendencias mundiales de digitalización de las economías
                </router-link>
              </li>
              <li>
                <router-link :to="{name: 'Static', params: {section: 1, subsection: 3}}">
                  La importancia económica de la digitalización
                </router-link>
              </li>
              <li>
                <router-link :to="{name: 'Static', params: {section: 1, subsection: 4}}">
                  La economía digital y Colombia
                </router-link>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Medición
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link :to="{name: 'Static', params: {section: 2, subsection: 1}}">
                  Dimensiones de la economía digital
                </router-link>
              </li>
              <li>
                <router-link :to="{name: 'Static', params: {section: 2, subsection: 2}}">
                  Experiencia internacional apara la medición de la economía digital
                </router-link>
              </li>
              <li>
                <router-link :to="{name: 'Static', params: {section: 2, subsection: 3}}">
                  Índices para medir el desarrollo de la economía digital de Colombia
                </router-link>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sector
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link :to="{name: 'Chart', params: {section: 3, subsection: 1}}">
                  Adopción de tecnologías digitales maduras
                </router-link>
              </li>
              <li>
                <router-link :to="{name: 'Chart', params: {section: 3, subsection: 2}}">
                  Gestión de tecnologías digitales maduras
                </router-link>
              </li>
              <li>
                <router-link :to="{name: 'Chart', params: {section: 3, subsection: 3}}">
                  Adopción de tecnologías digitales avanzadas
                </router-link>
              </li>
              <li>
                <router-link :to="{name: 'Chart', params: {section: 3, subsection: 4}}">
                  Gestión de tecnologías digitales avanzadas
                </router-link>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Región
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link :to="{name: 'Chart', params: {section: 4, subsection: 1}}">
                  Adopción de tecnologías digitales maduras
                </router-link>
              </li>
              <li>
                <router-link :to="{name: 'Chart', params: {section: 4, subsection: 2}}">
                  Gestión de tecnologías digitales maduras
                </router-link>
              </li>
              <li>
                <router-link :to="{name: 'Chart', params: {section: 4, subsection: 3}}">
                  Adopción de tecnologías digitales avanzadas
                </router-link>
              </li>
              <li>
                <router-link :to="{name: 'Chart', params: {section: 4, subsection: 4}}">
                  Gestión de tecnologías digitales avanzadas
                </router-link>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dimensiones
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link :to="{name: 'Chart', params: {section: 5, subsection: 1}}">
                  Adopción de tecnologías digitales maduras
                </router-link>
              </li>
              <li>
                <router-link :to="{name: 'Chart', params: {section: 5, subsection: 2}}">
                  Gestión de tecnologías digitales maduras
                </router-link>
              </li>
              <li>
                <router-link :to="{name: 'Chart', params: {section: 5, subsection: 3}}">
                  Adopción de tecnologías digitales avanzadas
                </router-link>
              </li>
              <li>
                <router-link :to="{name: 'Chart', params: {section: 5, subsection: 4}}">
                  Gestión de tecnologías digitales avanzadas
                </router-link>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Encuestas
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link :to="{name: 'Survey', params: {section: 6, subsection: 1}}">
                  Departamento Administrativo Nacional de Estadística (DANE)
                </router-link>
              </li>
              <li>
                <router-link :to="{name: 'Survey', params: {section: 6, subsection: 2}}">
                  Ministerio de Tecnologías de la Información y las Comunicaciones (MINTIC)
                </router-link>
              </li>
              <li>
                <router-link :to="{name: 'Survey', params: {section: 6, subsection: 3}}">
                  Otras encuestas
                </router-link>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Documentos
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link :to="{name: 'Links', params: {section: 7, subsection: 1}}">
                  Adopción de tecnologías digitales maduras
                </router-link>
              </li>
              <li>
                <router-link :to="{name: 'Links', params: {section: 7, subsection: 2}}">
                  Gestión de tecnologías digitales maduras
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
export default {
  name: 'navbar'
}
</script>

<style scoped>
.navbar {
  margin-bottom: 0px;
}
</style>