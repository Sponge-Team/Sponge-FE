<template>
  <div class="pt-5 pb-5">
    <div class="s-heading-02 pt-2 pb-2" style="color:var(--s-semantic-secondary-font-storng-default);">
      {{title}}<span v-if="required === true" class="s-heading-03" style="color:var(--s-semantic-head-font-hightlight-default);">*</span>
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
  required: {
    type: Boolean,
    default: true
  }
})
</script>
