<template>
  <div 
    ref="root" 
    class="Poster" 
    :style="posterStyle"
  >
    <img 
      :src="posterPath" 
      :alt="movie.props.title" 
      class="Poster__Image"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MovieEntity from '@/entities/Movie'

interface IData {
  clientWidth: number
}

export default Vue.extend({
  props: {
    movie: {
      type: Object as () => MovieEntity,
      required: true
    }
  },
  data(): IData {
    return {
      clientWidth: 0
    }
  },
  computed: {
    posterStyle(): any {
      const posterHight = (this.clientWidth / 2) * 3
      return {
        height: `${posterHight}px`
      }
    },
    posterPath(): string {
      return `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${
        this.movie.props.poster_path
      }`
    }
  },
  mounted() {
    if (!this.$refs.root) return

    const clientWidth = this.$refs.root.clientWidth
    this.clientWidth = clientWidth
  }
})
</script>

<style scoped>
.Poster {
  width: 100%;
}

.Poster__Image {
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
}
</style>
