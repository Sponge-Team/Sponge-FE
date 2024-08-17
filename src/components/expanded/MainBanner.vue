<template>
  <div class="main-banner relative">
    <div class="image-wrapper absolute right-0 top-0 h-full w-1/2">
      <img src="@/lib/assets/svg/momg.svg" alt="로고 이미지" class="h-full w-full object-cover">
    </div>
    <RouterLink :to="isLoggedIn ? `/behavior/create?userId=${userId}` : '/login'">
      <div class="content-wrapper absolute left-5 top-1/2 -translate-y-1/2">
        <div class="s-heading-00 banner-text">
          <p>내 반려동물 문제행동에<br> 정확한 해결방법을<br> 모르겠다면?</p>
        </div>
        <Button color="secondary" size="m" class="mt-2 banner-button">
          무료로 진단 받아보기
          <template #icon>
            <img src="@/lib/assets/svg/ic_arrow_right_w.svg" alt="오른쪽 화살표" class="ml-2">
          </template>
        </Button>
      </div>
    </RouterLink>
  </div>
</template>

<script setup>
import Button from "@/components/core/Button/Button.vue";

const props = defineProps({
  userId: Number,
  isLoggedIn: Boolean
});
</script>

<style scoped>
.main-banner {
  height: 200px;
  width: 100%;
  background-color: var(--s-semantic-primary-background-normal-default);
  position: relative;
  overflow: hidden;
}

.banner-text {
  color: var(--s-palette-main-lighten-100);
}

.banner-button {
  white-space: nowrap;
}

.image-wrapper {
  z-index: 0;
}

.content-wrapper {
  z-index: 10;
  max-width: 60%;
}
</style>