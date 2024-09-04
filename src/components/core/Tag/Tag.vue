<template>
  <div :class="size === 'md' ? 's-caption-01' : 's-caption-00'" :style="style">
    <p>{{text}}</p>
  </div>
</template>
<script setup>
import {computed} from "vue";

const props = defineProps({
  text:{
    type: String,
    default: 'Text Bubble'
  },
  color: {
    type: String,
    default: 'primary',
    validator: value => ['primary', 'secondary', 'tertiary', 'strong'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: value => ['md', 'lg'].includes(value)
  }
})
const style = computed( () => {
  let { color, size } = props;
  return {
    width: 'max-content',
    padding: size === 'md' ? '0 10px' : '2px 8px',
    borderRadius: '100px',
    background: color === 'primary' ? 'var(--s-semantic-tag-background-primary-default)' : color === 'secondary' ? 'var(--s-semantic-tag-background-secondary-default)' : color === 'tertiary' ? 'var(--s-semantic-primary-background-strong-default)' : 'var(--s-semantic-primary-background-normal-default)',
    color: color === 'primary' ? 'var(--s-semantic-primary-font-strong-default)' : color === 'secondary' ? 'var(--s-semantic-primary-font-light-default)' : 'var(--s-palette-main-lighten-white)'
  };
})
</script>
