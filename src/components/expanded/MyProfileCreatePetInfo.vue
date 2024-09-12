<template>
  <div>
    <div class="flex flex-justify-between flex-col">
      <div class="pl-5 pr-5 pt-3">
        <div class="s-heading-00">반려견에 대한 <br> 정보를 입력해주세요</div>
        <div class="pl-1 pr-1 pt-5">
          <BehaviorCreateItem title="반려견 이름" :errorMessage="petNameError">
            <template #body-content>
              <div class="flex">
                <Input 
                  type="text" 
                  shape="square" 
                  color="secondary" 
                  placeholder="예) 멍멍이" 
                  @changeInput="(data)=>{petName = data}"
                  :value="petName"
                />
              </div>
            </template>
          </BehaviorCreateItem>
          <BehaviorCreateItem title="나이" :errorMessage="petAgeError">
            <template #body-content>
              <div class="flex">
                <Input 
                  type="text" 
                  shape="square" 
                  color="secondary" 
                  placeholder="예) 2 (개월수를 숫자로 적어주세요)" 
                  @changeInput="(data)=>{petAge = data}"
                  :value="petAge"
                />
              </div>
            </template>
          </BehaviorCreateItem>
          <BehaviorCreateItem title="견종" :errorMessage="petBreedError">
            <template #body-content>
              <div class="flex">
                <Input 
                  type="text" 
                  shape="square" 
                  color="secondary" 
                  placeholder="예) 말티즈, 믹스" 
                  @changeInput="(data)=>{petBreed = data}"
                  :value="petBreed"
                />
              </div>
            </template>
          </BehaviorCreateItem>
        </div>
      </div>
      <div class="p3 button-fixed flex justify-center">
        <Button
          class="w45% mr-2"
          color="quaternary"
          @click="goBack"
        >
          뒤로
        </Button>
        <Button
          class="w45%"
          :color="isNextButtonEnabled ? 'primary' : 'tertiary'"
          :disabled="!isNextButtonEnabled"
          @click="goNext"
        >
          다음
        </Button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Button from '@/components/core/Button/Button.vue';
import Input from "@/components/core/Input/Input.vue";
import BehaviorCreateItem from "@/components/expanded/BehaviorCreateItem.vue";

const isNextButtonEnabled = ref(false);
const emit = defineEmits(['next', 'back']);

const petName = ref('');
const petAge = ref('');
const petBreed = ref('');
const petGender = ref(0);
const petNameError = ref('');
const petAgeError = ref('');
const petBreedError = ref('');
const petGenderError = ref('');

function goBack() {
  emit('back');
};
function goNext() {
  emit('next');
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