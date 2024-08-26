<template>
  <div>
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
        <Card 
          v-for="dog in dogs" 
          :key="dog.id" 
          color="secondary"
          class="mb-3"
          :class="{'active-card': checkedDogsMap[dog.id]}"
        >
          <template #body-content>
            <div class="dog-card-content">
              <div class="dog-image-container">
                <img :src="dog.image || defaultImage" alt="강아지 이미지">
              </div>
              <div class="dog-info-container">
                <p class="s-title-01">{{ dog.name }} <span class="s-body-01 mb-3 text-color">{{ dog.breed }}</span></p>
                <span class="mr-2 s-body-01 text-color">{{ dog.gender === 1 ? '수컷' : dog.gender === 3 ? '암컷' : '중성화' }}</span>
                <span class="mr-2 s-body-01 text-color">•</span>
                <span class="s-body-01 text-color">{{ formatAge(dog.age) }}</span>
                <p class="s-body-01 text-color">{{ dog.city }} {{ dog.town }}</p>
              </div>
              <Checkbox class="w10%" v-model="checkedDogsMap[dog.id]" />
            </div>
          </template>
        </Card>
        <RouterLink to="#">
          <div class="text-color flex flex-justify-end mr-2 underline">수정하기</div>
        </RouterLink>
      </template>
      <template v-else>
        <Card class="outline-card" color="secondary" type="outlined">
          <template #body-content>
            <div class="center-content p2">
              <RouterLink to="#">
                <div class="add-dog-icon">
                  <img src="@/lib/assets/svg/ic_plus.svg" alt="강아지 추가하기">
                </div>
              </RouterLink>
              <p class="s-title-02 mb-3">강아지 추가하기</p>
              <p class="mb-3">등록된 강아지가 없어요.</p>
            </div>
          </template>
        </Card>
      </template>
    </div>
    <div class="p3 button-fixed">
      <Button
        class="w-full"
        :color="isNextButtonEnabled ? 'primary' : 'tertiary'"
        :disabled="!isNextButtonEnabled"
        @click="$emit('next')"
      >
        다음
      </Button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { fetchDogsByUserId } from '@/apis/fakeApi.js';
import Card from "@/components/core/Card/Card.vue";
import Checkbox from "@/components/core/Checkbox/Checkbox.vue";
import Button from "@/components/core/Button/Button.vue";
import defaultImage from '@/lib/assets/svg/ic_dog.svg';

const route = useRoute();
const dogs = ref([]);
const checkedDogsMap = ref({});
const isNextButtonEnabled = ref(false);

onMounted(async () => {
  const userId = parseInt(route.query.userId);
  if (userId) {
    try {
      dogs.value = await fetchDogsByUserId(userId);
      dogs.value.forEach(dog => {
        checkedDogsMap.value[dog.id] = false;
      });
    } catch (error) {
      console.error("데이터를 불러오는 중 오류가 발생했습니다.", error);
    }
  }
});

watch(checkedDogsMap, (newCheckedDogsMap) => {
  isNextButtonEnabled.value = Object.values(newCheckedDogsMap).some(status => status);
}, { deep: true });

const formatAge = (ageInMonths) => {
  const years = Math.floor(ageInMonths / 12);
  const months = ageInMonths % 12;
  return years > 0 ? `${years}년 ${months}개월` : `${months}개월`;
};
</script>

<style scoped>
.button-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

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

.active-card {
  background-color: var(--s-palette-main-lighten-300) !important; 
  position: relative;
}

.dog-card-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dog-image-container {
  width: 82px;
  height: 82px;
  border-radius: 100px;
  background-color: var(--s-palette-main-lighten-white);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dog-info-container {
  padding: 0.5rem;
  width: 50%;
}

.add-dog-icon {
  width: 20px;
  height: 20px;
  border-radius: 100px;
  background-color: var(--s-semantic-desc-font-normal-default);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
}
</style>
