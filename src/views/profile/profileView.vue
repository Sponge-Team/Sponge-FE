<template>
  <div class="p5">
    <Button color="transparent" style="padding: 0;">
      <template #icon>
        <img src="@/lib/assets/svg/ic_arrow_right_lg.svg" alt="정보 입력 전단계로 이동 버튼">
      </template>
    </Button>
    <ProfileMainContents/>
  </div>
</template>
<script setup>
import ProfileMainContents from "@/components/expanded/ProfileMainContents.vue";
import Button from "@/components/core/Button/Button.vue";
import {ref} from "vue";

const mode = ref('')
</script>
