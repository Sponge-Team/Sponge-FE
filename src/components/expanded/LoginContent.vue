<template>
  <div class="s-heading-00 p5">
    견주와 훈련사를 연결해<br> 문제행동 교정을 돕는 서비스
    <img src="@/lib/assets/svg/mongmi_logo.svg" alt="로고 이미지">
  </div>
  <div class="p1 mt-5">
    <Card color="secondary">
      <template #body-content>
        <div class="flex flex-items-center flex-justify-between">
          <div class="p2">
            <p class="s-title-01 mb-3">견주로 로그인하기</p>
            <p class="s-body-01" style="color: var(--s-semantic-primary-font-light-default);">문제행동 작성하고<br>훈련사에게 상담받기
            </p>
          </div>
          <div class="flex flex-justify-center flex-items-center position-relative"
            style="width: 82px; height: 82px; border-radius: 100px; background-color: var(--s-palette-main-lighten-white);">
            <img src="@/lib/assets/svg/ic_write.svg" alt="유저 기본 이미지">
          </div>
        </div>
      </template>
    </Card>
    <Card color="secondary" class="mt-5">
      <template #body-content>
        <div class="flex flex-items-center flex-justify-between">
          <div class="p2">
            <p class="s-title-01 mb-3">훈련사로 로그인하기</p>
            <p class="s-body-01" style="color: var(--s-semantic-primary-font-light-default);">
              문제행동 진단하고<br>더 많은 사람에게 홍보하기
            </p>
          </div>
          <div class="flex flex-justify-center flex-items-center position-relative"
            style="width: 82px; height: 82px; border-radius: 100px; background-color: var(--s-palette-main-lighten-white);">
            <img src="@/lib/assets/svg/ic_write.svg" alt="유저 기본 이미지">
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import Card from "@/components/core/Card/Card.vue";
</script>
