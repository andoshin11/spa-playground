<template>
  <div class="Movie">
    <MovieContainer :id="$route.params.id" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MovieContainer from '@/containers/Movie/index.vue'

export default Vue.extend({
  components: {
    MovieContainer
  }
})
</script>
