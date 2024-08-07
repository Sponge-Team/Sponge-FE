<template>
  <div>
    <div>
      <span>{{ label }}</span>
      <span v-if="required">*</span>
    </div>
    <span class="flex">
      <input :type="type" :value="value" :placeholder="placeholder" @input="handleInput" @change="handleInput"
             :readonly="state === 'disabled'" :class="inputClasses"
      />
      <slot name="icon"></slot>
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  placeholder: {
    type: String,
  },
  type: {
    type: String,
    default: 'text',
    validator: value => ['text', 'number', 'file', 'range'].includes(value)
  },
  style: {
    type: String,
    default: 'text',
    validator: value => ['filled', 'outlined', 'text'].includes(value)
  },
  state: {
    type: String,
    default: 'enabled',
    validator: value => ['enabled', 'disabled', 'error'].includes(value)
  },
  size: {
    type: String,
    default: 'm',
    validator: value => ['sm', 'm', 'l', 'xl'].includes(value)
  },
  shape: {
    type: String,
    default: 'circle',
    validator: value => ['square', 'rounded', 'circle'].includes(value)
  },
  color: {
    type: String,
    default: 'primary',
    validator: value => ['primary', 'secondary', 'tertiary'].includes(value)
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
  }
});

const inputClasses = computed(() => {
  return {
    'primary-color': props.color === 'primary',
    'text-style': props.style === 'text',
    'enabled-state': props.state === 'enabled',
    // 필요한 다른 클래스 추가
  };
});

const emit = defineEmits(['updateInput', 'changeInput']);
const handleInput = (e) => {
  emit('updateInput', e.target.value);
  emit('changeInput', e.target.value);
};
</script>

<style scoped>
.primary-color::placeholder {
  color: var(--s-placeholder-color-primary);
}

.text-style {
  border: 1px solid var(--s-semantic-primary-stroke-info-default);
}

.enabled-state::before {
  content: '';
  /* 추가 스타일 */
}

.enabled-state::after {
  content: '';
  /* 추가 스타일 */
}

</style>
