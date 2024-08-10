<template>
  <div :class="cardClasses">
    <div v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
    </div>

    <div v-if="$slots.image" class="content-with-image">
      <div class="card-content">
        <slot></slot>
      </div>
      <div class="card-image">
        <slot name="image"></slot>
      </div>
    </div>
    
    <div v-else class="card-content">
      <slot></slot>
    </div>

    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  colorClass: {
    type: String,
    default: '',
  },
  rounded: {
    type: Boolean,
    default: true,
  }
});

const cardClasses = computed(() => {
  return {
    'default-card': props.colorClass === '',
    'light-card': props.colorClass === 'light',
    'rounded': props.rounded,
    'text-style': props.style === 'text',
  };
});
</script>

<style scoped>
.default-card {
  background-color: var(--s-semantic-primary-background-white-default);
  color: var(--s-palette-gray-500);
}

.default-card .card-header h3 {
  color: var(--s-palette-gray-700);
}

.light-card {
  background-color: var(--s-semantic-primary-background-light-default);
  color: var(--s-palette-gray-500);
}

.light-card .card-header h3 {
  color: var(--s-palette-gray-700);
}

.text-style {
  border: 1px solid var(--s-semantic-primary-stroke-info-default);
}

.card-header {
  padding: 0.5em;
}

.card-content {
  padding: 1em;
  flex: 2;
}

.card-footer {
  padding: 0.5em;
  font-size: 0.75rem;
  color: var(--s-palette-gray-500);
}

.rounded {
  border-radius: 0.5em;
}

.content-with-image {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.card-image {
  flex: 1;
  padding: 1em;
  height: 100%;
}

.card-image img {
  width: 100%;
  height: auto;
  border-radius: 0.5em;
  object-fit: cover;
}
</style>
