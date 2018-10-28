<template>
  <div class="Header">
    <div class="Header__Left">SPA Playground</div>
    <div class="Header__Right">right</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// components

interface IData {}

export default Vue.extend({
  data(): IData {
    return {}
  },
  methods: {
    async loadContainer() {}
  },
  async mounted() {
    await this.loadContainer()
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
