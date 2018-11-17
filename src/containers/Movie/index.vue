<template>
  <div class="Movie">
    {{ presenter.movie.props }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import store from '@/store'

import Presenter, { IPresenter } from './presenter'

// Use Case
import FetchMovieUseCase from '@/usecases/movies/FetchMovieUseCase'

// Gateway
import MovieDBGateway from '@/gateways/MovieDB'

// Repositories
import MovieRepository from '@/repositories/MovieRepository'

// Service
import ErrorService from '@/services/ErrorService'

// components

interface IData {}

export default Vue.extend({
  props: {
    id: {
      type: String,
      required: true
    }
  },
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
  async mounted() {
    await this.fetchMovie()
  },
  methods: {
    async fetchMovie() {
      const id = parseInt(this.id, 10)
      const usecase = new FetchMovieUseCase({
        errorService: new ErrorService({ context: 'Fetching movie.' }),
        movieRepository: new MovieRepository(store),
        movieDBGateway: new MovieDBGateway()
      })

      await usecase.execute(id)
    }
  }
})
</script>
