<template>
  <div>
    <!-- Title -->
    <div class="flex ml-3 mt-3 items-center">
      <span class="s-title-01"><slot name="title"></slot></span>
      <RouterLink to="/case">
        <img src="@/lib/assets/svg/ic_arrow_right.svg" alt="오른쪽 화살표" class="ml-2">
      </RouterLink>
    </div>

    <!-- Buttons -->
    <div class="buttons-wrapper">
      <div class="flex justify-between p-2 buttons-container">
        <Button
          v-for="(buttonText, index) in buttons"
          :key="index"
          :class="{'active-button': activeButtonIndex === index}"
          @click="handleButtonClick(index, buttonText)"
          color="transparent"
          size="s"
        >
          {{ buttonText }}
        </Button>
      </div>
    </div>

    <!-- Cards -->
    <div class="cards-container flex flex-wrap gap-4 p2">
      <MainContentCard :cards="cards" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from "@/components/core/Button/Button.vue";
import MainContentCard from '@/components/expanded/MainContentCard.vue';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

const props = defineProps({
  buttons: {
    type: Array,
    required: true
  },
  cards: {
    type: Array,
    required: true
  }
});
const activeButtonIndex = ref(0);

// 필터링
const emit = defineEmits(['filterPosts']);
function handleButtonClick(index, buttonText) {
  activeButtonIndex.value = index;
  emit('filterPosts', buttonText);
}

// 작성일 계산 (date-fns 라이브러리)
function timeAgo(dateString) {
  const date = new Date(dateString);
  return formatDistanceToNow(date, { addSuffix: true, locale: ko });
}
</script>

<style scoped>
.buttons-wrapper {
  overflow-x: auto;
  white-space: nowrap;
  padding: 0 10px;
}

.buttons-container {
  color: var(--s-semantic-primary-font-info-default);
  gap: 20px;
  width: max-content;
}

.buttons-container > * {
  flex: 0 0 auto;
}

.active-button {
  color: var(--s-semantic-primary-font-strong-default);
  position: relative;
  font-weight: 500;
}

.active-button::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 4px;
  background-color: var(--s-semantic-primary-font-strong-default);
  border-radius: 0.25em;
}

.cards-container {
  background-color: var(--s-semantic-primary-background-light-default);
  width: 100%;
  min-height: 180px;
  padding-bottom: 80px;
}

.icon {
  width: 16px;
  height: 16px;
  vertical-align: middle;
}

.primary {
  color: var(--s-semantic-primary-font-strong-default);
  margin: 0 4px;
  vertical-align: middle;
}

.secondary {
  color: var(--s-semantic-secondary-font-strong-default);
  margin: 0 4px;
  vertical-align: middle;
}
</style>
