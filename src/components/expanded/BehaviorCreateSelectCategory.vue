<template>
  <div>
    <div class="p5">
      <Button class="secondary">1</Button>
      <Button color="primary" class="ml-3">2</Button>
      <Button class="secondary ml-3">3</Button>
    </div>
    <div class="s-heading-00 p5">
      문제행동에 해당되는 <br> 내용을 선택해주세요
    </div>
    <div class="p5 grid grid-cols-2 gap-4">
      <Card v-for="(category, index) in categorys" :key="index" color="secondary">
        <template #body-content>
          {{ category }}
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/core/Button/Button.vue";
import Card from "@/components/core/Card/Card.vue";

const categorys = ['분리불안', '배변', '짖음', '사회성',  '공격성', '기본교육', '식사교육', '기타'];

</script>

<style scoped>
.secondary {
  background-color: var(--s-semantic-desc-font-normal-default);
  color: var(--s-palette-main-lighten-100);
}
</style>