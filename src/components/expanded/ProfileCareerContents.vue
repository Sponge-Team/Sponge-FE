<template>
  <div class="flex flex-col flex-justify-between" style="height: 100%;">
    <div class="overflow-auto">
      <ProfileItem title="연차">
        <template #body-content>
          <div>
            <div class="flex flex-justify-center s-heading-02">
              <p>{{year > 0 ? '~ ' : ''}}{{year}}년차</p>
            </div>
            <InputRange @update-input="(data)=>{year = data}"/>
          </div>
        </template>
      </ProfileItem>
      <ProfileItem title="이력">
        <template #title-count v-if="userCareerList.length > 0">
          <span style="color: var(--s-semantic-primary-background-normal-default)">{{userCareerList.length}}</span>/10
        </template>
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
          <div v-if="userCareerList.length > 0">
            <div v-for="(item, i) in userCareerList" :key="'userCareerList-'+i" :class="i !== userCareerList.length ? 'mb2' : ''">
              <Card type="outlined">
                <template #body-content>
                  <p class="s-title-02" style="color: var(--s-semantic-primary-font-info-default)">{{item.title}}</p>
                  <p class="s-body-03" style="color: var(--s-semantic-primary-font-info-default)">{{item.startDate}} ~ {{item.endDate}}</p>
                  <p class="s-body-03" style="color: var(--s-semantic-secondary-font-light-default)">{{item.desc}}</p>
                </template>
              </Card>
            </div>
          </div>
        </template>
      </ProfileItem>
    </div>
    <Button class="mt-5" size="l" style="width: 100%;" @click="saveCareer">
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
    <ProfileItem title="이력 타이틀" style="padding: 0;">
      <template #body-content>
        <div class="flex">
          <Input type="text" shape="square" color="secondary" :value="title" placeholder="예 ) 반려견 컴퍼니 훈련사 근무" @updateInput="(data)=>title=data"/>
        </div>
      </template>
    </ProfileItem>
    <ProfileItem title="기간">
      <template #body-content>
        <Checkbox text="현재 진행 중" />
        <div class="flex flex-items-center mt-2">
          <Datepicker v-model="startDate" class="mr-2" placeholder="시작일" locale="kr" :format="format"/>
          <Datepicker v-model="endDate" placeholder="종료일" locale="kr" :format="format"/>
        </div>
      </template>
    </ProfileItem>
    <ProfileItem title="상세설명" :required="false" style="padding: 0;">
      <template #body-content>
        <div class="flex flex-items-center">
          <InputTextarea
              type="text"
              shape="square"
              color="secondary"
              :value="desc"
              placeholder="해당 경력에 대한 상세한 설명을 적어주세요."
              @updateInput="(data)=>{desc=data}"
          />
        </div>
      </template>
    </ProfileItem>
    <Button class="mt-5" size="l" style="width: 100%;" @click="addCareerList">
      <template #default>
        <p class="s-heading-02">저장</p>
      </template>
    </Button>
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
import Datepicker from '@vuepic/vue-datepicker';
import Card from "@/components/core/Card/Card.vue"

import { useDialog } from "@/composables/useDialog";
import {ref} from "vue";
import store from "@/store/index.js";

const { isActive, translateY, openModal, closeModal } = useDialog();

const title = ref('')
const year = ref(0)
const startDate = ref(null);
const endDate = ref(null);
const format = 'yyyy-MM-dd';
const desc = ref('')

const userCareerList = ref([])

const addCareerList = () => {
  let sd = new Date(startDate.value)
  let ed = new Date(endDate.value)

  userCareerList.value.push({
    title: title.value,
    startDate: sd.getFullYear() + '.' + (sd.getMonth()+1) + "." + sd.getDate(),
    endDate: ed.getFullYear() + '.' + (ed.getMonth()+1) + "." + ed.getDate(),
    desc: desc.value,
  })

  isActive.value = false
  title.value = ''
  startDate.value = null
  endDate.value = null
  desc.value = ''
}

const saveCareer = () => {
  const userCareer = {
    userCareerYear: year.value,
    userCareerList: userCareerList.value
  };

  store.dispatch('setProfileLevel', {mode: 'LIST', title: '', step: 'MAIN', percentage: 0})

  localStorage.setItem('userCareer', JSON.stringify(userCareer));
};
</script>
