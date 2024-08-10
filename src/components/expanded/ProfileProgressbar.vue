<template>
  <div>
    <img v-if="mode === 'ALL'" src="@/lib/assets/svg/ic_arrow_right_lg.svg" alt="정보 입력 전단계로 이동 버튼">
    <img v-if="mode === 'DETAIL'" src="@/lib/assets/svg/ic_close_lg.svg" alt="상세 정보 입력창 닫기 버튼">
  </div>
</template>
<script setup>
const props = defineProps({
  mode: {
    type: String,
  }
})
</script>
