<template>
  <div>
    <label for="checkbox" @click="toggleCheckbox">
      <div class="flex">
        <img :src="imageSrc" alt="체크박스 이미지">
        <span class="pl-2 s-title-02" :style="textStyle">{{text}}</span>
      </div>
    </label>
    <input type="checkbox" name="checkbox" id="checkbox" style="display: none;" :checked="isActive">
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import checkImg from '@/lib/assets/svg/ic_check.svg';
import checkYImg from '@/lib/assets/svg/ic_check_y.svg';

const props = defineProps({
  text: {
    type: String,
    default: 'text'
  },
  modelValue: {
    type: Boolean,
    default: false,
  }
});

const emit = defineEmits(['update:modelValue']);

const isActive = ref(props.modelValue);

const toggleCheckbox = () => {
  isActive.value = !isActive.value;
  emit('update:modelValue', isActive.value);
};

const imageSrc = computed(() => {
  return isActive.value ? checkYImg : checkImg;
});

const textStyle = computed(() => {
  return isActive.value === false
      ? 'color: var(--s-semantic-secondary-font-strong-default)'
      : 'color: var(--s-semantic-primary-font-strong-default)';
});
</script>