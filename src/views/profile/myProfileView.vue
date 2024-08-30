<template>
  <div>
    <div class="flex position-relative pt-4">
      <Button color="transparent" @click="goBack">
        <template #icon>
          <img src="@/lib/assets/svg/ic_arrow_right_lg.svg" alt="이전 페이지로 가기 버튼">
        </template>
      </Button>
    </div>
    <div class="p5 s-title-01 secondary-color">
      <p>등록된 내용이 없어요 <br> 프로필을 작성해 주세요</p>
    </div>
    <div class="p5">
      <Card class="outline-card" color="secondary" type="outlined">
        <template #body-content>
          <div class="p2 flex flex-col items-center justify-center text-center">
            <RouterLink to="/myprofile/create">
              <div class="add-dog-icon">
                <img src="@/lib/assets/svg/ic_plus.svg" alt="프로필 추가하기">
              </div>
            </RouterLink>
            <p class="secondary-color">나의 반려견을 소개해주세요!</p>
            <p class="s-title-02 mb-3 primary-color">프로필 작성하기</p>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Button from '@/components/core/Button/Button.vue';
import Card from '@/components/core/Card/Card.vue';

const router = useRouter();
const goBack = () => {
  router.back();
};
</script>

<style scoped>
.primary-color {
  color: var(--s-semantic-primary-background-normal-default);
}

.secondary-color {
  color: var(--s-semantic-secondary-font-normal-default);
}

.outline-card {
  border: 3px dashed var(--s-semantic-primary-background-light-default) !important;
}

.add-dog-icon {
  width: 20px;
  height: 20px;
  border-radius: 100px;
  background-color: var(--s-semantic-primary-background-normal-default);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
}
</style>