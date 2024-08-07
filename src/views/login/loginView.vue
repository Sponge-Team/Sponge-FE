<template>
  <div>
    <div class="m3">
      <Input class="mb-2" :placeholder="'내용을 입력하세요'">
        <template #icon>
          <img src="@/lib/assets/svg/ic_search.svg" alt="검색 버튼">
        </template>
      </Input>
      <Input class="mb-2" :placeholder="'경력을 입력해주세요'">
        <template #icon>
          <img src="@/lib/assets/svg/ic_arrow_right.svg" alt="검색 버튼">
        </template>
      </Input>
      <Input class="mb-2" :type="'range'"/>
      <Input class="mb-2" :type="'number'" :placeholder="'숫자만 입력하세요.'"/>
      <Input class="mb-2" :type="'file'"/>
    </div>
  </div>
</template>
<script setup>
  import Input from "@/components/core/Input.vue";
</script>
