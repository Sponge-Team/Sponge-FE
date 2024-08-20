<template>
  <div class="flex flex-justify-between flex-col" style="height: 100%;">
    <div class="overflow-auto">
      <div class="flex flex-justify-center flex-col flex-items-center" style="width: 100%;">
        <Badge color="tertiary" text="얼굴이 나온 사진을 등록해주세요!"/>
        <Inputfile size="lg" style="bottom: 0; right: 0;" @fileUpload="(data) => {userImg = data}"/>
      </div>
      <ProfileItem title="이름">
        <template #body-content>
          <div class="flex">
            <Input type="text" shape="square" color="secondary" placeholder="예) 강훈련" :value="userName" @changeInput="(data)=>{userName = data}"/>
          </div>
        </template>
      </ProfileItem>
      <ProfileItem title="성별">
        <template #body-content>
          <div class="flex">
            <Button v-for="(item, i) in genderList" :key="'genderList'+i" rounded="square"
                    :color="userGender === item.name ? 'primary' : 'outline-primary'" size="l" style="width: 50%;"
                    :class="i !== genderList.length ? 'mr-2' : ''"
                    @click="userGender = item.name">
              <template #default>
                <p class="s-title-02">{{ item.name }}</p>
              </template>
            </Button>
          </div>
        </template>
      </ProfileItem>
      <ProfileItem title="전화번호">
        <template #body-content>
          <div class="flex">
            <Input input-type="number" type="text" shape="square" color="secondary" placeholder="예) 01012341234" :value="userTel" @changeInput="(data)=>{userTel = data.toString()}"/>
          </div>
        </template>
      </ProfileItem>
    </div>
    <Button class="mt-5" size="l" style="width: 100%;" @click="saveInfo">
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
import {ref} from "vue";
import store from "@/store/index.js";

const props = defineProps({})

const genderList = ref([
  {name: '남', isSelected: true},
  {name: '여', isSelected: false},
])

const userImg = ref(null)
const userName = ref('')
const userGender = ref('남')
const userTel = ref('')

const saveInfo = () => {
  const userInfo = {
    userImg: userImg.value,
    userName: userName.value,
    userGender: userGender.value,
    userTel: userTel.value,
  };

  store.dispatch('setProfileLevel', {mode: 'LIST', title: '', step: 'MAIN', percentage: 0})

  localStorage.setItem('userInfo', JSON.stringify(userInfo));
};
</script>
