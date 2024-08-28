<template>
  <div class="pt-5 pb-5">
    <div class="flex s-heading-02 pt-2 pb-2" style="color:var(--s-semantic-secondary-font-strong-default);">
      <p>{{title}}</p>
      <span v-if="required === true" class="s-heading-03" style="color:var(--s-semantic-head-font-hightlight-default);">*</span>
      <span class="s-title-02 ml-2" style="color:var(--s-semantic-desc-font-normal-default);">{{desc}}</span>
      <slot class="m1-2" name="title-count"></slot>
    </div>
    <slot name="body-content"></slot>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'title',
  },
  desc: {
    type: String,
  },
  required: {
    type: Boolean,
    default: true
  }
})
</script>
