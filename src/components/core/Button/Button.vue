<template>
  <button :class="buttonClasses" class="flex flex-justify-center flex-items-center" @click="handleClick">
    <span class="button-content">
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
    validator: value => ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'outline-primary', 'transparent'].includes(value)
  },
  size: {
    type: String,
    default: 'm',
    validator: value => ['s', 'm', 'l'].includes(value)
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
    'outline-primary-color': props.color === 'outline-primary',
    'secondary-color': props.color === 'secondary',
    'tertiary-color': props.color === 'tertiary',
    'quaternary-color': props.color === 'quaternary',
    'quinary-color': props.color === 'quinary',
    'transparent-color': props.color === 'transparent',
    'text-style': props.style === 'text',
    'size-sm': props.size === 'sm',
    'size-m': props.size === 'm',
    'size-l': props.size === 'l',
    'rounded-circle': props.rounded === 'circle',
    'rounded-square': props.rounded === 'square',
  };
});

const handleClick = (event) => {
  if (props.onClick) {
    props.onClick(event);
  }
};
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

.outline-primary-color {
  background-color: transparent;
  color: var(--s-palette-main-lighten-950);
  border: 2px solid var(--s-palette-main-lighten-950);
}

.secondary-color {
  background-color: var(--s-palette-main-darken-980);
  color: var(--s-palette-main-lighten-100);
}

.tertiary-color {
  background-color: var(--s-semantic-secondary-background-normal-default);
  color: var(--s-semantic-secondary-font-strong-default);
}

.quaternary-color {
  background-color: var(--s-palette-main-lighten-300);
  color: var(--s-palette-main-lighten-950);
}

.quinary-color {
  background-color: var(--s-palette-gray-100);
  color: var(--s-palette-gray-400);
}

.transparent-color {
  background-color: transparent;
  color: inherit;
  padding: 0;
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
  height: 60px;
}

.rounded-circle {
  border-radius: 2em;
}

.rounded-square {
  border-radius: 0.5em;
}

</style>
