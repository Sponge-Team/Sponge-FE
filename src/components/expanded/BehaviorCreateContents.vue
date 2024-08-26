<template>
  <div>
    <div class="p5">
      <Button color="primary">1</Button>
      <Button color="primary" class="ml-3">2</Button>
      <Button color="primary" class="ml-3">3</Button>
    </div>
    <div class="p5" style="padding-bottom: 80px;">
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
              v-model="title" 
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
            v-model="content"
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
              v-model="duration" 
            />
          </div>
        </template>
      </BehaviorCreateItem>

      <BehaviorCreateItem title="파일 업로드 (선택사항)" :required="false" class="mb-2">
        <template #body-content>
          <Card class="outline-card" color="secondary" type="outlined">
            <template #body-content>
              <div class="flex flex-justify-center flex-col flex-items-center">
                <Inputfile :showDefaultImage="false" class="mb-2" @fileUpload="handleFileUpload" />
                <p class="text-color">문제행동 시 사진이나 동영상을 첨부해주세요</p>
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
              v-model="tag" 
            />
          </div>
        </template>
      </BehaviorCreateItem>
    </div>

    <div class="button-container flex justify-center">
      <Button
        class="w45% mr-2"
        color="quaternary"
        @click="goBack"
      >
        뒤로
      </Button>
      <Button
        class="w45%"
        color="primary"
        @click="saveAndComplete"
      >
        완료
      </Button>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "@/components/core/Button/Button.vue";
import Card from "@/components/core/Card/Card.vue";
import BehaviorCreateItem from "@/components/expanded/BehaviorCreateItem.vue";
import Input from "@/components/core/Input/Input.vue";
import InputTextarea from "@/components/core/Input/InputTextarea.vue";
import Inputfile from "@/components/core/Input/Inputfile.vue";
import { useRouter } from 'vue-router';

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
    { value: title, error: titleError, message: '제목은 필수 입력 사항입니다.' },
    { value: content, error: contentError, message: '세부 사항은 필수 입력 사항입니다.' },
    { value: duration, error: durationError, message: '문제 행동 지속 기간은 필수 입력 사항입니다.' }
  ];

  let isValid = true;

  fields.forEach(field => {
    if (!field.value.value) {
      field.error.value = field.message;
      isValid = false;
    } else {
      field.error.value = '';
    }
  });

  return isValid;
};

const saveInfo = () => {
  if (validateFields()) {
    const problemInfo = {
      title: title.value,
      content: content.value,
      duration: duration.value,
      tag: tag.value,
      image: imageData.value
    };

    localStorage.setItem('problemInfo', JSON.stringify(problemInfo));
    return true;
  }

  return false;
};

const saveAndComplete = () => {
  if (saveInfo()) {
    alert('정보가 성공적으로 저장되었습니다.');
    router.push({ path: '/' });
  }
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
</style>
