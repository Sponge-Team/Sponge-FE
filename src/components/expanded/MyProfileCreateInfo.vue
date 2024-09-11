<template>
  <div class="flex flex-justify-between flex-col">
    <div class="pl-5 pr-5 pt-3">
      <div v-if="currentPage === 1">
        <div class="s-heading-00">반려견 등록을 위해 <br> 기본 정보를 입력해주세요</div>
        <div class="p1">
          <BehaviorCreateItem title="견주 닉네임" :errorMessage="titleError">
            <template #body-content>
              <div class="flex">
                <Input 
                  type="text" 
                  shape="square" 
                  color="secondary" 
                  placeholder="예) 홍길동" 
                  @changeInput="(data)=>{title = data}"
                />
              </div>
            </template>
          </BehaviorCreateItem>
          <ProfileItem title="거주지역">
            <template #body-content>
              <div class="flex">
                <Input type="text" shape="square" color="secondary" placeholder="지역을 선택해주세요." :read-only="true"/>
                <Button color="transparent" @click="goToPage(2)">
                  <template #icon>
                    <img src="@/lib/assets/svg/ic_arrow_right.svg" alt="거주지역 작성하기 버튼">
                  </template>
                </Button>
              </div>
            </template>
          </ProfileItem>
        </div>
      </div>
      <MyProfileCreateRegion v-if="currentPage === 2" />
    </div>
    <div class="p3 button-fixed">
      <Button color="tertiary" size="l" class="w-full">
        <template #default>
          <p class="s-heading-02">다음</p>
        </template>
      </Button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import Button from '@/components/core/Button/Button.vue';
import Input from '@/components/core/Input/Input.vue';
import ProfileItem from '@/components/expanded/ProfileItem.vue';
import BehaviorCreateItem from '@/components/expanded/BehaviorCreateItem.vue';
import MyProfileCreateRegion from "@/components/expanded/MyProfileCreateRegion.vue";

const titleError = ref('');
const currentPage = ref(1);

function goToPage(pageNumber) {
  currentPage.value = pageNumber;
}
</script>

<style scoped>
.button-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
</style>