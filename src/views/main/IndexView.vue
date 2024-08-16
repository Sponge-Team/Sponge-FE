<template>
  <div class="w100%">
    <div class="p3 flex flex-justify-between items-center">
      <MainHeader/>
      <template v-if="isLoggedIn">
        <div class="user-info flex items-center">
          <p class="user-name mr-2">
            <span>{{ userProfile.name }}</span>
            {{ userProfile.role }}
          </p>
          <img :src="userProfile.image" alt="유저 기본이미지" class="user-image"/>
        </div>
      </template>
      <template v-else>
        <RouterLink to="/login">
          <Button color="tertiary" rounded="square" size="m"><p>로그인/가입</p></Button>
        </RouterLink>
      </template>
    </div>
    <Input type="outlined" :icon="true" placeholder="반려견의 문제행동이 궁금해요" class="mb-3 ml-2" style="width: 95%;">
      <template #icon>
        <img src="@/lib/assets/svg/ic_search.svg" alt="검색 버튼" class="pl3" style="width: max-content; height: max-content;">
      </template>
    </Input>
    <MainBanner/>
    <MainContent
      :buttons="['전체', '분리불안', '사회성', '요구성 짖음', '입질 / 경계']"
      :cards="[
        { tags: ['분리불안', '요구성 짖음', '외출'], title: '제가 없을 때 아이가 계속 짖어요', body: '아이가 제가 외출하려고 나가면 집에 혼자서 계속 짖어요. 펫캠으로 확인했을 때 최대 2시간까지 허공을 보고 짖어서 너무 걱정입니...', footer: '훈련사 답변 3 | 추천 12' },
        { tags: ['분리불안', '요구성 짖음', '외출'], title: '제가 없을 때 아이가 계속 짖어요', body: '아이가 제가 외출하려고 나가면 집에 혼자서 계속 짖어요. 펫캠으로 확인했을 때 최대 2시간까지 허공을 보고 짖어서 너무 걱정입니...', footer: '훈련사 답변 3 | 추천 12' },
        { tags: ['분리불안', '요구성 짖음', '외출'], title: '제가 없을 때 아이가 계속 짖어요', body: '아이가 제가 외출하려고 나가면 집에 혼자서 계속 짖어요. 펫캠으로 확인했을 때 최대 2시간까지 허공을 보고 짖어서 너무 걱정입니...', footer: '훈련사 답변 3 | 추천 12' }
      ]"
    >
      <template #title>최신 진단 사례</template>
    </MainContent>
    <NavBar class="nav-bar"/>
  </div>
</template>

<script setup>
import NavBar from "@/components/expanded/NavBar.vue";
import MainHeader from "@/components/expanded/MainHeader.vue";
import Button from "@/components/core/Button/Button.vue";
import Input from "@/components/core/Input/Input.vue";
import MainBanner from "@/components/expanded/MainBanner.vue";
import MainContent from "@/components/expanded/MainContent.vue";
import { computed } from 'vue';
import store from "@/store/index.js";

import defaultImage from '@/lib/assets/svg/ic_user.svg';
const tokenGetter = computed(() => store.getters['token/getToken'] || { access_token: '' });
const isLoggedIn = computed(() => !!tokenGetter.value.access_token);
// const isLoggedIn = computed(() => true);

const userProfile = computed(() => {
  const profile = {
    name: '강훈련',
    image: '',
    role: 1,
  };

  const role = profile.role === 1
    ? `훈련사님`
    : `견주님`;

  const image = profile.image || defaultImage;

  return { name: profile.name, role, image };
});
</script>

<style scoped>
.user-info {
  display: flex;
  align-items: center;
}

.user-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 8px;
  background-size: cover;
  background-position: center;
}

.user-name {
  font-size: 16px;
  color: var(--s-semantic-secondary-font-strong-default);
}

.user-name span {
  color: var(--s-semantic-primary-font-strong-default);
  font-weight: 600;
}

.nav-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: var(--s-semantic-primary-background-white-default);
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
</style>
