<template>
  <div class="nav-bar">
    <ul class="flex w-full flex-justify-start p2">
      <li class="flex flex-justify-center w25%">
        <RouterLink to="/">
          <img src="@/lib/assets/svg/ic_nav_home.svg" alt="홈 버튼">
        </RouterLink>
      </li>
      <li class="flex flex-justify-center w25%">
        <RouterLink to="#">
          <img src="@/lib/assets/svg/ic_nav_ex_diag.svg" alt="진단사례">
        </RouterLink>
      </li>
      <li class="flex flex-justify-center w25%">
        <RouterLink to="#">
          <img src="@/lib/assets/svg/ic_nav_my_diag.svg" alt="내진단">
        </RouterLink>
      </li>
      <li class="flex flex-justify-center w25%">
        <RouterLink to="#">
          <img src="@/lib/assets/svg/ic_nav_my.svg" alt="마이페이지">
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
<script setup>
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
