<template>
  <div>
    <div class="pl-5 pt-5 s-title-01">
      <p>활동내역</p>
    </div>
    <div class="p5 flex flex-col items-center justify-center text-center">
      <p class="secondary-color pb-2">문제행동 진단사례를 보고<br>내 반려견에 딱 맞는 상담을 받아보세요</p>
      <RouterLink to="/case">
        <Button color="outline-primary">
          <template #default>
            <p class="s-title-03">진단사례 찾아보기</p>
          </template>
        </Button>
      </RouterLink>
    </div>
    <div class="cards-container flex flex-wrap gap-4 p2">
      <MainContentCard :cards="cards" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Button from "@/components/core/Button/Button.vue";
import { fetchProblemPosts } from '@/apis/fakeApi.js';
import MainContentCard from '@/components/expanded/MainContentCard.vue';

const posts = ref([]);
onMounted(async () => {
  try {
    const problemResponse = await fetchProblemPosts();
    posts.value = problemResponse.map(post => ({
      userId: post.userId,
      problemCode: post.problem_code,
      tags: post.tag,
      title: post.title,
      body: post.content.substring(0, 58) + '...',
      // commentsCount: answerCountMap[post.id] || 0,
      recommendsCount: post.recommend,
      createdAt: post.createdAt
    }));
    console.log(problemResponse)
  } catch (error) {
    console.error("데이터를 불러오는데 실패했습니다.", error);
  }
});
</script>

<style scoped>
.secondary-color {
  color: var(--s-semantic-secondary-font-normal-default);
}

.cards-container {
  background-color: var(--s-semantic-primary-background-light-default);
  width: 100%;
  min-height: 180px;
  padding-bottom: 80px;
}
</style>