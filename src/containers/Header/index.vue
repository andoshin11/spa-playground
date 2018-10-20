<template>
  <div class="Header">
    <div class="Header__Left">SPA Playground</div>
    <div class="Header__Right">right</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { APIClient } from '@/infra/network/APIClient'
import {
  GetPopularMoviesRequest,
  GetPopularMovies
} from '@/infra/network/api/Movie'

import Presenter, { IPresenter } from './presenter'

// Use Case
import DestroyContainerUseCase from './DestroyContainerUseCase'

// components

interface IData {}

export default Vue.extend({
  data(): IData {
    return {}
  },
  methods: {
    async loadContainer() {
      const response = await APIClient.shared.request(new GetPopularMovies({}))
      console.log('response')
      console.log(response)
    }
  },
  async mounted() {
    await this.loadContainer()
  },
  async destroyed() {
    // const usecase = new DestroyContainerUseCase({})
    // await usecase.execute()
  }
})
</script>

<style scoped>
.Header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  color: var(--color-white);
  background: var(--color-black);
}
</style>
