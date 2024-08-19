<template>
  <div>
    <div class="flex position-relative pt-4">
      <Button color="transparent" @click="goBack">
        <template #icon>
          <img src="@/lib/assets/svg/ic_close_lg.svg" alt="닫기 버튼">
        </template>
      </Button>
    </div>
    <BehaviorCreateSelectDog v-if="currentPage === 1" @dog-selected="handleDogSelected" @next="goToPage(2)" />
    <BehaviorCreateSelectCategory v-if="currentPage === 2" @next="goToPage(3)" @back="goToPage(1)" />
    <BehaviorCreateContents v-if="currentPage === 3" @back="goToPage(2)" />

    <div class="p3">
      <div v-if="currentPage === 1">
        <Button
          class="w-full"
          :color="isNextButtonEnabled ? 'primary' : 'tertiary'"
          :disabled="!isNextButtonEnabled"
          @click="goToPage(currentPage + 1)"
        >
          다음
        </Button>
      </div>
      <div v-else class="flex justify-center">
        <Button
          class="w45% mr-2"
          color="quaternary"
          @click="goToPage(currentPage - 1)"
        >
          뒤로
        </Button>
        <Button
          class="w45%"
          :color="isNextButtonEnabled ? 'primary' : 'tertiary'"
          :disabled="!isNextButtonEnabled"
          @click="goToPage(currentPage + 1)"
        >
          다음
        </Button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from "@/components/core/Button/Button.vue";
import BehaviorCreateSelectDog from '@/components/expanded/BehaviorCreateSelectDog.vue';
import BehaviorCreateSelectCategory from '@/components/expanded/BehaviorCreateSelectCategory.vue';
import BehaviorCreateContents from '@/components/expanded/BehaviorCreateContents.vue';

const router = useRouter();
const currentPage = ref(1);
const checkedDogsMap = ref({});
const isNextButtonEnabled = ref(false);

function handleDogSelected({ dogId, isChecked }) {
  checkedDogsMap.value[dogId] = isChecked;
  isNextButtonEnabled.value = Object.values(checkedDogsMap.value).some(status => status);
}
function goBack() {
  router.back();
}

function goToPage(pageNumber) {
  currentPage.value = pageNumber;
}
</script>