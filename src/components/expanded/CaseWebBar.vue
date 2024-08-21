<template>
  <div class="flex justify-between flex-items-center p4">
    <h1 class="s-heading-04">진단사례</h1>
    <div class="flex justify-start flex-items-center">
      <Button class="mr5" color="transparent" style="padding: 0;">
        <template #icon>
          <img src="@/lib/assets/svg/ic_search_b.svg" alt="검색하기 버튼">
        </template>
      </Button>
      <Button color="transparent" style="width: 40px; height: 40px; padding: 0;">
        <template #icon>
          <img src="@/lib/assets/svg/ic_web_bar_user.svg" alt="마이페이지 이동 버튼">
        </template>
      </Button>
    </div>
  </div>
</template>
<script setup>
import Button from "@/components/core/Button/Button.vue";
</script>
