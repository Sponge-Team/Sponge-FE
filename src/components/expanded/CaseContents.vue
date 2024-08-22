<template>
  <div>
    <Card color="white" style="padding: 0;">
      <template #body-content>
        <div v-if="isExitsButtons === true" style="border-bottom: 1px solid #E8E8E8; height: 49px;">
          <ToggleButtons :buttons="buttons" @updateButton="(data) => {updateButtonData(data)}"/>
        </div>
        <PostsCardContainer :cards="cards" shape="square"/>
      </template>
    </Card>

    <slot name="floatingButton"></slot>
  </div>
</template>
<script setup>
import Card from "@/components/core/Card/Card.vue"
import PostsCardContainer from "@/components/core/Card/PostsCardContainer.vue";
import ToggleButtons from "@/components/core/Button/ToggleButtons.vue";

const props = defineProps({
  buttons: {
    type: Array,
    required: false
  },
  cards: {
    type: Array,
    required: true
  },
  isExitsButtons: {
    type: Boolean,
    default: true,
  }
});
const emit = defineEmits(['updateButtonData'])
const updateButtonData = (data) => {
  emit('updateButtonData', data)
}
</script>
<style></style>
