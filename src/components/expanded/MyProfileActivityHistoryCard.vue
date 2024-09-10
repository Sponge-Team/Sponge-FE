<template>
  <div>
    <Card
      v-for="(card, index) in cards"
      :key="index"
      color="white"
      class="mt-3 ml-5"
      :box-shadow="true"
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
          <p class="s-title-01 truncate">{{ card.title }}</p>
          <p class="mt-2 s-body-02" style="color: var(--s-semantic-primary-font-info-default);">{{ card.body }}</p>
        </div>

        <div class="flex justify-between items-center mt-2 s-body-02">
          <div class="flex items-center">
            <img src="@/lib/assets/svg/ic_chat_y.svg" alt="답변" class="icon" />
            <span class="primary">훈련사 답변 {{ card.commentsCount }}</span>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import Card from "@/components/core/Card/Card.vue";
import Tag from "@/components/core/Tag/Tag.vue";
const props = defineProps({
  cards: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
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