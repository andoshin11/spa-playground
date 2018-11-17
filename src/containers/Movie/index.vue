<template>
  <div class="Movie" />
</template>

<script lang="ts">
import Vue from 'vue'

import Presenter, { IPresenter } from './presenter'

// Use Case

// Repositories

// Service

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
  methods: {
    async fetchMovie() {
      const id = parseInt(this.id, 10)
    }
  }
})
</script>
