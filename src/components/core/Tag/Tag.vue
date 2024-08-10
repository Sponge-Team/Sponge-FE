<template>
  <div class="s-caption-01" :style="style">{{text}}</div>
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
    validator: value => ['primary', 'secondary'].includes(value)
  }
})
const style = computed( () => {
  let { color } = props;
  return {
    width: 'max-content',
    padding: '0 10px',
    borderRadius: '100px',
    background: color === 'primary' ? 'var(--s-semantic-tag-background-primary-default)' : 'var(--s-semantic-tag-background-secondary-default)',
    color: color === 'primary' ? 'var(--s-semantic-primary-font-strong-default)' : 'var(--s-semantic-primary-font-light-default)'
  };
})
</script>
