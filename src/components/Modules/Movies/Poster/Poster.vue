<template>
  <div 
    ref="root" 
    class="Poster" 
    :style="posterStyle"
    :class="{ 'is-focused': focused }"
  >
    <img 
      :src="posterPath" 
      :alt="movie.props.title" 
      class="Poster__Image"
    >
    <div class="content">
      <div class="star">{{ movie.props.vote_average }}</div>
      <div class="genres">{{ genreNames }}</div>
      <div class="detailButton">
        <BaseButton 
          text="Detail" 
          size="midium"
          @click="goToDetail"
        />
      </div>
      <div class="addListButton">
        <BaseButton 
          text="My List"
          size="midium"
          type="secondary"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MovieEntity from '@/entities/Movie'
import BaseButton from '@/components/Base/Button'

interface IData {
  clientWidth: number
}

export default Vue.extend({
  components: {
    BaseButton
  },
  props: {
    movie: {
      type: Object as () => MovieEntity,
      required: true
    },
    focused: {
      type: Boolean,
      default: false
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
    genreNames(): string {
      if (!this.movie) return
      return this.movie.props.genres.map(genre => genre.name).join(', ')
    },
    posterPath(): string {
      return `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${this.movie.props.poster_path}`
    }
  },
  mounted() {
    if (!this.$refs.root) return

    const clientWidth = this.$refs.root.clientWidth
    this.clientWidth = clientWidth
  },
  methods: {
    goToDetail() {
      this.$router.push({ name: 'movie', params: { id: this.movie.props.id } })
    }
  }
})
</script>

<style scoped>
.Poster {
  position: relative;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
}

.Poster__Image {
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
}

.Poster.is-focused .Poster__Image,
.Poster:focus .Poster__Image,
.Poster:hover .Poster__Image {
  filter: blur(10px);
  transition: all 0.4s ease-out;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.4s ease-out;
}

.Poster.is-focused .content,
.Poster:focus .content,
.Poster:hover .content {
  opacity: 1;
}

.star {
  margin-bottom: var(--space-lv1);
  color: var(--color-white);
  font-weight: var(--fontWeight-bold);
  font-size: var(--fontSize-h2);
}

.genres {
  width: 80%;
  min-height: 50px;
  margin-bottom: var(--space-lv2);
  color: var(--color-white);
  font-size: var(--fontSize-h3);
  letter-spacing: 1px;
}
</style>
