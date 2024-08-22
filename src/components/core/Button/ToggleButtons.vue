<template>
  <div class="flex justify-between pt4 pr4 pl4 buttons-container">
    <Button
        v-for="(buttonText, index) in buttons"
        :key="index"
        color="transparent"
        :class="{'active-button': activeButtonIndex === index}"
        @click="fnActiveButton(buttonText, index)"
        size="s"
        style="color:var(--s-palette-gray-400);"
    >
      {{ buttonText }}
    </Button>
  </div>
</template>
<script setup>
import Button from "@/components/core/Button/Button.vue";
import {ref} from "vue";
const props = defineProps({
  buttons: {
    type: Array,
    required: true
  },
});
const emit = defineEmits(['updateButton'])
const activeButtonIndex = ref(0);

const fnActiveButton = (item, idx) => {
  activeButtonIndex.value = idx
  emit('updateButton', item)
}
</script>
<style>
.active-button {
  color: var(--s-semantic-primary-font-strong-default) !important;
  position: relative;
  font-weight: 500;
}

.active-button::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 4px;
  background-color: var(--s-semantic-primary-font-strong-default);
  border-radius: 0.25em;
}
</style>
