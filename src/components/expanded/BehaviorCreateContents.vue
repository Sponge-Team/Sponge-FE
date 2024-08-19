<template>
  <div>
    <div class="p5">
      <Button class="secondary">1</Button>
      <Button class="secondary ml-3">2</Button>
      <Button color="primary" class="ml-3">3</Button>
    </div>
    <div class="s-heading-00 p5">
      문제행동에 해당되는 <br> 내용을 선택해주세요
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/core/Button/Button.vue";
</script>

<style scoped>
.secondary {
  background-color: var(--s-semantic-desc-font-normal-default);
  color: var(--s-palette-main-lighten-100);
}
</style>