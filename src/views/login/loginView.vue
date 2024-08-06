<template>
  <div>
    <Input :placeholder="'내용을 입력하세요'">
      <template #icon>
        <img src="@/assets/img/icon/ic_search.svg" alt="검색 버튼" style="position: absolute;">
      </template>
    </Input>
  </div>
</template>
<script setup>
  import Input from "@/components/core/Input.vue";
</script>
