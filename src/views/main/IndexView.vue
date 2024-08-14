<template>
  <div class="w100%">
    <div class="flex p2 flex-justify-between">
      <MainHeader/>
      <Button color="tertiary" rounded="square" size="m"><p>로그인/가입</p></Button>
    </div>
    <Input type="outlined" :icon="true" placeholder="반려견의 문제행동이 궁금해요" class="mb-3">
      <template #icon>
        <img src="@/lib/assets/svg/ic_search.svg" alt="검색 버튼" class="pl3" style="width: max-content; height: max-content;">
      </template>
    </Input>
    <MainBanner/>
    <ContentSection
      :buttons="['전체', '분리불안', '사회성', '요구성 짖음', '입질 / 경계']"
      :cards="[
        { tags: ['분리불안', '요구성 짖음', '외출'], title: '제가 없을 때 아이가 계속 짖어요', body: '아이가 제가 외출하려고 나가면 집에 혼자서 계속 짖어요. 펫캠으로 확인했을 때 최대 2시간까지 허공을 보고 짖어서 너무 걱정입니...', footer: '훈련사 답변 3 | 추천 12' },
        { tags: ['분리불안', '요구성 짖음', '외출'], title: '제가 없을 때 아이가 계속 짖어요', body: '아이가 제가 외출하려고 나가면 집에 혼자서 계속 짖어요. 펫캠으로 확인했을 때 최대 2시간까지 허공을 보고 짖어서 너무 걱정입니...', footer: '훈련사 답변 3 | 추천 12' },
        { tags: ['분리불안', '요구성 짖음', '외출'], title: '제가 없을 때 아이가 계속 짖어요', body: '아이가 제가 외출하려고 나가면 집에 혼자서 계속 짖어요. 펫캠으로 확인했을 때 최대 2시간까지 허공을 보고 짖어서 너무 걱정입니...', footer: '훈련사 답변 3 | 추천 12' }
      ]"
    >
      <template #title>최신 진단 사례</template>
    </ContentSection>
    <NavBar class="mt-2"/>
  </div>
</template>
<script setup>
import NavBar from "@/components/expanded/NavBar.vue";
import MainHeader from "@/components/expanded/MainHeader.vue";
import Button from "@/components/core/Button/Button.vue";
import Input from "@/components/core/Input/Input.vue";
import MainBanner from "@/components/expanded/MainBanner.vue";
import ContentSection from "@/components/expanded/ContentSection.vue";
</script>
