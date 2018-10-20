<template>
  <div class="Home">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import store from '@/store'

import Presenter, { IPresenter } from './presenter'

// Use Case
import FetchPopularMoviesUseCase from '@/usecases/movies/FetchPopularMoviesUseCase'

// Repositories
import MovieRepository from '@/repositories/MovieRepository'

// Service
import ErrorService from '@/services/ErrorService'

// components

interface IData {}

export default Vue.extend({
  data(): IData {
    return {}
  },
  computed: {
    presenter(): IPresenter {
      return Presenter({
        movieRepository: new MovieRepository(store)
      })
    }
  },
  methods: {
    async loadContainer() {
      const usecase = new FetchPopularMoviesUseCase({
        movieRepository: new MovieRepository(store),
        errorService: new ErrorService({ context: 'Fetching popular movies' })
      })

      await usecase.execute()
    }
  },
  async mounted() {
    await this.loadContainer()
  }
})
</script>

<style scoped>
.Home {
  min-height: 100vh;
  background: var(--color-black);
}
</style>
