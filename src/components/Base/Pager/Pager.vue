<template>
  <div class="Pager">
    <button
      :disabled="internalCurrentPage === 1"
      class="Pager__ArrowButton"
      @click="onClickPrev"
    >←</button>
    <button
      :disabled="internalCurrentPage === maxPage"
      class="Pager__ArrowButton"
      @click="onClickNext"
    >→</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface IData {
  internalCurrentPage: number
}

export default Vue.extend({
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 20
    }
  },
  data(): IData {
    return {
      internalCurrentPage: 1
    }
  },
  computed: {
    maxPage(): number {
      return Math.ceil(this.total / this.size)
    }
  },
  watch: {
    currentPage: {
      immediate: true,
      handler(val) {
        this.internalCurrentPage = val
      }
    }
  },
  methods: {
    onClickNumButton(pageNum: number) {
      this.internalCurrentPage = pageNum
      this.$emit('change', this.internalCurrentPage)
    },
    onClickPrev() {
      this.internalCurrentPage -= 1
      this.$emit('change', this.internalCurrentPage)
    },
    onClickNext() {
      this.internalCurrentPage += 1
      this.$emit('change', this.internalCurrentPage)
    }
  }
})
</script>

<style scoped>
.Pager {
  display: flex;
  align-items: center;
}

.Pager__ArrowButton {
  width: var(--size-lv5);
  height: var(--size-lv5);
  margin-right: var(--space-lv2);
  color: var(--color-white);
  font-size: var(--fontSize-h3);
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

.Pager__ArrowButton[disabled] {
  color: var(--color-gray);
  background-color: rgba(255, 255, 255, 0.2);
  cursor: not-allowed;
}
</style>
