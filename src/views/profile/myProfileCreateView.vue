<template>
  <div>
    <div class="flex position-relative pt-4 flex-items-center">
      <Button color="transparent" @click="goBack">
        <template #icon>
          <img src="@/lib/assets/svg/ic_arrow_right_lg.svg" alt="이전 페이지로 가기 버튼">
        </template>
      </Button>
      <p class="s-title-01 secondary-color position-absolute header">프로필</p>
    </div>
    <div class="pl-5 pr-5 pt-2 flex flex-justify-between flex-items-center">
      <div class="position-relative progressBar">
        <span class="position-absolute" :style="`width: ${percentage}%`"></span>
      </div>
      <span class="s-heading-02" style="color: var(--s-semantic-secondary-font-light-default)">완성도 {{percentage}}%</span>
    </div>
    <MyProfileCreateInfo v-if="currentPage == 1" @next="goToPage(2)" />
    <MyProfileCreatePetInfo v-if="currentPage == 2" @next="goToPage(3)" @back="goToPage(1)" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted, watch } from 'vue';
import Button from '@/components/core/Button/Button.vue';
import MyProfileCreateInfo from '@/components/expanded/MyProfileCreateInfo.vue';
import MyProfileCreatePetInfo from '@/components/expanded/MyProfileCreatePetInfo.vue';

const router = useRouter();
const currentPage = ref(1);
const percentage = ref(0);

watch(currentPage, (newPage) => {
  localStorage.setItem('currentPage', newPage);
});

onMounted(() => {
  const savePercentage = localStorage.getItem('percentage');
  const savedPage = localStorage.getItem('currentPage');
  if (savePercentage) {
    percentage.value = parseInt(savePercentage, 10);
  }
  if (savedPage) {
    currentPage.value = parseInt(savedPage, 10);
  }
});

function goToPage(pageNumber) {
  currentPage.value = pageNumber;
};

const goBack = () => {
  router.back();
};
</script>

<style scoped>
.secondary-color {
  color: var(--s-semantic-primary-font-info-default);
}

.header {
  top: 70%; 
  left: 50%; 
  transform: translate(-50%, -50%);
}

.progressBar{
  width: 70%;
  height: 6px;
  content: '';
  background-color: var(--s-semantic-primary-background-neutral-default);
  border-radius: 100px;
  span{
    height: 6px;
    content: '';
    background-color: var(--s-semantic-primary-background-normal-default);
    border-radius: 100px;
  }
}
</style>