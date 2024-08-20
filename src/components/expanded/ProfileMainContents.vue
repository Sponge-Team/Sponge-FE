<template>
  <div class="flex flex-justify-between flex-col" style="height: calc(100% - 40px);">
    <div class="overflow-auto">
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
                <Inputfile style="bottom: 0; right: 0;" :disabled="true"/>
                <div style="color: var(--s-semantic-secondary-font-light-default)">
                  <p class="s-title-02">이름을 입력하세요</p>
                  <p class="s-title-02"><span class="mr-2">남</span>010-0000-0000</p>
                </div>
                <div>
                  <Button color="transparent" @click="store.dispatch('setProfileLevel', {mode: 'DETAIL', title: '프로필', step: 'INFO', percentage: 0})">
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
            <Input type="text" shape="square" color="secondary" placeholder="경력을 입력해주세요" :read-only="true"/>
            <Button color="transparent" @click="store.dispatch('setProfileLevel', {mode: 'DETAIL', title: '경력', step: 'CAREER', percentage: 0})">
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
            <Input type="text" shape="square" color="secondary" placeholder="경력을 입력해주세요" :read-only="true"/>
            <Button color="transparent"
                    @click="store.dispatch('setProfileLevel', {mode: 'DETAIL', title: '지역', step: 'REGION', percentage: 0})">
              <template #icon>
                <img src="@/lib/assets/svg/ic_arrow_right.svg" alt="경력 상세 작성하기 버튼">
              </template>
            </Button>
          </div>
        </template>
      </ProfileItem>
    </div>
    <Button class="mt-5" color="tertiary" size="l" style="width: 100%;">
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
import Inputfile from "@/components/core/Input/Inputfile.vue";
import store from "@/store/index.js";

const props = defineProps({})
</script>
