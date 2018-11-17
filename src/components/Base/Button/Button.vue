<template>
  <button 
    :class="[typeClassName, sizeClassName, { '-autoWidth': autoWidth }]" 
    :type="nativeType" 
    :disabled="disabled" 
    class="Button" 
    @click="handleClick"
  >
    <div class="Button__Text">{{ text }}</div>
    <i 
      v-if="loading" 
      class="Button__Icon el-icon-loading"
    />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { oneOf } from '@/utils/utils'

export default Vue.extend({
  props: {
    nativeType: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary',
      validator: oneOf(['primary', 'secondary', 'destructive'])
    },
    size: {
      type: String,
      default: 'midium',
      validator: oneOf(['small', 'midium', 'large'])
    },
    autoWidth: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    typeClassName(): string {
      return `-${this.type}`
    },
    sizeClassName(): string {
      return `-${this.size}`
    }
  },
  methods: {
    handleClick(): void {
      this.$emit('click')
    }
  }
})
</script>

<style scoped>
.Button {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  min-width: calc(8px * 19);
  border: none;
  border-radius: var(--radius-base);
  cursor: pointer;
  transition: var(--transition-normal);
}

.Button.-autoWidth {
  width: 100%;
}

.Button__Icon {
  fill: currentColor;
}

.Button.-small {
  height: var(--size-lv4);
  margin-bottom: var(--space-lv2);
  padding: 0 calc(8px * 2);
  font-weight: var(--fontWeight-bold);
  font-size: var(--fontSize-normal);
  border-radius: 20px;
}

.Button.-small .Button__Icon {
  margin-left: 8px;
}

.Button.-midium {
  height: var(--size-lv6);
  margin-bottom: var(--space-lv2);
  padding: 0 calc(8px * 2);
  font-weight: var(--fontWeight-bold);
  font-size: 14px;
  letter-spacing: 0.7px;
  border-radius: 28px;
}

.Button.-midium .Button__Icon {
  margin-left: 4px;
  font-size: 16px;
}

.Button.-large {
  height: 64px;
  margin-bottom: var(--space-lv2);
  padding: 0 calc(8px * 3);
  font-weight: var(--fontWeight-bold);
  font-size: var(--fontSize-h2);
  border-radius: 38px;
}

.Button.-large .Button__Icon {
  width: calc(8px * 3);
  height: calc(8px * 3);
  margin-right: calc(8px * 2);
}

.Button.-primary {
  color: #fff;
  background: var(--color-purple);
  box-shadow: 0px 4px 13px 0px rgba(15, 16, 18, 0.004);
}

.Button.-primary:hover {
  opacity: 0.6;
}

.Button.-primary:active {
  background: #070707;
}

.Button.-primary[disabled] {
  color: #aaa;
  background: #dadbe3;
  cursor: not-allowed;
  pointer-events: none;
}

.Button.-secondary {
  color: var(--color-white);
  background: rgba(255, 255, 255, 0.102);
}

.Button.-secondary:hover {
  background: var(--color-purple);
  box-shadow: 0px 4px 13px 0px rgba(15, 16, 18, 0.004);
}

.Button.-secondary:active {
  background: var(--color-purple);
}

.Button.-secondary[disabled] {
  color: #ddd;
  background: red;
  border: none;
  pointer-events: none;
}

.Button.-destructive {
  color: #fff;
  background: #e70;
}

.Button.-destructive[disabled] {
  color: #ddd;
  border: none;
  pointer-events: none;
}
</style>
