<template>
  <div>
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

const props = defineProps({})
</script>
