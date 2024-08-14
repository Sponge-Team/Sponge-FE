<template>
  <div style="height: 220px; width: 100%; background-color: var(--s-semantic-primary-background-normal-default); display: flex;">
    <div style="flex: 2; display: flex; flex-direction: column; justify-content: center; padding-left: 20px;">
      <div class="s-heading-00" style="color: var(--s-palette-main-lighten-100);">
        <p>내 반려동물 문제행동에 정확한 해결방법을 <br> 모르겠다면?</p>
      </div>
      <Button color="secondary" size="m" class="mt-2">무료로 진단 받아보기
        <template #icon>
          <img src="@/lib/assets/svg/ic_arrow_right_w.svg" alt="오른쪽 화살표" class="ml-2">
        </template>
      </Button>
    </div>
    
    <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
      <img src="@/lib/assets/svg/momg.svg" alt="엄마 이미지" style="max-height: 100%; max-width: 100%;">
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/core/Button/Button.vue";
</script>