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
    <div class="cards-container flex flex-wrap gap-4 p-2">
      <Card
        v-for="(card, index) in cards"
        :key="index"
        color="white"
        class="mt-3 ml-5"
        style="width: 90%; height: 160px;"
      >
        <template #body-content>
          <div class="flex items-center gap-2">
            <Tag
              v-for="(tag, index) in card.tags"
              :key="index" :text="'#' + tag"
              :color="index === 0 ? 'primary' : 'secondary'"
            />
          </div>

          <div class="mt-2">
            <p class="s-title-01 card-title">{{ card.title }}</p>
            <p class="content-body mt-2 s-body-02">{{ card.body }}</p>
          </div>

          <div class="footer mt-1 s-body-02">
            <img src="@/lib/assets/svg/ic_chat_y.svg" alt="답변" class="icon" />
            <span class="primary">훈련사 답변 {{ card.commentsCount }}</span>
            <span class="secondary">|</span>
            <img src="@/lib/assets/svg/Ic_like.svg" alt="추천" class="icon" />
            <span class="secondary">추천 {{ card.recommendsCount }}</span>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from "@/components/core/Button/Button.vue";
import Card from "@/components/core/Card/Card.vue";
import Tag from "@/components/core/Tag/Tag.vue";

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

.content-body {
  color: var(--s-semantic-primary-font-info-default);
}

.cards-container {
  background-color: var(--s-semantic-primary-background-light-default);
  width: 100%;
  min-height: 180px;
  padding-bottom: 80px;
}

.footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: var(--s-semantic-secondary-font-strong-default);
  white-space: nowrap;
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

.card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
