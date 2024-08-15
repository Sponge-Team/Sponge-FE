<template>
  <div class="flex flex-col flex-justify-between">
    <div>
      <ProfileItem title="연차">
        <template #body-content>
          <div class="flex">
            <InputRange />
          </div>
        </template>
      </ProfileItem>
      <ProfileItem title="이력">
        <template #body-content>
          <div class="flex flex-items-center">
            <Input type="text" shape="square" color="secondary" placeholder="이력을 추가해주세요" />
            <Button
                @click="openModal"
                style="width: 22px; min-width: 22px; height: 22px; padding: 0; border-radius: 100px;"
            >
              <template #icon>
                <img src="@/lib/assets/svg/ic_plus.svg" alt="이력 추가하기 버튼" />
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
  <Dialog
      :isActive="isActive"
      :translateY="translateY"
      @close="closeModal"
      @update:translateY="val => translateY = val"
  >
    <ProfileItem title="이력 타이틀">
      <template #body-content>
        <div class="flex">
          <Input type="text" shape="square" color="secondary" placeholder="예 ) 반려견 컴퍼니 훈련사 근무" />
        </div>
      </template>
    </ProfileItem>
    <ProfileItem title="기간">
      <template #body-content>
        <Checkbox text="현재 진행 중" />
        <div class="flex flex-items-center">
          <Input type="text" shape="square" color="secondary" placeholder="이력을 추가해주세요" />
          <Button style="width: 22px; min-width: 22px; height: 22px; padding: 0; border-radius: 100px;">
            <template #icon>
              <img src="@/lib/assets/svg/ic_plus.svg" alt="이력 추가하기 버튼" />
            </template>
          </Button>
        </div>
      </template>
    </ProfileItem>
    <ProfileItem title="상세설명" :required="false">
      <template #body-content>
        <div class="flex flex-items-center">
          <InputTextarea
              type="text"
              shape="square"
              color="secondary"
              placeholder="해당 경력에 대한 상세한 설명을 적어주세요."
          />
        </div>
      </template>
    </ProfileItem>
  </Dialog>
</template>

<script setup>
import ProfileItem from "@/components/expanded/ProfileItem.vue";
import Button from "@/components/core/Button/Button.vue";
import Input from "@/components/core/Input/Input.vue";
import InputRange from "@/components/core/Input/InputRange.vue";
import InputTextarea from "@/components/core/Input/InputTextarea.vue";
import Checkbox from "@/components/core/Checkbox/Checkbox.vue";
import Dialog from "@/components/core/Dialog/Dialog.vue";

import { useDialog } from "@/composables/useDialog";

const { isActive, translateY, openModal, closeModal } = useDialog();
</script>
