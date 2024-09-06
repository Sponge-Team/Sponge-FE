<template>
  <div>
    <template v-if="dogs.length > 0">
      <div class="pl-5 pt-5 s-title-01 secondary-color">
        <p><span class="black-color">{{ userName }}</span> 견주님 <br> 안녕하세요</p>
      </div>
      <div class="slider-container">
        <div class="cards-container" ref="cardsContainer">
          <div
            class="p5 position-relative card"
            v-for="dog in dogs"
            :key="dog.id"
          >
            <MyProfileCard :dog="dog" />
          </div>
        </div>
        <div class="pagination">
          <span
            v-for="(dog, index) in dogs"
            :key="index"
            class="dot"
            :class="{ active: index === currentIndex }"
            @click="scrollToCard(index)"
          ></span>
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
import { ref, onMounted, onUnmounted } from 'vue';
import Card from '@/components/core/Card/Card.vue';
import MyProfileCard from '@/components/expanded/MyProfileCard.vue';
import { fetchDogsByUserId, fetchUserById } from '@/apis/fakeApi.js';

const route = useRoute();
const userName = ref('');
const dogs = ref([]);
const currentIndex = ref(0);
const cardsContainer = ref(null);

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

  if (cardsContainer.value) {
    cardsContainer.value.addEventListener('scroll', onScroll);
  }
});

onUnmounted(() => {
  if (cardsContainer.value) {
    cardsContainer.value.removeEventListener('scroll', onScroll);
  }
});

const scrollToCard = (index) => {
  currentIndex.value = index;
  const cardWidth = cardsContainer.value.offsetWidth;
  cardsContainer.value.scrollTo({
    left: cardWidth * index,
    behavior: 'smooth',
  });
};

const onScroll = () => {
  const scrollLeft = cardsContainer.value.scrollLeft;
  const cardWidth = cardsContainer.value.offsetWidth;
  currentIndex.value = Math.round(scrollLeft / cardWidth);
};
</script>

<style scoped>
/* Horizontal Scroll Container */
.slider-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.cards-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scrollbar-width: none; /* Hide scrollbar for Firefox */
  -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
}

.cards-container::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
}

.card {
  min-width: 100%;
  scroll-snap-align: start;
  padding: 10px;
  box-sizing: border-box;
}

/* Pagination Dots */
.pagination {
  text-align: center;
  margin-top: 10px;
}

.dot {
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: var(--s-palette-gray-300);
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.dot.active {
  background-color: var(--s-semantic-primary-background-normal-default);
}

/* Card Styling remains unchanged */
.primary-color {
  color: var(--s-semantic-primary-background-normal-default);
}

.secondary-color {
  color: var(--s-semantic-secondary-font-normal-default);
}

.black-color {
  color: var(--s-palette-gray-700);
}

.secondary-hr {
  
  height: 8px;
  background: var(--s-palette-gray-300);
}
.img-style {
  position: absolute;
  top: -40px;
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
</style>
