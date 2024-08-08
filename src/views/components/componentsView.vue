<template>
  <div>
    <div class="m5">
      <Input type="outlined" :icon="true" placeholder="반려견의 문제행동이 궁금해요" class="mb-3">
        <template #icon>
          <img src="../../lib/assets/svg/ic_search.svg" alt="검색 버튼" class="pl3" style="width: max-content; height: max-content;">
        </template>
      </Input>
      <Input color="secondary" type="text" shape="square" placeholder="내용을 입력하세요" class="mb-3"/>
      <InputTextarea placeholder="간단한 자기소개를 입력하면 견주들이 신뢰도를 얻는데 도움이 될 수 있어요." class="mb-3"/>
      <InputRange class="mb-3" :value="0"/>
    </div>
    <div class="m5">
      <Button color="primary" size="l">무료로 진단 받아보기
        <template #icon>
          <img src="../../lib/assets/svg/ic_arrow_right_w.svg" alt="오른쪽 화살표" class="ml-2">
        </template>
      </Button>
      <Button color="secondary" size="m">무료로 진단 받아보기
        <template #icon>
          <img src="../../lib/assets/svg/ic_arrow_right_w.svg" alt="오른쪽 화살표" class="ml-2">
        </template>
      </Button>
      <Button color="tertiary" size="m">무료로 진단 받아보기</Button>
      <Button color="primary" size="s">팝업버튼</Button>
      <Button color="quaternary" size="s">팝업버튼</Button>
      <Button color="quinary" size="s" rounded="square">서브버튼</Button>
      <Button color="primary" size="s" rounded="square">서브버튼</Button>
    </div>
  </div>
</template>
<script setup>
  import Input from "@/components/core/Input/Input.vue";
  import InputTextarea from "@/components/core/Input/InputTextarea.vue";
  import InputRange from "@/components/core/Input/InputRange.vue";
  import Button from "@/components/core/Button/Button.vue";
</script>
