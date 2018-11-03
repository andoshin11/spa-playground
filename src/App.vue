<template>
  <div 
    id="app" 
    class="App"
  >
    <div class="App__Header">
      <HeaderContainer />
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import store from '@/store'
import HeaderContainer from '@/containers/Header/index.vue'

// Use Case
import FetchGenresUseCase from '@/usecases/movies/FetchGenresUseCase'

// Gateway
import MovieDBGateway from '@/gateways/MovieDB'

// Repositories
import MovieRepository from '@/repositories/MovieRepository'

// Service
import ErrorService from '@/services/ErrorService'

export default Vue.extend({
  components: {
    HeaderContainer
  },
  async mounted() {
    await new FetchGenresUseCase({
      movieDBGateway: new MovieDBGateway(),
      movieRepository: new MovieRepository(store),
      errorService: new ErrorService({ context: 'FetchGenresUseCase' })
    }).execute()
  }
})
</script>


<style>
@import './assets/css/variables.css';
body {
  margin: 0;
}
#app {
  color: var(--color-blue);
  font-size: var(--fontSize-h1);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.App__Header {
  width: 100%;
  height: 100px;
  background: var(--color-black);
}
</style>
