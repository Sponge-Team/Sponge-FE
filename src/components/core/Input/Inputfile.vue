<template>
  <div class="flex align-middle" :style="styles">
    <input type="file" :value="value" @input="handleInput" @change="handleInput" class="border-none"/>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: value => ['md', 'lg'].includes(value)
  },
  value: {
    type: [String, Number, Object],
  },
  model: {
    type: Object,
  },
  label: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
});

const styles = computed(() => {
  let { size } = props

  let height = size === 'md' ? '119px' : '338px'

  return {
    width: '100%',
    height: height,
    borderRadius: '14px',
    background: 'var(--s-semantic-primary-background-light-default)',
    padding: '15px',
  };
});

const emit = defineEmits(['updateInput', 'changeInput']);
const handleInput = (e) => {
  emit('updateInput', e.target.value);
  emit('changeInput', e.target.value);
};
</script>

<style scoped>
textarea{
  background-color: transparent;
  width: 100%;
  resize: none;
}
textarea::placeholder {
  color: var(--s-semantic-placeholder-font-normal-default);
}

textarea:focus{
  outline: none;
}
</style>
