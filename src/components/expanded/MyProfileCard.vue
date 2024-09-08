<template>
  <div>
    <Card color="secondary" type="outlined">
      <template #body-content>
        <div v-if="isEmpty" class="p2 flex flex-col items-center justify-center text-center">
          <RouterLink to="/myprofile/create">
            <div class="icon">
              <img src="@/lib/assets/svg/ic_plus.svg" alt="프로필 추가하기" />
            </div>
          </RouterLink>
          <p class="secondary-color">나의 반려견을 소개해주세요!</p>
          <p class="s-title-02 mb-3 primary-color">프로필 작성하기</p>
        </div>
        <div v-else>
          <p class="s-body-02 secondary-color">반려견 이름</p>
          <p class="s-title-01 primary-color">{{ dog.name }}</p>
          <p class="s-body-02 secondary-color">견종 <span class="s-title-01 black-color ml-10">{{ dog.breed }}</span></p>
          <p class="s-body-02 secondary-color">기본정보
            <span class="mr-2 s-title-01 black-color ml-4">
              {{ genderText }} ·
              {{ formatAge(dog.age) }} ·
              {{ dog.weight }}kg
            </span>
          </p>
          <p class="s-body-02 secondary-color">사는곳 <span class="s-title-01 black-color ml-7">{{ dog.city }} {{ dog.town }}</span></p>
        </div>
      </template>
    </Card>
    <!-- <div v-if="!isEmpty" class="img-style">
      <img :src="dog.image || defaultImage" alt="강아지 이미지" class="dog-image" />
    </div> -->
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Card from '@/components/core/Card/Card.vue';
import formatAge from '@/composables/fotmatAge.js';
import defaultImage from '@/lib/assets/svg/ic_dog.svg';

const props = defineProps({
  dog: Object,
  isEmpty: {
    type: Boolean,
    default: false,
  },
});

const genderText = computed(() => {
  return props.dog.gender === 1 ? '수컷' : props.dog.gender === 3 ? '암컷' : '중성화';
});
</script>
<style scoped>
.primary-color {
  color: var(--s-semantic-primary-background-normal-default);
}

.secondary-color {
  color: var(--s-semantic-secondary-font-normal-default);
}

.black-color {
  color: var(--s-palette-gray-700);
}

.img-style {
  position: absolute;
  top: -50px;
  right: 28%;
  transform: translateX(50%);
  width: 120px;
  height: 120px;
  background-color: var(--s-palette-gray-200);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 10;
}

.dog-image {
  width: 120px;
  height: 120px;
  border-radius: 100px;
  object-fit: cover;
}
</style>