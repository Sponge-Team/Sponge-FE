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
            <div class="flex items-center justify-between">
              <div class="dog-image-container">
                <img :src="dog.image || defaultImage" alt="강아지 이미지" class="dog-image">
              </div>
              <div class="p-2 w-1/2">
                <p class="s-title-01">{{ dog.name }} <span class="s-body-01 mb-3 ml-1 text-color">{{ dog.breed }}</span></p>
                <span class="s-body-02 text-color" style="white-space: nowrap;">
                  {{ dog.gender === 2 ? '수컷' : dog.gender === 3 ? '암컷' : '중성화' }} · 
                  {{ formatAge(dog.age) }} · 
                  {{ dog.weight }}kg
                </span>
                <p class="s-body-02 text-color">{{ dog.city }} {{ dog.town }}</p>
              </div>
              <Checkbox class="w10%" v-model="checkedDogsMap[dog.id]" />
            </div>
          </template>
        </Card>
        <RouterLink :to="`/myprofile?userId=${userId}`">
          <div class="text-color flex flex-justify-end mr-2 underline">수정하기</div>
        </RouterLink>
      </template>
      <template v-else>
        <Card class="outline-card" color="secondary" type="outlined">
          <template #body-content>
            <div class="p2 flex flex-col items-center justify-center text-center">
              <RouterLink :to="`/myprofile?userId=${userId}`">
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
import formatAge from '@/composables/fotmatAge.js';
import defaultImage from '@/lib/assets/svg/ic_dog.svg';

const route = useRoute();
const dogs = ref([]);
const checkedDogsMap = ref({});
const isNextButtonEnabled = ref(false);

const userId = parseInt(route.query.userId);
onMounted(async () => {
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

.dog-image-container {
  width: 82px;
  height: 82px;
  border-radius: 100px;
  background-color: var(--s-palette-main-lighten-white);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dog-image {
  width: 80px;
  height: 80px;
  border-radius: 100px;
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