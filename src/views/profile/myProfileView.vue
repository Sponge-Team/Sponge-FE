<template>
  <div>
    <div class="flex position-relative pt-4 pb-4">
      <Button color="transparent" @click="goBack">
        <template #icon>
          <img src="@/lib/assets/svg/ic_arrow_right_lg.svg" alt="이전 페이지로 가기 버튼">
        </template>
      </Button>
    </div>
    <MyProfileContents />
    <MyProfileActivityHistory />
    <NavBar />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Button from '@/components/core/Button/Button.vue';
import NavBar from '@/components/expanded/NavBar.vue';
import MyProfileContents from '@/components/expanded/MyProfileContents.vue';
import MyProfileActivityHistory from '@/components/expanded/MyProfileActivityHistory.vue';

const router = useRouter();
const goBack = () => {
  router.back();
};
</script>
