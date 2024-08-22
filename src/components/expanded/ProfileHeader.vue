<template>
  <div class="flex position-relative" style="height: 40px">
    <Button v-if="store.getters.getProfileLevel.mode === 'LIST'" color="transparent" style="padding: 0;"
            @click="store.dispatch('setProfileLevel', {mode: 'LIST', title: '', step: 'MAIN', percentage: 0})">
      <template #icon>
        <img
             src="@/lib/assets/svg/ic_arrow_right_lg.svg" alt="이전 페이지로 가기 버튼">
      </template>
    </Button>
    <Button v-if="store.getters.getProfileLevel.mode === 'DETAIL'" color="transparent" style="padding: 0;"
            @click="store.dispatch('setProfileLevel', {mode: 'LIST', title: '', step: 'MAIN', percentage: 0})">
      <template #icon>
        <img src="@/lib/assets/svg/ic_close_lg.svg" :alt="store.getters.getProfileLevel.title+' 작성 페이지 닫기 버튼'">
      </template>
    </Button>
    <div class="position-absolute s-heading-02" style="color: var(--s-semantic-secondary-font-strong-default);top: 50%; left: 50%; transform: translate(-50%, -50%)">
      {{ store.getters.getProfileLevel.title }}
    </div>
  </div>
</template>
<script setup>
import Button from "@/components/core/Button/Button.vue";
import store from "@/store/index.js";
</script>
