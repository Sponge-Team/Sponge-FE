<template>
  <div class="flex position-relative pt-4">
    <Button color="transparent" @click="goBack">
      <template #icon>
        <img src="@/lib/assets/svg/ic_close_lg.svg" alt="닫기 버튼'">
      </template>
    </Button>
  </div>
  <div class="p5">
    <Button color="primary">1</Button>
    <Button class="secondary ml-3">2</Button>
    <Button class="secondary ml-3">3</Button>
  </div>
  <div class="s-heading-00 p5">
    문제행동 교정이 필요한<br> 강아지를 선택해주세요
  </div>
  <div class="p3">
    <Card color="secondary">
      <template #body-content>
        <div class="flex flex-items-center flex-justify-between">
          <div class="flex flex-justify-center flex-items-center position-relative"
            style="width: 82px; height: 82px; border-radius: 100px; background-color: var(--s-palette-main-lighten-white);">
            <img src="@/lib/assets/svg/ic_user.svg" alt="기본 이미지">
          </div>
          <div class="p2">
            <p class="s-title-01 mb-3">라운</p>
            <p class="s-body-01" style="color: var(--s-semantic-primary-font-light-default);">수컷 (중)</p>
            <p class="s-body-01" style="color: var(--s-semantic-primary-font-light-default);">서울 송파구</p>
          </div>
          <Checkbox />
        </div>
      </template>
    </Card>
    <Card color="secondary" type="outlined">
      <template #body-content>
        <div class="center-content">
          <Inputfile />
          <p class="s-title-02 mb-3">강아지 추가하기</p>
          <p class="mb-3">등록된 강아지가 없어요.</p>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Button from "@/components/core/Button/Button.vue";
import Card from "@/components/core/Card/Card.vue";
import Inputfile from "@/components/core/Input/Inputfile.vue";
import Checkbox from "@/components/core/Checkbox/Checkbox.vue";

const router = useRouter();
function goBack() {
  router.back();
}
</script>

<style scoped>
.secondary {
  background-color: var(--s-semantic-desc-font-normal-default);
  color: var(--s-palette-main-lighten-100);
}

.center-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}
</style>