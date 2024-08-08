<template>
  <div class="w100%">
    <div class="flex p2 flex-justify-between">
      <MainHeader/>
      <Button color="tertiary" rounded="square" size="l"><p>로그인/가입</p></Button>
    </div>
    <Input type="outlined" :icon="true" placeholder="반려견의 문제행동이 궁금해요" class="mb-3">
      <template #icon>
        <img src="../../lib/assets/svg/ic_search.svg" alt="검색 버튼" class="pl3" style="width: max-content; height: max-content;">
      </template>
    </Input>
    <MainBanner/>
    <NavBar/>
  </div>
</template>
<script setup>
import NavBar from "@/components/expanded/NavBar.vue";
import MainHeader from "@/components/expanded/MainHeader.vue";
import Button from "@/components/core/Button/Button.vue";
import Input from "@/components/core/Input/Input.vue";
import MainBanner from "@/components/expanded/MainBanner.vue";
</script>
