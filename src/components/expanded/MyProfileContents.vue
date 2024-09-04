<template>
  <div>
    <template v-if="dogs.length > 0">
      <div class="pl-5 pt-5 s-title-01 secondary-color">
        <p><span class="black-color">{{ userName }}</span> 견주님 <br> 안녕하세요</p>
      </div>
      <div class="p5 position-relative" v-for="dog in dogs" :key="dog.id">
        <Card
          color="secondary" 
          type="outlined"
        >
          <template #body-content>
            <p class="s-body-02 secondary-color">반려견 이름</p>
            <p class="s-title-01 primary-color">{{ dog.name }}</p>
            <p class="s-body-02 secondary-color">견종 <span class="s-title-01 black-color">{{ dog.breed }}</span></p>
            <p class="s-body-02 secondary-color">기본정보
              <span class="mr-2 s-title-01 black-color">{{ dog.gender === 1 ? '수컷' : dog.gender === 3 ? '암컷' : '중성화' }}</span>
              <span class="mr-2 s-title-01 black-color">•</span>
              <span class="s-title-01 black-color">{{ formatAge(dog.age) }}</span>
            </p>
            <p class="s-body-02 secondary-color">사는곳 <span class="s-title-01 black-color">{{ dog.city }} {{ dog.town }}</span></p>
          </template>
        </Card>
        <div class="img-style">
          <img src="@/lib/assets/svg/ic_dog_g.svg" alt="반려견 이미지" class="profile-image">
        </div>
      </div>
    </template>
    <template v-else>
      <div class="pl-5 pt-5 s-title-01 secondary-color">
        <p>등록된 내용이 없어요 <br> 프로필을 작성해 주세요</p>
      </div>
      <Card class="outline-card" color="secondary" type="outlined">
        <template #body-content>
          <div class="p2 flex flex-col items-center justify-center text-center">
            <RouterLink to="/myprofile/create">
              <div class="icon">
                <img src="@/lib/assets/svg/ic_plus.svg" alt="프로필 추가하기">
              </div>
            </RouterLink>
            <p class="secondary-color">나의 반려견을 소개해주세요!</p>
            <p class="s-title-02 mb-3 primary-color">프로필 작성하기</p>
          </div>
        </template>
      </Card>
      <div class="img-style">
        <img src="@/lib/assets/svg/ic_dog_g.svg" alt="반려견 이미지" class="profile-image">
      </div>
    </template>
    <hr class="secondary-hr">
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import Card from '@/components/core/Card/Card.vue';
import { fetchDogsByUserId, fetchUserById } from '@/apis/fakeApi.js';

const route = useRoute();
const userName = ref('');
const dogs = ref([]);
onMounted(async () => {
  const userId = parseInt(route.query.userId);
  if (userId) {
    try {
      const fetchedUser = await fetchUserById(userId);
      userName.value = fetchedUser.name;
      dogs.value = await fetchDogsByUserId(userId);
    } catch (error) {
      console.error("데이터를 불러오는 중 오류가 발생했습니다.", error);
    }
  }
});

const formatAge = (ageInMonths) => {
  const years = Math.floor(ageInMonths / 12);
  const months = ageInMonths % 12;
  return years > 0 ? `${years}년 ${months}개월` : `${months}개월`;
};
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

.outline-card {
  border: 2px dashed var(--s-semantic-primary-background-light-default) !important;
  position: relative;
  padding-top: 20px;
}

.icon {
  width: 20px;
  height: 20px;
  border-radius: 100px;
  background-color: var(--s-semantic-primary-background-normal-default);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
}

.img-style {
  position: absolute;
  top: -60px;
  right: 28%;
  transform: translateX(50%);
  width: 120px;
  height: 120px;
  background-color: var(--s-palette-gray-200);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.profile-image {
  position: relative;
  bottom: -5px;
}

.secondary-hr {
  border: 0;
  height: 8px;
  background: var(--s-palette-gray-300);
}
</style>
