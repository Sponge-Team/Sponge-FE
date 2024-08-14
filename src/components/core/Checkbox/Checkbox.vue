<template>
  <div>
    <label for="checkbox">
      <div class="flex">
        <img src="@/lib/assets/svg/ic_check.svg" alt="체크박스 이미지">
        <span class="pl-2 s-title-02" style="color: var(--s-semantic-secondary-font-storng-default)">{{text}}</span>
      </div>
    </label>
    <input type="checkbox" name="checkbox" id="checkbox" style="display: none;">
  </div>
</template>
<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'text'
  }
})
</script>