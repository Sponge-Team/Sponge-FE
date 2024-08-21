<template>
  <div class="overflow-hidden position-relative">
    <CaseTitle/>
    <div class="mt10">
      <Card color="white" style="padding: 0;">
        <template #body-content>
          <div style="border-bottom: 1px solid #E8E8E8; height: 49px;">
            <ToggleButtons :buttons="buttons"/>
          </div>
          <PostsCardContainer :cards="cards" shape="square"/>
        </template>
      </Card>

      <div class="position-fixed" style="bottom: 85px; right: 20px;">
        <Button size="l" style="box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.25);" :rounded="isScroll === false ? 'rounded-circle' : 'circle'">
          <template #default>
            <div class="flex flex-justify-between">
              <img src="@/lib/assets/svg/ic_write_full.svg" alt="문제행동 상담받기 이미지" :class="isScroll === false ? 'mr3' : ''">
              <p v-if="isScroll === false" class="s-heading-03">문제행동 상담받기</p>
            </div>
          </template>
        </Button>
      </div>
    </div>
  </div>
</template>
<script setup>
import Card from "@/components/core/Card/Card.vue"
import {computed, onMounted, onUnmounted, ref} from "vue";
import CaseTitle from "@/components/expanded/CaseTitle.vue";
import PostsCardContainer from "@/components/core/Card/PostsCardContainer.vue";
import ToggleButtons from "@/components/core/Button/ToggleButtons.vue";
import Button from "@/components/core/Button/Button.vue";

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
const isScroll = ref(false)
const scrollPosition = ref(0);
const showAtPosition = 200; // 스크롤 위치가 200px 이상일 때 보여줌


const handleScroll = () => {
  scrollPosition.value = window.scrollY;
  isScroll.value = scrollPosition.value > showAtPosition;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  scrollPosition.value = window.scrollY;
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<style>
.circle{
  width: 54px;
  height: 54px;
  padding: 0;
}
</style>
