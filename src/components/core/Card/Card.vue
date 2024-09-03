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
    validator: value => ['primary', 'secondary', 'white', 'light'].includes(value),
  },
  shape: {
    type: String,
    default: 'rounded',
    validator: value => ['rounded', 'square'].includes(value),
  }
})
const style = computed(() => {
  let {type, color, shape} = props;
  let componentColor;
  if (color === 'primary') {
    componentColor = 'var(--s-semantic-primary-background-normal-default)';
  } else if (color === 'secondary') {
    componentColor = 'var(--s-semantic-primary-background-light-default)';
  } else if (color === 'white') {
    componentColor = 'var(--s-semantic-primary-background-white-default)';
  } else if (color === 'light') {
    componentColor = 'var(--s-semantic-tag-background-primary-default)';
  }
  return {
    background: type === 'filled' ? componentColor : 'transparent',
    border: type === 'outlined' ? `1px solid ${componentColor}` : 'none',
    borderRadius: shape === 'rounded' ? '14px' : '0'
  };
})
</script>
