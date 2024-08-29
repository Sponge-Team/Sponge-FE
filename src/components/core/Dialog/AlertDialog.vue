<template>
  <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white rounded-lg p-6 w-80">
      <p class="text-center mb-4 s-body-01">{{ message }}</p>
      <div class="flex justify-between">
        <Button class="w45%" color="primary" @click="onConfirm">네</Button>
        <Button class="w45%" color="quaternary" @click="onCancel">아니오</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/core/Button/Button.vue";

const props = defineProps({
  message: {
    type: String,
    default: '안내 문구를 입력하세요.',
  },
  visible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['confirm', 'cancel']);

const onConfirm = () => {
  emit('confirm');
};

const onCancel = () => {
  emit('cancel');
};
</script>