<template>
  <div>
    <div class="flex justify-between position-relative pt-4 pb-4">
      <Button color="transparent" @click="goBack">
        <template #icon>
          <img src="@/lib/assets/svg/ic_arrow_right_lg.svg" alt="이전 페이지로 가기 버튼">
        </template>
      </Button>
      <RouterLink to="/myprofile/create">
        <div class="flex items-center justify-center">
          <img src="@/lib/assets/svg/ic_write_b.svg" alt="이전 페이지로 가기 버튼">
          <span class="s-title-03 pr-5 pt-1 pl-1">프로필 수정</span>
        </div>
      </RouterLink>
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
