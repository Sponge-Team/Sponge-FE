<template>
  <div
      class="position-fixed flex flex-items-end modal-overlay"
      v-show="isActive"
      @click="closeModal"
  >
    <div
        class="modal-content position-relative pl-5 pr-5 pt-5"
        :style="{ transform: `translateY(${translateY}px)` }"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
        @click.stop
    >
      <div
          class="position-absolute mt-5 modal-handle"
      ></div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
  isActive: Boolean,
  translateY: Number
});

const emit = defineEmits(['close', 'update:translateY']);

const startY = ref(0);
const isDragging = ref(false);

const closeModal = () => {
  emit('update:translateY', window.innerHeight); // 모달이 화면 아래로 슬라이딩되어 사라짐
  setTimeout(() => {
    emit('close');
    emit('update:translateY', 0); // 초기화
  }, 300); // 애니메이션 시간과 일치
};

const onTouchStart = (event) => {
  startY.value = event.touches[0].clientY;
  isDragging.value = true;
};

const onTouchMove = (event) => {
  if (isDragging.value) {
    const currentY = event.touches[0].clientY;
    emit('update:translateY', currentY - startY.value);
  }
};

const onTouchEnd = () => {
  isDragging.value = false;
  if (props.translateY > 100) {
    closeModal();
  } else {
    emit('update:translateY', 0); // 드래그가 충분하지 않으면 모달이 원래 위치로 돌아옴
  }
};
</script>

<style scoped>
.modal-overlay {
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal-content {
  background-color: #fff;
  width: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  transition: transform 0.3s ease;
}

.modal-handle {
  content: '';
  width: 68px;
  height: 4px;
  background-color: #c3c3c3;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 100px;
}
</style>
