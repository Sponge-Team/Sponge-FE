<template>
  <div class="flex flex-justify-between flex-col" style="height: 100%; margin-top: 40px">
    <div class="s-heading-00">
      <p class="text-align-center">회원가입을 마쳤어요</p>
      <p class="text-align-center">진단활동을 시작해보세요!</p>
    </div>
    <div>
      <img src="@/lib/assets/svg/momg.svg" alt="몽미 이미지">
    </div>
    <Button size="l" style="width: 100%;" @click="router.push({path: '/case'})">
      <template #default>
        문제행동 사례 보러가기
      </template>
    </Button>
  </div>
</template>
<script setup>
import Button from "@/components/core/Button/Button.vue";
import router from "@/router/index.js";
</script>
