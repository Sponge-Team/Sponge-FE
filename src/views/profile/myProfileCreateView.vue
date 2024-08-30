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

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Button from '@/components/core/Button/Button.vue';

const router = useRouter();
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
</style>