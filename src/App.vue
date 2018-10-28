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
import HeaderContainer from '@/containers/Header/index.vue'

export default Vue.extend({
  components: {
    HeaderContainer
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
