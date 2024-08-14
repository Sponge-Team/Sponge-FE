<template>
  <div class="pt-2 pb-2 flex flex-justify-between flex-items-center">
    <div class="position-relative progressBar">
      <span class="position-absolute" :style="`width: ${percentage}%`"></span>
    </div>
    <span class="s-heading-02" style="color: var(--s-semantic-secondary-font-light-default)">완성도 {{percentage}}%</span>
  </div>
</template>
<script setup>
import {computed} from "vue";
import store from "@/store/index.js";

const percentage = computed(()=>{
  return store.getters.getProfileLevel.percentage === 0 ? 0 : 70
})
</script>
<style>
.progressBar{
  width: 70%;
  height: 6px;
  content: '';
  background-color: var(--s-semantic-primary-background-neutral-default);
  border-radius: 100px;
  span{
    height: 6px;
    content: '';
    background-color: var(--s-semantic-primary-background-normal-default);
    border-radius: 100px;
  }
}
</style>
