<template>
  <div>
    <div class="flex ml-3 mt-3">
      <span class="s-title-01"><slot name="title"></slot></span>
      <img src="@/lib/assets/svg/ic_arrow_right.svg" alt="오른쪽 화살표" class="ml-2">
    </div>
    
    <div class="flex flex-justify-between p2" style="color: var(--s-semantic-primary-font-info-default);">
      <Button v-for="(buttonText, index) in buttons" :key="index" color="transparent" size="s">
        {{ buttonText }}
      </Button>
    </div>
    
    <div class="cards-container p2" style="display: flex; flex-wrap: wrap; gap: 16px; background-color: var(--s-semantic-primary-background-light-default);">
      <Card v-for="(card, index) in cards" :key="index" color="white" class="mt-3 ml-5" style="width: 90%; height: 180px;">
        <template #body-content>
          <div class="flex flex-items-center">
            <Tag v-for="(tag, index) in card.tags" :key="index">
              #{{ tag }}
            </Tag>
          </div>
          
          <div class="mt-2">
            <p class="s-title-01">{{ card.title }}</p>
            <p class="content-body mt-2 s-body-02">{{ card.body }}</p>
          </div>
          
          <div class="float-right mt-2 s-body-02">
            <p>{{ card.footer }}</p>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
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
</script>

<style scoped>
.content-body {
  color: var(--s-semantic-primary-font-info-default);
}
.cards-container {
  width: 100%;
}
</style>