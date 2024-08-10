<template>
  <div class="flex position-relative">
    <Button color="transparent">
      <template #icon>
        <img src="@/lib/assets/svg/ic_close_lg.svg" :alt="title+' 작성 페이지 닫기 버튼'">
      </template>
    </Button>
    <div class="position-absolute s-heading-02" style="color: var(--s-semantic-secondary-font-storng-default);top: 50%; left: 50%; transform: translate(-50%, -50%)">
      {{ title }}</div>
  </div>
</template>
<script setup>
import Button from "@/components/core/Button/Button.vue";

const props = defineProps({
  title: {
    type: String,
    default: '타이틀'
  }
})
</script>