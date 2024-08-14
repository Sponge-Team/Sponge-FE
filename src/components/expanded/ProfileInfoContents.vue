<template>
  <div>
    <div class="flex flex-justify-center flex-col flex-items-center" style="width: 100%;">
      <Badge color="tertiary" text="얼굴이 나온 사진을 등록해주세요!"/>
      <div class="flex flex-justify-center flex-items-center position-relative mt-5"
           style="width: 117px; height: 117px; border-radius: 100px; background-color: var(--s-palette-gray-200);">
        <img src="@/lib/assets/svg/ic_user.svg" alt="유저 기본 이미지" style="width: 28px; height: 28px;">
        <Inputfile class="position-absolute" size="lg" style="bottom: 0; right: 0;"/>
      </div>
    </div>
    <ProfileItem title="이름">
      <template #body-content>
        <div class="flex">
          <Input type="text" shape="square" color="secondary" placeholder="예) 강훈련"/>
        </div>
      </template>
    </ProfileItem>
    <ProfileItem title="성별">
      <template #body-content>
        <div class="flex">
          <Button rounded="square" size="l" style="width: 50%;" class="mr-2">
            <template #default>
              <p class="s-title-02">남</p>
            </template>
          </Button>
          <Button color="outline-primary" rounded="square" size="l" style="width: 50%;">
            <template #default>
              <p class="s-title-02">여</p>
            </template>
          </Button>
        </div>
      </template>
    </ProfileItem>
    <ProfileItem title="전화번호">
      <template #body-content>
        <div class="flex">
          <Input type="text" shape="square" color="secondary" placeholder="예) 01012341234"/>
        </div>
      </template>
    </ProfileItem>
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
import Inputfile from "@/components/core/Input/Inputfile.vue";
import Tag from "@/components/core/Tag/Tag.vue";
import Badge from "@/components/core/Badge/Badge.vue";

const props = defineProps({})
</script>
