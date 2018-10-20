<template>
  <div class="Home">
    <HomeContainer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HomeContainer from '@/containers/Home/index.vue'

export default Vue.extend({
  components: {
    HomeContainer
  }
})
</script>
