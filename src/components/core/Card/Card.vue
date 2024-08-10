<template>
  <div class="p3" :style="style">
    <slot name="body-content"></slot>
  </div>
</template>
<script setup>
import {computed} from "vue";

const props = defineProps({
  type: {
    type: String,
    default: 'filled',
    validator: value => ['filled', 'outlined'].includes(value)
  },
  color: {
    type: String,
    default: 'primary',
    validator: value => ['primary', 'secondary'].includes(value)
  },
})
const style = computed(() => {
  let {type, color} = props;
  let componentColor = color === 'primary' ? 'var(--s-semantic-primary-background-normal-default)' : 'var(--s-semantic-primary-background-light-default)'

  return {
    background: type === 'filled' ? componentColor : 'transparent',
    border: type === 'outlined' ? `1px solid ${componentColor}` : 'none',
    borderRadius: '14px'
  };
})
</script>