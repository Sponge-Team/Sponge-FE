<template>
  <div class="p4">
    <div class="flex position-relative pt-2 pb-2">
      <Button color="transparent" @click="goBack">
        <img src="@/lib/assets/svg/ic_arrow_right_lg.svg" alt="이전 페이지로 가기 버튼">
      </Button>
    </div>
    <LoginContent></LoginContent>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Button from '@/components/core/Button/Button.vue';
import LoginContent from '@/components/expanded/LoginContent.vue';

const router = useRouter();

function goBack() {
  router.back();
}
</script>