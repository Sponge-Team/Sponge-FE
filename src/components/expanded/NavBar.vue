<template>
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
</template>
<script setup>
</script>
