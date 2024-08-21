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
import { fetchProblemCode } from '@/apis/fakeApi';

const categories = ref([])
const selectedCategories = ref([]);

onMounted(async () => {
  const response = await fetchProblemCode();
    try {
      categories.value = response.map(category => category.name);
    } catch (error) {
      console.error("데이터를 불러오는 중 오류가 발생했습니다.", error);
    }
});

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
