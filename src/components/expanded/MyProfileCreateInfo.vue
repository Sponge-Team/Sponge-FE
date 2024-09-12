<template>
  <div class="flex flex-justify-between flex-col">
    <div class="pl-5 pr-5 pt-3">
      <div v-if="currentPage == 1">
        <div class="s-heading-00">반려견 등록을 위해 <br> 기본 정보를 입력해주세요</div>
        <div class="pl-1 pr-1 pt-5">
          <BehaviorCreateItem title="견주 닉네임" :errorMessage="nameError">
            <template #body-content>
              <div class="flex">
                <Input 
                  type="text" 
                  shape="square" 
                  color="secondary" 
                  placeholder="예) 홍길동" 
                  @changeInput="(data)=>{name = data}"
                  :value="name"
                />
              </div>
            </template>
          </BehaviorCreateItem>
          <ProfileItem title="거주지역">
            <template #body-content>
              <div class="flex">
                <Input type="text" shape="square" color="secondary" placeholder="지역을 선택해주세요." :read-only="true" :value="userRegion" />
                <Button color="transparent" @click="goToDetail(2)">
                  <template #icon>
                    <img src="@/lib/assets/svg/ic_arrow_right.svg" alt="거주지역 작성하기 버튼">
                  </template>
                </Button>
              </div>
            </template>
          </ProfileItem>
        </div>
        <div class="p3 button-fixed">
          <Button 
            :color="isNextButtonEnabled ? 'primary' : 'tertiary'"
            :disabled="!isNextButtonEnabled"
            size="l" 
            class="w-full" 
            @click="goToPage"
          >
            다음
          </Button>
        </div>
      </div>
      <MyProfileCreateRegion v-if="currentPage == 2" @updatePage="goToDetail" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import Button from '@/components/core/Button/Button.vue';
import Input from '@/components/core/Input/Input.vue';
import ProfileItem from '@/components/expanded/ProfileItem.vue';
import BehaviorCreateItem from '@/components/expanded/BehaviorCreateItem.vue';
import MyProfileCreateRegion from "@/components/expanded/MyProfileCreateRegion.vue";

const name = ref('');
const nameError = ref('');
const userRegionError = ref('');
const currentPage = ref(1);
const userRegion = ref('');
const isNextButtonEnabled = ref(false);

watch([name, userRegion], ([newName, newRegion]) => {
  isNextButtonEnabled.value = newName.trim() !== '' && newRegion.trim() !== '';
});

onMounted(() => {
  const saveName = localStorage.getItem('name');
  if (saveName) {
    name.value = saveName.replace(/\"/gi, "");
  };

  if (localStorage.getItem('userRegion')) {
    const userRegions = JSON.parse(localStorage.getItem('userRegion')).userRegion;
    userRegion.value = userRegions.map(region => region.major + " " + region.sub).join(", ");
  } else {
    userRegion.value = '';
  };
});


const validateFields = () => {
  const fields = [
    { value: name.value, error: nameError, message: '견주 닉네임은 필수 입력 사항입니다.' },
    { value: userRegion.value, error: userRegionError, message: '거주 지역은 필수 입력 사항입니다.' },
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

function goToDetail(pageNumber) {
  currentPage.value = pageNumber;
};

const emit = defineEmits(['next']);
function goToPage() {
  if (validateFields()) { 
    localStorage.setItem('name', JSON.stringify(name.value));
    localStorage.setItem('percentage', 35);
    emit('next');
  };  
}

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