<template>
  <div class="flex flex-justify-between flex-col">
    <div class="pl-5 pr-5 pt-3">
      <div class="s-heading-00">반려견에 대한 <br> 정보를 입력해주세요</div>
      <div class="pl-2 pr-2 pt-5 pb-5">
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
        <BehaviorCreateItem title="성별">
          <template #body-content>
            <div class="flex">
              <Button 
                v-for="(item, i) in genderList" 
                :key="i" 
                rounded="square"
                class="mr-2 w45%"
                :color="petGender === item.name ? 'primary' : 'outline-primary'" 
                @click="petGender = item.value"
              >
                {{ item.name }}
              </Button>
            </div>
          </template>
        </BehaviorCreateItem>
      </div>
    </div>
    <div class="p3 button-fixed flex justify-center">
      <Button class="w45% mr-2" color="quaternary" @click="goBack">뒤로</Button>
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
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import Button from '@/components/core/Button/Button.vue';
import Input from "@/components/core/Input/Input.vue";
import BehaviorCreateItem from "@/components/expanded/BehaviorCreateItem.vue";

const isNextButtonEnabled = ref(false);

const petName = ref('');
const petAge = ref('');
const petBreed = ref('');
const petGender = ref('남');
const petNameError = ref('');
const petAgeError = ref('');
const petBreedError = ref('');
const petGenderError = ref('');

const genderList = ref([
  { name: '남', value: 1, isSelected: true },
  { name: '여', value: 3, isSelected: false },
  { name: '중성화', value: 2, isSelected: false },
]);

watch([petName, petAge, petBreed, petGender], ([newpetName, newpetAge, newpetBreed, newpetGender]) => {
  isNextButtonEnabled.value = newpetName.trim() !== '' && newpetAge.trim() !== '' && newpetBreed.trim() !== '' && newpetGender.trim() !== '';
});

onMounted(() => {
  if (localStorage.getItem('petInfoContents')) {
    const savepetInfoContents = JSON.parse(localStorage.getItem('petInfoContents'));
    petName.value = savepetInfoContents.petName;
    petAge.value = savepetInfoContents.petAge;
    petBreed.value = savepetInfoContents.petBreed;
    if (savepetInfoContents.petGender == 1) {
      petGender.value = '남';
    } else if ( savepetInfoContents.petGender == 3 ) {
      petGender.value = '여';
    } else {
      petGender.value = '중성화';
    }
  };
});

const validateFields = () => {
  const fields = [
    { value: petName.value, error: petNameError, message: '이름은 필수 입력 사항입니다.' },
    { value: petAge.value, error: petAgeError, message: '나이는 필수 입력 사항입니다.' },
    { value: petBreed.value, error: petBreedError, message: '견종은 필수 입력 사항입니다.' },
    { value: petGender.value, error: petGenderError, message: '성별은 필수 입력 사항입니다.' },
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

const emit = defineEmits(['next', 'back']);
function goBack() {
  emit('back');
};

function goNext() {
  if (validateFields()) { 
    const petInfoContents = { 'petName': petName.value, 'petAge': petAge.value, 'petBreed': petBreed.value, 'petGender': petGender.value };
    localStorage.setItem('petInfoContents', JSON.stringify(petInfoContents));
    localStorage.setItem('percentage', 75);
    emit('next');
  };
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