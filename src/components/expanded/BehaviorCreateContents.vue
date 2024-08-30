<template>
  <div>
    <div class="p5">
      <Button color="primary">1</Button>
      <Button color="primary" class="ml-3">2</Button>
      <Button color="primary" class="ml-3">3</Button>
    </div>
    <div class="p5">
      <div class="s-heading-00">문제행동에 해당되는 <br> 내용을 선택해주세요</div>
      <p class="text-color mt-2">더 확실한 솔루션을 받는데 도움이 돼요!</p>

      <BehaviorCreateItem title="제목" :errorMessage="titleError">
        <template #body-content>
          <div class="flex">
            <Input 
              type="text" 
              shape="square" 
              color="secondary" 
              placeholder="ex) 외출시 강아지 짖음이 너무 심해요" 
              @changeInput="(data)=>{title = data}"
            />
          </div>
        </template>
      </BehaviorCreateItem>

      <BehaviorCreateItem title="세부 사항" :errorMessage="contentError" class="mb-2">
        <template #body-content>
          <InputTextarea 
            placeholder="강아지가 주로 행동하는 시간, 장소, 공간 등의 내용을 구체적으로 작성해보세요" 
            class="mb-3"
            size="lg"
            @changeInput="(data)=>{content = data}"
          />
        </template>
      </BehaviorCreateItem>

      <BehaviorCreateItem title="문제 행동 지속 기간" :errorMessage="durationError" class="mb-2">
        <template #body-content>
          <div class="flex">
            <Input 
              type="text" 
              shape="square" 
              color="secondary" 
              placeholder="ex) 1년 미만, 모름" 
              @changeInput="(data)=>{duration = data}"
            />
          </div>
        </template>
      </BehaviorCreateItem>

      <BehaviorCreateItem title="파일 업로드 (선택사항)" :required="false" class="mb-2">
        <template #body-content>
          <Card class="outline-card" color="secondary" type="outlined">
            <template #body-content>
              <div class="flex flex-justify-center flex-col flex-items-center">
                <BehaviorFileUploader class="mb-2" @fileUpload="handleFileUpload" />
                <p class="text-color">문제행동 사진이나 동영상을 첨부해주세요</p>
              </div>
            </template>
          </Card>
        </template>
      </BehaviorCreateItem>

      <BehaviorCreateItem title="태그" :required="false">
        <template #body-content>
          <div class="flex">
            <Input 
              type="text" 
              shape="square" 
              color="secondary" 
              placeholder="ex) #성격 #상황" 
              @changeInput="(data)=>{tag = data}"
            />
          </div>
        </template>
      </BehaviorCreateItem>
    </div>

    <div class="caution-container p5">
      <p class="text-color s-body-01">경고 & 주의사항</p>
      <div class="p1">
        <p class="text-color s-body-04">• 이 게시글은 모두에게 공개됩니다.</p>
        <p class="text-color s-body-04">• 공격적이거나 부적절한 표현은 자제해주시기 바랍니다.</p>
        <p class="text-color s-body-04">• 타인을 비방하거나 허위 사실을 유포하는 게시글은 삭제될 수 있습니다.</p>
        <p class="text-color s-body-04">• 작성된 내용은 상담 목적으로 내부 검토 및 분석에 활용될 수 있습니다.</p>
        <p class="text-color s-body-04">• 모든 게시글에 답변이 달리지 않을 수 있으니 양해 부탁드립니다</p>
      </div>
    </div>

    <div class="button-container flex justify-center">
      <Button class="w45% mr-2" color="quaternary" @click="goBack">뒤로</Button>
      <Button class="w45%" color="primary" @click="openModalWithValidation">완료</Button>
    </div>

    <Dialog
      :isActive="isActive"
      :translateY="translateY"
      @close="closeModal"
      @update:translateY="val => translateY = val"
      style="z-index: 2000;"
    >
      <div class="p5 flex flex-col items-center justify-center text-center" style="height: 250px;">
        <p class="s-heading-00">작성한 글을 등록하시겠어요?</p>
        <p class="text-color mt-3 mb-5">작성한 내용을 바탕으로 진단받을 수 있으며,<br>게시글이 올라간 후에도 수정할 수 있어요.</p>
        <Button class="w-full mb-2" color="quaternary" @click="closeModal">닫기</Button>
        <Button class="w-full" color="primary" @click="saveAndComplete">등록</Button>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

import Button from "@/components/core/Button/Button.vue";
import Card from "@/components/core/Card/Card.vue";
import Input from "@/components/core/Input/Input.vue";
import InputTextarea from "@/components/core/Input/InputTextarea.vue";
import Dialog from "@/components/core/Dialog/Dialog.vue";

import BehaviorCreateItem from "@/components/expanded/BehaviorCreateItem.vue";
import BehaviorFileUploader from "@/components/expanded/BehaviorFileUploader.vue";

import { useDialog } from "@/composables/useDialog";
const { isActive, translateY, openModal, closeModal } = useDialog();

const title = ref('');
const content = ref('');
const duration = ref('');
const tag = ref('');
const imageData = ref(null);
const router = useRouter();

// Error message refs
const titleError = ref('');
const contentError = ref('');
const durationError = ref('');

const handleFileUpload = (fileData) => {
  imageData.value = fileData;
};

// 필수 입력 사항 검증
const validateFields = () => {
  const fields = [
    { value: title.value, error: titleError, message: '제목은 필수 입력 사항입니다.' },
    { value: content.value, error: contentError, message: '세부 사항은 필수 입력 사항입니다.' },
    { value: duration.value, error: durationError, message: '문제 행동 지속 기간은 필수 입력 사항입니다.' }
  ];
  let isValid = true;
  fields.forEach(field => {
    if (!field.value) {
      field.error.value = field.message;
      isValid = false;
    } else {
      field.error.value = '';
    }
  });
  return isValid;
};

const openModalWithValidation = () => {
  if (validateFields()) {
    const behaviorContents = {'title': title.value, 'content': content.value, 'duration': duration.value, 'tag': tag.value, 'imageData': imageData.value}
    localStorage.setItem('behaviorContents', JSON.stringify(behaviorContents));
    openModal(); 
  }
};

const saveAndComplete = () => {
  // db 저장 로직 추가
  localStorage.removeItem('currentPage');
  localStorage.removeItem('selectedCategories');
  localStorage.removeItem('behaviorContents');
  router.push({ path: '/' });
};
const emit = defineEmits(['back']);
const goBack = () => {
  emit('back');
};
</script>

<style scoped>
.secondary {
  background-color: var(--s-semantic-desc-font-normal-default);
  color: var(--s-palette-main-lighten-100);
}

.text-color {
  color: var(--s-semantic-primary-font-info-default);
}

.outline-card {
  border: 3px dashed var(--s-semantic-primary-background-light-default) !important;
}

.button-container{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--s-semantic-primary-background-white-default);
  padding: 10px 0;
  z-index: 1000;
}

.caution-container {
  background-color: var(--s-semantic-primary-background-light-default);
  width: 100%;
  height: 200px;
  padding-bottom: 190px;
}
</style>
