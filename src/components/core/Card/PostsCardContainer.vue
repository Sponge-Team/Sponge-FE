<template>
  <div class="cards-container flex flex-wrap p3 pt2">
    <Card :shape="shape" color="white" v-for="(card, i) in cards" :key="'case-card'+i" class="card-divider" @click="clickCase(card.id)">
      <template #body-content>
        <div class="flex items-center gap-2">
          <Tag :text="'#' + card.tags.main" color="primary"/>
          <Tag
              v-for="(tag, index) in card.tags.sub"
              :key="index" :text="'#' + tag"
              color="secondary"
          />
        </div>

        <div class="mt-2">
          <p class="s-title-02">{{ card.title }}</p>
          <p class="content-body mt-2 s-body-02">{{ card.body }}</p>
        </div>

        <div class="footer mt-1 s-body-03">
          <img src="@/lib/assets/svg/ic_chat_y.svg" alt="답변" class="icon" />
          <span class="primary">훈련사 답변 {{ card.commentsCount }}</span>
          <span style="margin: 0 8px; color: #D8D8D8;">|</span>
          <img src="@/lib/assets/svg/Ic_like.svg" alt="추천" class="icon" />
          <span class="secondary">추천 {{ card.recommendsCount }}</span>
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
  },
  shape: {
    type: String,
    default: 'rounded'
  }
});

const emit = defineEmits(['clickCase'])
const clickCase = (id) => {
  emit('clickCase', id)
}
</script>
<style>
.content-body {
  color: var(--s-palette-gray-400);
}

.cards-container {
  width: 100%;
  padding-bottom: 80px;
}

.footer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--s-semantic-secondary-font-strong-default);
  white-space: nowrap;
}

.icon {
  width: 12px;
  height: 12px;
  vertical-align: middle;
  margin-right: 4px
}

.primary {
  color: var(--s-semantic-primary-font-strong-default);
  vertical-align: middle;
}

.secondary {
  color: var(--s-semantic-secondary-font-strong-default);
  vertical-align: middle;
}

.card-divider {
  border-bottom: 1px solid var(--s-semantic-secondary-border-default) !important;
}
</style>
