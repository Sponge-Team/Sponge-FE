<template>
  <div class="nav-bar">
    <ul class="flex w-full flex-justify-start p2">
      <li class="flex flex-justify-center w25%">
        <RouterLink to="/">
          <img :src="homeIcon" alt="홈 버튼">
        </RouterLink>
      </li>
      <li class="flex flex-justify-center w25%">
        <RouterLink to="/case">
          <img :src="caseIcon" alt="진단사례">
        </RouterLink>
      </li>
      <li class="flex flex-justify-center w25%">
        <RouterLink to="#">
          <img src="@/lib/assets/svg/ic_nav_my_diag.svg" alt="내진단">
        </RouterLink>
      </li>
      <li class="flex flex-justify-center w25%">
        <RouterLink to="/myprofile">
          <img :src="myIcon" alt="마이페이지">
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import homeIconInactive from '@/lib/assets/svg/ic_nav_home_g.svg';
import homeIconActive from '@/lib/assets/svg/ic_nav_home.svg';
import caseIconActive from '@/lib/assets/svg/ic_nav_ex_diag_y.svg';
import caseIconInactive from '@/lib/assets/svg/ic_nav_ex_diag.svg';
import myIconActive from '@/lib/assets/svg/ic_nav_my_y.svg';
import myIconInactive from '@/lib/assets/svg/ic_nav_my.svg';

const route = useRoute();

const homeIcon = computed(() => {
  return route.path === '/' ? homeIconActive : homeIconInactive;
});

const caseIcon = computed(() => {
  return route.path === '/case' ? caseIconActive : caseIconInactive;
});

const myIcon = computed(() => {
  return route.path === '/myprofile' ? myIconActive : myIconInactive;
});
</script>
<style>
.nav-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: var(--s-semantic-primary-background-white-default);
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
</style>
