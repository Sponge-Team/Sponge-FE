<template>
  <div class="flex flex-justify-center flex-items-center" :style="styles">
    <label for="file">
      <span>
        <img src="@/lib/assets/svg/ic_camera.svg" alt="파일 업로드 버튼">
      </span>
    </label>
    <input type="file" name="file" id="file" :value="value" :disabled="disabled" @input="handleInput" @change="handleInput" style="display: none"/>
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
  disabled: {
    type: Boolean,
    default: false,
  }
});

const styles = computed(() => {
  let { size } = props

  return {
    width: size === 'md' ? '30px' : '45px',
    height: size === 'md' ? '30px' : '45px',
    borderRadius: '100px',
    background: '#D9D9D9',
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
