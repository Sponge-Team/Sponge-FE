<template>
  <div class="flex flex-col flex-justify-between" style="height: calc(100% - 43px);">
    <div style="height: 100%;">
      <ProfileDesc>
        <template #default>
          <p>나를 소개할 수 있는</p>
          <p>간단한 자기소개를 작성해보세요.</p>
        </template>
      </ProfileDesc>
      <ProfileItem title="자기소개" :required="false" style="height: calc(100% - 72px);">
        <template #body-content>
          <InputTextarea placeholder="간단한 자기소개를 입력하면 견주들이 신뢰도를 얻는데 도움이 될 수 있어요." class="mb-3" style="height: calc(100% - 43px);"/>
        </template>
      </ProfileItem>
    </div>
    <div class="flex flex-justify-between flex-items-center">
      <Button class="mr2" color="tertiary" size="l" style="width: 50%;" @click="store.dispatch('setProfileLevel', {mode: 'LIST', title: '', step: 'MAIN', percentage: 75})">
        <template #default>
          <p style="color: var(--s-semantic-primary-font-info-default)">뒤로</p>
        </template>
      </Button>
      <Button size="l" style="width: 50%;" @click="store.dispatch('setProfileLevel', {mode: '', title: '', step: 'FINISH', percentage: 75})">
        <template #default>
          완료
        </template>
      </Button>
    </div>
  </div>
</template>
<script setup>

import ProfileDesc from "@/components/expanded/ProfileDesc.vue";
import Input from "@/components/core/Input/Input.vue";
import ProfileItem from "@/components/expanded/ProfileItem.vue";
import InputTextarea from "@/components/core/Input/InputTextarea.vue";
import Button from "@/components/core/Button/Button.vue";
import store from "@/store/index.js";
</script>
