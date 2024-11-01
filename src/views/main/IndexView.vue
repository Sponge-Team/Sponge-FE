<template>
  <div class="w100%">
    <div class="p3 flex flex-justify-between items-center">
      <MainHeader />
      <template v-if="store.getters.getToken.access_token !== '' && store.getters.getToken.refresh_token !== ''">
        <div class="user-info flex items-center">
          <p class="user-name mr-2">
            <span>{{ userProfile.name }}</span> {{ userProfile.role }}
          </p>
        </div>
      </template>
      <template v-if="store.getters.getToken.access_token === '' && store.getters.getGoogle.google === null">
        <RouterLink to="/login">
          <Button color="tertiary" rounded="square" size="m">
            <p>로그인/가입</p>
          </Button>
        </RouterLink>
      </template>
      <template v-if="store.getters.getToken.access_token !== '' || store.getters.getGoogle.google !== null">
        <div class="user-info flex items-center">
          <p class="user-name mr-2">
            <span>{{ userProfile.name }}</span> {{ userProfile.role }}
          </p>
        </div>
        <div>
          <Button color="tertiary" rounded="square" size="m" @click="store.commit('SET_GOOGLE', {google: null, userType: null})">
            <p>로그아웃</p>
          </Button>
        </div>
      </template>
    </div>
    <Input type="outlined" :icon="true" placeholder="반려견의 문제행동이 궁금해요" class="mb-3 ml-2" style="width: 95%;">
    <template #icon>
      <img src="@/lib/assets/svg/ic_search.svg" alt="검색 버튼" class="pl3" style="width: max-content; height: max-content;">
    </template>
    </Input>
    <MainBanner :userId="userProfile.userId"/>
    <MainContent :buttons="categoryName" :cards="filteredPosts.slice(0, 5)" @filterPosts="filterPostsByCode">
      <template #title>최신 진단 사례</template>
    </MainContent>
    <NavBar />
  </div>
</template>

<script setup>
import NavBar from "@/components/expanded/NavBar.vue";
import MainHeader from "@/components/expanded/MainHeader.vue";
import Button from "@/components/core/Button/Button.vue";
import Input from "@/components/core/Input/Input.vue";
import MainBanner from "@/components/expanded/MainBanner.vue";
import MainContent from "@/components/expanded/MainContent.vue";
import store from "@/store/index.js";
import { computed, ref, onMounted } from 'vue';
import { fetchUserById, fetchProblemPosts, fetchProblemCode, fetchAnswerPosts } from '@/apis/fakeApi.js';

import defaultImage from '@/lib/assets/svg/ic_user.svg';

const tokenGetter = computed(() => store.getters['token/getToken'] || { access_token: '' });

const userProfile = ref({
  userId: null,
  name: null,
  image: null,
  role: null
});

const categoryName = ref([]);
const problemCodeMap = ref({});
const posts = ref([]);
const filteredPosts = ref([]);

// 아이디가 1인 유저를 호출하는 경우 예시, 나중에 삭제할 것
onMounted(async () => {
  try {

    const ProblemCodes = await fetchProblemCode();
    try {
      categoryName.value = ['전체', ...ProblemCodes.map(category => category.name)];
      ProblemCodes.forEach(category => {
        problemCodeMap.value[category.name] = category.code;
      });
    } catch (error) {
      console.error("데이터를 불러오는 중 오류가 발생했습니다.", error);
    }
    const answerResponse = await fetchAnswerPosts();
    const problemResponse = await fetchProblemPosts();

    const answerCountMap = answerResponse.reduce((map, answer) => {
      if (!map[answer.problemPostId]) {
        map[answer.problemPostId] = 0;
      }
      map[answer.problemPostId]++;
      return map;
    }, {});

    posts.value = problemResponse.map(post => ({
      userId: post.userId,
      problemCode: post.problem_code,
      tags: post.tag,
      title: post.title,
      body: post.content.substring(0, 58) + '...',
      commentsCount: answerCountMap[post.id] || 0,
      recommendsCount: post.recommend,
      createdAt: post.createdAt
    }));
    filteredPosts.value = posts.value;
  } catch (error) {
    console.error("데이터를 불러오는데 실패했습니다.", error);
  }
});

// 필터 --> 데이터가 없을 경우 화면 수정 필요함
function filterPostsByCode(categoryName) {
  if (categoryName === '전체') {
    filteredPosts.value = posts.value;
  } else {
    const code = problemCodeMap.value[categoryName];
    filteredPosts.value = posts.value.filter(post => post.problemCode === code);
  }
}
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
</style>
