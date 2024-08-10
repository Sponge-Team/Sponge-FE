<template>
  <div>
    <div class="pt-2 pb-2 flex flex-justify-between flex-items-center">
      <div class="position-relative" style="width: 70%; height: 6px; content: ''; background-color: var(--s-semantic-primary-background-neutral-default);">
        <span class="position-absolute" style="height: 6px; content: '';"></span>
      </div>
      <span class="s-heading-02" style="color: var(--s-semantic-secondary-font-light-default)">완성도 0%</span>
    </div>
    <ProfileDesc>
      <template #default>
        <p>훈련사 등록에 필요한</p>
        <p>정보를 입력해주세요</p>
      </template>
    </ProfileDesc>
    <ProfileItem title="프로필">
      <template #body-content>
        <Card color="secondary">
          <template #body-content>
            <div class="flex flex-items-center flex-justify-between">
              <div class="flex flex-justify-center flex-items-center" style="width: 82px; height: 82px; border-radius: 100px; background-color: var(--s-palette-main-lighten-white);">
                <img src="@/lib/assets/svg/ic_user.svg" alt="유저 기본 이미지">
<!--                <Inputfile></Inputfile>-->
              </div>
              <div style="color: var(--s-semantic-secondary-font-light-default)">
                <p class="s-title-02">이름을 입력하세요</p>
                <p class="s-title-02"><span class="mr-2">남</span>010-0000-0000</p>
              </div>
              <div>
                <Button color="transparent">
                  <template #icon>
                    <img src="@/lib/assets/svg/ic_arrow_right.svg" alt="프로필 상세 작성하기 버튼">
                  </template>
                </Button>
              </div>
            </div>
          </template>
        </Card>
      </template>
    </ProfileItem>
    <ProfileItem title="경력">
      <template #body-content>
        <div class="flex">
          <Input type="text" shape="square" color="secondary" placeholder="경력을 입력해주세요"/>
          <Button color="transparent">
            <template #icon>
              <img src="@/lib/assets/svg/ic_arrow_right.svg" alt="경력 상세 작성하기 버튼">
            </template>
          </Button>
        </div>
      </template>
    </ProfileItem>
    <ProfileItem title="지역">
      <template #body-content>
        <div class="flex">
          <Input type="text" shape="square" color="secondary" placeholder="경력을 입력해주세요"/>
          <Button color="transparent">
            <template #icon>
              <img src="@/lib/assets/svg/ic_arrow_right.svg" alt="경력 상세 작성하기 버튼">
            </template>
          </Button>
        </div>
      </template>
    </ProfileItem>
    <Button color="tertiary" size="l" style="width: 100%;">
      <template #default>
        <p class="s-heading-02">다음</p>
      </template>
    </Button>
  </div>
</template>
<script setup>
import ProfileItem from "@/components/expanded/ProfileItem.vue";
import Card from "@/components/core/Card/Card.vue";
import Button from "@/components/core/Button/Button.vue";
import Input from "@/components/core/Input/Input.vue";
import ProfileDesc from "@/components/expanded/ProfileDesc.vue";

const props = defineProps({})
</script>
