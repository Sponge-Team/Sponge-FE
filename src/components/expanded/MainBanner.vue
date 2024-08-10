<template>
  <div style="height: 220px; width: 100%; background-color: var(--s-semantic-primary-background-normal-default);">
    <div class="s-heading-01" style="color: var(--s-palette-main-lighten-100);">
      내 반려동물 문제행동에 정확한 해결방법을 모르겠다면?
    </div>
    <Button color="secondary" size="m">무료로 진단 받아보기
      <template #icon>
        <img src="../../lib/assets/svg/ic_arrow_right_w.svg" alt="오른쪽 화살표" class="ml-2">
      </template>
    </Button>
  </div>
</template>
<script setup>
import Button from "@/components/core/Button/Button.vue";
</script>
