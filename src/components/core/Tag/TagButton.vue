<template>
  <div class="s-title-03 flex flex-justify-between flex-items-center" :style="style">
    <div class="mr-2">
      <slot></slot>
    </div>
    <img src="@/lib/assets/svg/ic_close.svg" alt="" @click="removeTag">
  </div>
</template>
<script setup>
import {computed} from "vue";

const props = defineProps({
  text:{
    type: String,
    default: 'Text Bubble'
  },
})
const style = computed( () => {
  let { color } = props;
  return {
    width: 'max-content',
    height: '29px',
    padding: '0 10px',
    borderRadius: '100px',
    border: '1px solid var(--s-semantic-primary-font-strong-default)',
    color: 'var(--s-semantic-primary-font-strong-default)'
  };
})
const emit = defineEmits(['close']);
const removeTag = () => {
  emit('close');
}
</script>
