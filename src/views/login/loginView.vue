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
    <div>
      <Button color="primary" size="l">무료로 진단 받아보기
        <template #icon>
          <img src="@/lib/assets/svg/ic_arrow_right.svg" alt="오른쪽 화살표" class="ml-2">
        </template>
      </Button>
      <Button color="secondary" size="m">무료로 진단 받아보기
        <template #icon>
          <img src="@/lib/assets/svg/ic_arrow_right.svg" alt="오른쪽 화살표" class="ml-2">
        </template>
      </Button>
      <Button color="tertiary" size="m">무료로 진단 받아보기</Button>
      <Button color="primary" size="s">팝업버튼</Button>
      <Button color="quaternary" size="s">팝업버튼</Button>
      <Button color="quinary" size="s" rounded="square">서브버튼</Button>
      <Button color="outline-primary" size="s" rounded="square">서브버튼</Button>

    </div>
  </div>
</template>
<script setup>
import Input from "@/components/core/Input.vue";
import Button from "@/components/core/Button.vue";
</script>
