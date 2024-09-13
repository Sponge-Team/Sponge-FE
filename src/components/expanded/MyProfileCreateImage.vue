<template>
  <div class="flex flex-justify-between flex-col">
    <div class="pl-5 pr-5 pt-3">
      <div class="s-heading-00 pb5">마지막이에요!<br>반려견 대표사진을<br>등록해주세요</div>
      <div class="flex flex-justify-center flex-col flex-items-center">
        <Inputfile size="lg" @fileUpload="(data) => {petImg = data}"/>
      </div>
    </div>
  </div>
  <div class="p3 button-fixed flex justify-center">
    <Button class="w45% mr-2" color="quaternary" @click="goBack">뒤로</Button>
    <Button class="w45%" color="primary" @click="openModal">완료</Button>
  </div>
  <Dialog
    :isActive="isActive"
    :translateY="translateY"
    @close="closeModal"
    @update:translateY="val => translateY = val"
    style="z-index: 2000;"
  >
    <div class="p5 flex flex-col items-center justify-center text-center" style="height: 250px;">
      <p class="s-heading-00">반려견 정보를 저장하시겠어요?</p>
      <Button class="w-full mb-2" color="quaternary" @click="closeModal">닫기</Button>
      <Button class="w-full" color="primary" @click="saveAndComplete">등록</Button>
    </div>
  </Dialog>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRouter } from 'vue-router';
import Button from '@/components/core/Button/Button.vue';
import Inputfile from "@/components/core/Input/Inputfile.vue";
import Dialog from "@/components/core/Dialog/Dialog.vue";
import { useDialog } from "@/composables/useDialog";
const { isActive, translateY, openModal, closeModal } = useDialog();

const router = useRouter();
const petImg = ref(null);

const emit = defineEmits(['next', 'back']);
function goBack() {
  emit('back');
};
const saveAndComplete = () => {
  // db 저장 로직 추가
  localStorage.setItem('imageData', JSON.stringify(imageData.value));
  // localStorage.removeItem('currentPage');
  // localStorage.removeItem('name');
  // localStorage.removeItem('percentage');
  // localStorage.removeItem('petInfoContents');
  // localStorage.removeItem('userRegion');
  router.push({ path: '/' });
};
</script>

<style scoped>
.button-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
</style>