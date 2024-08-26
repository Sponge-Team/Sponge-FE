<template>
  <div>
    <div class="flex position-relative pt-4">
      <Button color="transparent" @click="goBack">
        <template #icon>
          <img src="@/lib/assets/svg/ic_close_lg.svg" alt="닫기 버튼">
        </template>
      </Button>
    </div>
    <BehaviorCreateSelectDog v-if="currentPage === 1" @next="goToPage(2)" />
    <BehaviorCreateSelectCategory v-if="currentPage === 2" @next="goToPage(3)" @back="goToPage(1)" />
    <BehaviorCreateContents v-if="currentPage === 3" @back="goToPage(2)" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import Button from "@/components/core/Button/Button.vue";
import BehaviorCreateSelectDog from '@/components/expanded/BehaviorCreateSelectDog.vue';
import BehaviorCreateSelectCategory from '@/components/expanded/BehaviorCreateSelectCategory.vue';
import BehaviorCreateContents from '@/components/expanded/BehaviorCreateContents.vue';

const router = useRouter();
const currentPage = ref(1);

onMounted(() => {
  const savedPage = localStorage.getItem('currentPage');
  if (savedPage) {
    currentPage.value = parseInt(savedPage, 10);
  }
});

watch(currentPage, (newPage) => {
  localStorage.setItem('currentPage', newPage);
});

function goBack() {
  router.back();
}

function goToPage(pageNumber) {
  currentPage.value = pageNumber;
}
</script>
