<template>
  <div class="PosterList">
    <div class="PosterList__Header">
      <div class="PosterList__Title">{{ title }}</div>
      <div class="PosterList__Nav">
        <Pager 
          :current-page="currentPage" 
          :size="1" 
          :total="movies.length" 
          @change="changePage"
        />  
      </div>  
    </div>
    <div class="PosterList__Body">
      <div 
        v-if="movies" 
        class="PosterList__Slider"
      >
        <div 
          class="PosterList__SliderInner" 
          :style="slideInnterStyle"
        >
          <div 
            v-for="(movie, index) in movies" 
            :key="index" 
            class="PosterList__SliderItem"
          >
            <Poster :movie="movie" />
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script lang="ts">
import Vue from 'vue'
import MovieEntity from '@/entities/Movie'

import Pager from '@/components/Base/Pager'
import Poster from '@/components/Modules/Movies/Poster'

interface IData {
  currentPage: number
}

export default Vue.extend({
  components: {
    Pager,
    Poster
  },
  props: {
    title: {
      type: String,
      required: true
    },
    movies: {
      type: Array as () => MovieEntity[],
      required: true
    }
  },
  data(): IData {
    return {
      currentPage: 1
    }
  },
  computed: {
    slideInnterStyle(): any {
      const left = (this.currentPage - 1) * 20 * -1 + 5
      return {
        left: `${left}vw`
      }
    }
  },
  methods: {
    changePage(num: number) {
      if (num <= 0 || this.movies.length < num) return
      this.currentPage = num
    }
  }
})
</script>

<style scoped>
.PosterList {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.PosterList__Header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  margin-bottom: var(--space-lv2);
  padding: 0 5vw;
}

.PosterList__Body {
  width: 100%;
}

.PosterList__Title {
  color: var(--color-white);
  font-weight: var(--fontWeight-bold);
  font-size: var(--fontSize-h1);
}

.PosterList__Slider {
  position: relative;
  width: 100%;
  height: calc(20vw / 2 * 3);
  overflow: hidden;
}

.PosterList__SliderInner {
  position: absolute;
  display: flex;
  transition: var(--transition-slow);
}

.PosterList__SliderItem {
  width: 19vw;
  margin-right: 1vw;
}
</style>
