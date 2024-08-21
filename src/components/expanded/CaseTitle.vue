<template>
  <div class="mt5 pr4 pl4">
    <div>
      <p class="s-body-00">내 반려동물 문제행동에 대해</p>
      <p class="s-body-00">전문가가 직접 알려드려요.</p>
      <Button color="transparent" style="padding: 0;" class="mt-2">
        <template #default>
          <p class="s-title-02 mr2">문제 행동 상담받기</p>
        </template>
        <template #icon>
          <img src="@/lib/assets/svg/ic_arrow_right_y.svg" alt="문제 행동 상담받기">
        </template>
      </Button>
    </div>
  </div>
</template>
<script setup>
import Button from "@/components/core/Button/Button.vue";
import Card from "@/components/core/Card/Card.vue"
</script>
