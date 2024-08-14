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
            <Button style="width: 22px; min-width: 22px; height: 22px; padding: 0; border-radius: 100px;">
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
    <div class="position-fixed flex flex-items-end" style="width: 100%; height: 100%; left: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.5);">
      <div style="background-color: #fff; width: 100%; border-top-left-radius: 12px; border-top-right-radius: 12px;" class="position-relative pl-5 pr-5 pt-5">
        <div class="position-absolute mt-5" style="content: ''; width: 68px; height: 4px; background-color: #C3C3C3; top: 0; left: 50%; transform: translateX(-50%); border-radius: 100px;"></div>
        <ProfileItem title="이력 타이틀">
          <template #body-content>
            <div class="flex">
              <Input type="text" shape="square" color="secondary" placeholder="예 ) 반려견 컴퍼니 훈련사 근무"/>
            </div>
          </template>
        </ProfileItem>
        <ProfileItem title="기간">
          <template #body-content>
            <Checkbox text="현재 진행 중"/>
            <div class="flex flex-items-center">
              <Input type="text" shape="square" color="secondary" placeholder="이력을 추가해주세요"/>
              <Button style="width: 22px; min-width: 22px; height: 22px; padding: 0; border-radius: 100px;">
                <template #icon>
                  <img src="@/lib/assets/svg/ic_plus.svg" alt="이력 추가하기 버튼">
                </template>
              </Button>
            </div>
          </template>
        </ProfileItem>
        <ProfileItem title="상세설명" :required="false">
          <template #body-content>
            <div class="flex flex-items-center">
              <InputTextarea type="text" shape="square" color="secondary" placeholder="해당 경력에 대한 상세한 설명을 적어주세요."/>
            </div>
          </template>
        </ProfileItem>
      </div>
    </div>
  </div>
</template>
<script setup>

import ProfileItem from "@/components/expanded/ProfileItem.vue";
import Button from "@/components/core/Button/Button.vue";
import Input from "@/components/core/Input/Input.vue";
import InputRange from "@/components/core/Input/InputRange.vue";
import InputTextarea from "@/components/core/Input/InputTextarea.vue";
import Checkbox from "@/components/core/Checkbox/Checkbox.vue";

const props = defineProps({})
</script>
