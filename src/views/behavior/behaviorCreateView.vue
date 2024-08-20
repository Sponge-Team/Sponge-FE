<template>
  <div>
    <div class="flex position-relative pt-4">
      <Button color="transparent" @click="goBack">
        <template #icon>
          <img src="@/lib/assets/svg/ic_close_lg.svg" alt="닫기 버튼">
        </template>
      </Button>
    </div>
    <BehaviorCreateSelectDog v-if="currentPage === 1" @dog-selected="handleDogSelected" @next="goToPage(2)" />
    <BehaviorCreateSelectCategory v-if="currentPage === 2" @next="goToPage(3)" @back="goToPage(1)" />
    <BehaviorCreateContents v-if="currentPage === 3" @back="goToPage(2)" />
    <div class="p3 button-fixed">
      <div v-if="currentPage === 1">
        <Button
          class="w-full"
          :color="isNextButtonEnabled ? 'primary' : 'tertiary'"
          :disabled="!isNextButtonEnabled"
          @click="goToPage(currentPage + 1)"
        >
          다음
        </Button>
      </div>
      <div v-else class="flex justify-center">
        <Button
          class="w45% mr-2"
          color="quaternary"
          @click="goToPage(currentPage - 1)"
        >
          뒤로
        </Button>
        <Button
          class="w45%"
          :color="isNextButtonEnabled ? 'primary' : 'tertiary'"
          :disabled="!isNextButtonEnabled"
          @click="handleNext"
        >
          다음
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import Button from "@/components/core/Button/Button.vue";
import BehaviorCreateSelectDog from '@/components/expanded/BehaviorCreateSelectDog.vue';
import BehaviorCreateSelectCategory from '@/components/expanded/BehaviorCreateSelectCategory.vue';
import BehaviorCreateContents from '@/components/expanded/BehaviorCreateContents.vue';

const router = useRouter();
const currentPage = ref(1);
const checkedDogsMap = ref({});
const isNextButtonEnabled = ref(false);

onMounted(() => {
  const savedPage = localStorage.getItem('currentPage');
  const savedCheckedDogsMap = JSON.parse(localStorage.getItem('checkedDogsMap'));

  if (savedPage) {
    currentPage.value = parseInt(savedPage, 10);
  }

  if (savedCheckedDogsMap) {
    checkedDogsMap.value = savedCheckedDogsMap;
    isNextButtonEnabled.value = Object.values(checkedDogsMap.value).some(status => status);
  }
});

watch(currentPage, (newPage) => {
  localStorage.setItem('currentPage', newPage);
});

watch(checkedDogsMap, (newCheckedDogsMap) => {
  localStorage.setItem('checkedDogsMap', JSON.stringify(newCheckedDogsMap));
});

function handleDogSelected({ dogId, isChecked }) {
  checkedDogsMap.value[dogId] = isChecked;
  isNextButtonEnabled.value = Object.values(checkedDogsMap.value).some(status => status);
}

function goBack() {
  router.back();
}

function goToPage(pageNumber) {
  currentPage.value = pageNumber;
}

function handleNext() {
  const selectedCategories = JSON.parse(localStorage.getItem('selectedCategories')) || [];
  if (selectedCategories.length === 0) {
    alert('문제 유형을 선택해주세요');
  } else {
    goToPage(currentPage.value + 1);
  }
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
