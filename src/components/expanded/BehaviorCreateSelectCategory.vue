<template>
  <div>
    <div class="p5">
      <Button class="secondary">1</Button>
      <Button color="primary" class="ml-3">2</Button>
      <Button class="secondary ml-3">3</Button>
    </div>
    <div class="s-heading-00 p5">문제행동에 해당되는 <br> 내용을 선택해주세요</div>
    <div class="p5 grid grid-cols-2 gap-4">
      <Button
        v-for="(category, index) in categories"
        :key="index"
        rounded="square"
        :color="selectedCategories.includes(category) ? 'quaternary' : 'quinary'"
        @click="selectCategory(category)"
      >
        {{ category }}
      </Button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted  } from 'vue';
import Button from "@/components/core/Button/Button.vue";

// 추후 수정 -> DB 문제행동유형 저장된 코드로 불러오기 
const categories = ['분리불안', '배변', '짖음', '사회성', '공격성', '기본교육', '식사교육', '기타'];
const selectedCategories = ref([]);

onMounted(() => {
  const savedCategories = JSON.parse(localStorage.getItem('selectedCategories')) || [];
  selectedCategories.value = savedCategories;
});

function selectCategory(category) {
  if (selectedCategories.value.includes(category)) {
    selectedCategories.value = selectedCategories.value.filter(c => c !== category);
  } else {
    if (selectedCategories.value.length >= 3) {
      alert('문제 유형은 최대 3개까지 선택이 가능합니다.');
      return;
    }
    selectedCategories.value.push(category);
  }
  localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories.value));
}
</script>

<style scoped>
.secondary {
  background-color: var(--s-semantic-desc-font-normal-default);
  color: var(--s-palette-main-lighten-100);
}
</style>
