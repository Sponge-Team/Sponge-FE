<template>
  <div>
    <div class="flex position-relative pt-4">
      <Button color="transparent" @click="goBack">
        <template #icon>
          <img src="@/lib/assets/svg/ic_close_lg.svg" alt="닫기 버튼'">
        </template>
      </Button>
    </div>
    <div class="p5">
      <Button color="primary">1</Button>
      <Button class="secondary ml-3">2</Button>
      <Button class="secondary ml-3">3</Button>
    </div>
    <div class="s-heading-00 p5">
      문제행동 교정이 필요한<br> 강아지를 선택해주세요
    </div>
    <div class="p3">
      <template v-if="dogs.length > 0">
        <Card v-for="dog in dogs" :key="dog.id" color="secondary" class="mb-3">
          <template #body-content>
            <div class="flex flex-items-center flex-justify-between">
              <div class="flex flex-justify-center flex-items-center position-relative"
                style="width: 82px; height: 82px; border-radius: 100px; background-color: var(--s-palette-main-lighten-white);">
                <img :src="dog.image || defaultImage" alt="강아지 이미지">
              </div>
              <div class="p2">
                <p class="s-title-01 mb-3">{{ dog.name }} <span class="s-body-01 mb-3 text-color">{{ dog.breed }}</span></p>
                <span class="s-body-01 text-color">{{ dog.gender === 1 ? '수컷' : dog.gender === 3 ? '암컷' : '중성화' }}</span>
                <span class="s-body-01 text-color">{{ dog.age }}살</span>
                <p class="s-body-01 text-color">{{ dog.city }} {{ dog.town }}</p>
              </div>
              <Checkbox />
            </div>
          </template>
        </Card>
      </template>
      <template v-else>
        <Card class="outline-card" color="secondary" type="outlined">
          <template #body-content>
            <div class="center-content">
              <Inputfile />
              <p class="s-title-02 mb-3">강아지 추가하기</p>
              <p class="mb-3">등록된 강아지가 없어요.</p>
            </div>
          </template>
        </Card>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { fetchDogsByUserId } from '@/apis/fakeApi.js';

import Button from "@/components/core/Button/Button.vue";
import Card from "@/components/core/Card/Card.vue";
import Inputfile from "@/components/core/Input/Inputfile.vue";
import Checkbox from "@/components/core/Checkbox/Checkbox.vue";
import defaultImage from '@/lib/assets/svg/ic_user.svg';

const router = useRouter();
const route = useRoute();
const dogs = ref([]);

onMounted(async () => {
  const userId = parseInt(route.query.userId);
  if (userId) {
    try {
      dogs.value = await fetchDogsByUserId(userId);
    } catch (error) {
      console.error("데이터를 불러오는 중 오류가 발생했습니다.", error);
    }
  }
});

function goBack() {
  router.back();
}
</script>

<style scoped>
.secondary {
  background-color: var(--s-semantic-desc-font-normal-default);
  color: var(--s-palette-main-lighten-100);
}

.center-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.outline-card {
  border: 3px dashed var(--s-semantic-primary-background-light-default) !important;
}

.text-color {
  color: var(--s-semantic-primary-font-info-default);
}
</style>
