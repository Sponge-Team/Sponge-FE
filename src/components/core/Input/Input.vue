<template>
  <div class="flex align-middle" :style="styles">
    <input :type="inputType" :value="value" :placeholder="placeholder" @input="handleInput" @change="handleInput"
           class="border-none" :readonly="readOnly" :max="max"
    />
    <slot name="icon"></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  placeholder: {
    type: String,
  },
  inputType: {
    type: String,
    default: 'text'
  },
  type: {
    type: String,
    default: 'outlined',
    validator: value => ['filled', 'outlined', 'text'].includes(value)
  },
  state: {
    type: String,
    default: 'enabled',
    validator: value => ['enabled', 'disabled', 'error'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: value => ['md', 'lg'].includes(value)
  },
  shape: {
    type: String,
    default: 'circle',
    validator: value => ['square', 'rounded', 'circle'].includes(value)
  },
  color: {
    type: String,
    default: 'primary',
    validator: value => ['primary', 'secondary'].includes(value)
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
  icon: {
    type: Boolean,
    default: false
  },
  readOnly: {
    type: Boolean,
    default: false,
  },
  max: {
    type: Number,
    default: 20
  }
});

const styles = computed(() => {
  let { type, size, shape, color, icon } = props

  let height = size === 'md' ? '44px' : '119px'
  let borderRadius = shape === 'square' ? '0' : shape === 'rounded' ? '14px' : '100px'
  let borderColor = color === 'primary' ? 'var(--s-semantic-primary-stroke-normal-default)' : 'var(--s-semantic-primary-stroke-info-default)'
  let backgroundColor = color === 'primary' ? '--s-semantic-primary-background-white-default' : 'var(--s-palette-gray-200)'

  return {
    width: '100%',
    height: height,
    border: type === 'outlined' ? `1.5px solid ${ borderColor }` : 'none',
    borderBottom: type === 'outlined' || type === 'text' ? `1.5px solid ${ borderColor } !important` : 'none',
    backgroundColor: type === 'filled' ? backgroundColor : 'var(--s-palette-main-lighten-white)',
    borderRadius: borderRadius,
    padding: type === 'text' ? '0' : '0 15px',
    alignItems: icon === true ? 'center' : ''
  };
});

const emit = defineEmits(['updateInput', 'changeInput']);
const handleInput = (e) => {
  emit('updateInput', e.target.value);
  emit('changeInput', e.target.value);
};
</script>

<style scoped>
input{
  background-color: transparent;
  width: 100%;
}
input::placeholder {
  color: var(--s-semantic-placeholder-font-normal-default);
}

input:focus{
  outline: none;
}
</style>
