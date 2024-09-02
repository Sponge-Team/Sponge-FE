<template>
  <div>
    <div class="pl-5 pt-5 s-title-01 secondary-color">
      <p>등록된 내용이 없어요 <br> 프로필을 작성해 주세요</p>
    </div>
    <div class="p5 position-relative">
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
    </div>
    <hr class="secondary-hr">
  </div>
</template>

<script setup>
import Card from '@/components/core/Card/Card.vue';
</script>

<style scoped>
.primary-color {
  color: var(--s-semantic-primary-background-normal-default);
}

.secondary-color {
  color: var(--s-semantic-secondary-font-normal-default);
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
