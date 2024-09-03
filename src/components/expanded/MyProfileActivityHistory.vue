<template>
  <div>
    <div class="pl-5 pt-5 s-title-01">
      <p>활동내역</p>
    </div>
    <div class="p5 flex flex-col items-center justify-center text-center">
      <p class="secondary-color pb-2">문제행동 진단사례를 보고<br>내 반려견에 딱 맞는 상담을 받아보세요</p>
      <RouterLink to="/case">
        <Button color="outline-primary">
          <template #default>
            <p class="s-title-03">진단사례 찾아보기</p>
          </template>
        </Button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/core/Button/Button.vue";
</script>

<style scoped>
.secondary-color {
  color: var(--s-semantic-secondary-font-normal-default);
}
</style>