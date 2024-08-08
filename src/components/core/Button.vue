<template>
  <button :class="buttonClasses">
    <span class="button-content" >
      <slot></slot>
      <slot name="icon"></slot>
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: 'primary',
    validator: value => ['primary', 'secondary', 'tertiary'].includes(value)
  },
  size: {
    type: String,
    default: 'm',
    validator: value => ['s', 'm', 'l', 'xl'].includes(value)
  },
  rounded: {
    type: String,
    default: 'circle',
    validator: value => ['circle', 'square'].includes(value)
  }
});

const buttonClasses = computed(() => {
  return {
    'primary-color': props.color === 'primary',
    'secondary-color': props.color === 'secondary',
    'tertiary-color': props.color === 'tertiary',
    'text-style': props.style === 'text',
    'size-sm': props.size === 'sm',
    'size-m': props.size === 'm',
    'size-l': props.size === 'l',
    'rounded-circle': props.rounded === 'circle',
    'rounded-square': props.rounded === 'square',
  };
});
</script>

<style scoped>
button {
  display: inline-flex;
  align-items: center;
  padding: 0.5em 1em;
  border: none;
  cursor: pointer;
}

.button-content {
  display: inline-flex;
  align-items: center;
}

.text-style {
  border: 1px solid var(--s-semantic-primary-stroke-info-default);
}

.primary-color {
  background-color: var(--s-palette-main-lighten-950);
  color: var(--s-palette-main-lighten-100);
}

.secondary-color {
  background-color: var(--s-palette-main-darken-980);
  color: var(--s-palette-main-lighten-100);
}

.tertiary-color {
  background-color: var(--s-palette-gray-300);
  color: var(--s-palette-gray-400);
}

.size-s {
  font-size: 0.75rem;
  padding: 0.25em 0.5em;
}

.size-m {
  font-size: 1rem;
  padding: 0.5em 1em;
}

.size-l {
  font-size: 1.2rem;
  padding: 0.5em 1em;
}

.rounded-circle {
  border-radius: 2em;
}

.rounded-square {
  border-radius: 0.5em;
}
</style>