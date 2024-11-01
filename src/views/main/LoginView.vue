<template>
  <div class="p4">
    <div class="flex position-relative pt-2 pb-2">
      <Button color="transparent" @click="goBack">
        <img src="@/lib/assets/svg/ic_arrow_right_lg.svg" alt="이전 페이지로 가기 버튼">
      </Button>
    </div>
    <div v-if="step === 0" class="s-heading-00 p5">
      견주와 훈련사를 연결해<br> 문제행동 교정을 돕는 서비스
      <img src="@/lib/assets/svg/mongmi_logo.svg" alt="로고 이미지">
    </div>
    <div v-if="step === 0" class="p1 mt-5">
      <Card color="secondary" @click="fnChangeStep(1, 'OWNER')">
        <template #body-content>
          <div class="flex flex-items-center flex-justify-between">
            <div class="p2">
              <p class="s-title-01 mb-3">견주로 로그인하기</p>
              <p class="s-body-01" style="color: var(--s-semantic-primary-font-light-default);">문제행동 작성하고<br>훈련사에게 상담받기</p>
            </div>
            <div class="flex flex-justify-center flex-items-center position-relative">
              <img src="@/lib/assets/svg/login_owner.svg" alt="유저 기본 이미지">
            </div>
          </div>
        </template>
      </Card>
      <Card @click="fnChangeStep(1, 'TRAINER')" color="secondary" class="mt-5">
        <template #body-content>
          <div class="flex flex-items-center flex-justify-between">
            <div class="p2">
              <p class="s-title-01 mb-3">훈련사로 로그인하기</p>
              <p class="s-body-01" style="color: var(--s-semantic-primary-font-light-default);">
                문제행동 진단하고<br>더 많은 사람에게 홍보하기
              </p>
            </div>
            <div class="flex flex-justify-center flex-items-center position-relative">
              <img src="@/lib/assets/svg/login_trainer.svg" alt="훈련사 기본 이미지">
            </div>
          </div>
        </template>
      </Card>
    </div>
    <div v-if="step === 1">
      <LoginInput :userType="userType"/>
    </div>
  </div>
</template>

<script setup>
import Card from "@/components/core/Card/Card.vue";
import {computed, ref, onMounted, nextTick} from 'vue';
import LoginInput from "@/components/expanded/LoginInput.vue";
import store from "@/store/index.js";
import Button from "@/components/core/Button/Button.vue";
import { useRouter } from 'vue-router';


let step = ref(0)
let userType = ref(null)

const router = useRouter();

const goBack = () => {
  if(step.value === 0){
    router.back();
  }else if(step.value === 1) {
    step.value = 0
  }
}

const fnChangeStep = (num, type) => {
  step.value = num
  userType.value = type
}
</script>
