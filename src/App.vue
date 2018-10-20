<template>
  <div id="app">
    Vue Rendered!
    <router-view />
  </div>
</template>

<style>
@import './assets/css/variables.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-blue);
  font-size: var(--fontSize-h1);
}
</style>
