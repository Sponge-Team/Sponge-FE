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
      <BehaviorCreateItem title="제목">
        <template #body-content>
          <div class="flex">
            <Input 
              type="text" 
              shape="square" 
              color="secondary" 
              placeholder="ex) 외출시 강아지 짖음이 너무 심해요" 
              :value="title" 
              @changeInput="(data)=>{title = data}" 
            />
          </div>
        </template>
      </BehaviorCreateItem>
      <BehaviorCreateItem :required="false" :value="content" @changeInput="(data)=>{content = data}" >
        <template #body-content>
          <InputTextarea 
            placeholder="강아지가 주로 행동하는 시간, 장소, 공간 등의 내용을 구체적으로 작성해보세요" 
            class="mb-3"
            size="lg"
          />
        </template>
      </BehaviorCreateItem>
      <BehaviorCreateItem title="문제 행동 지속 기간">
        <template #body-content>
          <div class="flex">
            <Input 
              type="text" 
              shape="square" 
              color="secondary" 
              placeholder="ex) 1년 미만, 모름" 
              :value="duration" 
              @changeInput="(data)=>{duration = data}" 
            />
          </div>
        </template>
      </BehaviorCreateItem>
      <BehaviorCreateItem title="태그" :required="false">
        <template #body-content>
          <div class="flex">
            <Input 
              type="text" 
              shape="square" 
              color="secondary" 
              placeholder="ex) 성격, 상황" 
              :value="tag" 
              @changeInput="(data)=>{tag = data}" 
            />
          </div>
        </template>
      </BehaviorCreateItem>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "@/components/core/Button/Button.vue";
import BehaviorCreateItem from "@/components/expanded/BehaviorCreateItem.vue";
import Input from "@/components/core/Input/Input.vue";
import InputTextarea from "@/components/core/Input/InputTextarea.vue";

const title = ref('');
const content = ref('');
const duration = ref('');
const tag = ref('');

const saveInfo = () => {
  const problemInfo = {
    title: title.value,
    content: content.value,
    duration: duration.value,
    tag: tag.value,
  };

  localStorage.setItem('problemInfo', JSON.stringify(problemInfo));
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

</style>