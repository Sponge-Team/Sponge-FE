<template>
  <div class="">
    <div class="flex s-heading-02 pt-2 pb-2" style="color:var(--s-semantic-secondary-font-strong-default);">
      <p v-if="title">{{title}}</p><p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <span v-if="required === true" class="s-heading-03" style="color:var(--s-semantic-head-font-hightlight-default);">*</span>
      <span v-if="desc" class="s-title-02 ml-2" style="color:var(--s-semantic-desc-font-normal-default);">{{desc}}</span>
    </div>
    <slot name="body-content"></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  desc: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: true
  },
  errorMessage: {
    type: String,
    default: '',
  }
})
</script>
<style>
.error-message {
  color: red;
  font-size: 10px;
  margin-top: 5px;
}
</style>
