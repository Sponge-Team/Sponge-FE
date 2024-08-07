<template>
  <div>
    안녕하세유
    <Input :placeholder="'내용을 입력하세요'">
      <template #icon>
        <img src="@/lib/assets/svg/ic_search.svg" alt="검색 버튼">
      </template>
    </Input>
  </div>
</template>
<script setup>
  import Input from "@/components/core/Input.vue";
</script>
