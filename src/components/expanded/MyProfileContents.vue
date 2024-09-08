<template>
  <div>
    <div class="slider-container">
      <div class="pl-5 pt-5 s-title-00 secondary-color">
        <p v-if="dogs.length > 0">
          <span class="black-color s-heading-01">{{ userName }}</span> 견주님 <br> 안녕하세요
        </p>
        <p v-else>
          등록된 내용이 없어요 <br> 프로필을 작성해 주세요
        </p>
      </div>
      <div class="cards-container" ref="cardsContainer">
        <div
          class="p5 position-relative card"
          v-for="dog in dogs.length > 0 ? dogs : emptyDogList"
          :key="dog.id || 'empty-card'"
        >
          <MyProfileCard :dog="dog" :isEmpty="dogs.length === 0" />
        </div>
      </div>

      <div v-if="dogs.length > 0" class="pagination mb-2">
        <span
          v-for="(dog, index) in dogs"
          :key="index"
          class="dot"
          :class="{ active: index === currentIndex }"
          @click="scrollToCard(index)"
        ></span>
      </div>
    </div>

    <hr class="secondary-hr">
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';
import MyProfileCard from '@/components/expanded/MyProfileCard.vue';
import { fetchDogsByUserId, fetchUserById } from '@/apis/fakeApi.js';
import defaultImage from '@/lib/assets/svg/ic_dog.svg';

const route = useRoute();
const userName = ref('');
const dogs = ref([]);
const currentIndex = ref(0);
const cardsContainer = ref(null);

// 비어 있는 카드 기본값
const emptyDogList = [
  {
    id: null,
    name: '',
    breed: '',
    gender: null,
    age: null,
    weight: null,
    city: '',
    town: '',
    image: defaultImage,
  },
];

onMounted(async () => {
  const userId = parseInt(route.query.userId);
  if (userId) {
    try {
      const fetchedUser = await fetchUserById(userId);
      userName.value = fetchedUser.name;
      dogs.value = await fetchDogsByUserId(userId);
    } catch (error) {
      console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
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
  overflow: visible;
  width: 100%;
}

.cards-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scrollbar-width: none; /* Hide scrollbar for Firefox */
  -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
  /* padding-top: 50px; */
}

.cards-container::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
}

.card {
  min-width: 100%;
  scroll-snap-align: start;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
}

/* Pagination Dots */
.pagination {
  text-align: center;
  margin-top: 10px;
}

.dot {
  height: 8px;
  width: 8px;
  margin: 0 5px;
  background-color: var(--s-palette-gray-300);
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.dot.active {
  background-color: var(--s-semantic-primary-background-normal-default);
}

.outline-card {
  border: 2px dashed var(--s-semantic-primary-background-light-default) !important;
}

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
  border: 0;
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
  z-index: 100;
}

.dog-image {
  width: 120px;
  height: 120px;
  border-radius: 100px;
  object-fit: cover;
}
</style>
