<template>
  <div class="flex flex-col flex-justify-between">
    <div>
      <ProfileItem title="연차">
        <template #body-content>
          <div class="flex">
            <InputRange/>
          </div>
        </template>
      </ProfileItem>
      <ProfileItem title="이력">
        <template #body-content>
          <div class="flex flex-items-center">
            <Input type="text" shape="square" color="secondary" placeholder="이력을 추가해주세요"/>
            <Button>
              <template #icon>
                <img src="@/lib/assets/svg/ic_plus.svg" alt="이력 추가하기 버튼">
              </template>
            </Button>
          </div>
        </template>
      </ProfileItem>
    </div>
    <Button size="l" style="width: 100%;">
      <template #default>
        <p class="s-heading-02">저장</p>
      </template>
    </Button>
  </div>
</template>
<script setup>

import ProfileItem from "@/components/expanded/ProfileItem.vue";
import Button from "@/components/core/Button/Button.vue";
import Input from "@/components/core/Input/Input.vue";
import InputRange from "@/components/core/Input/InputRange.vue";

const props = defineProps({})
</script>
