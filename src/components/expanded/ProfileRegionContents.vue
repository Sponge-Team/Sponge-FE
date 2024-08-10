<template>
  <div class="flex flex-col flex-justify-between">
    <div>
      <ProfileItem title="주요 활동지역 선택" desc="(중복선택 가능)">
        <template #body-content>
          <div class="flex flex-justify-between">
            <Button rounded="square"><template #default>서울</template></Button>
            <Button color="tertiary" rounded="square"><template #default>경기</template></Button>
            <Button color="tertiary" rounded="square"><template #default>인천</template></Button>
            <Button color="tertiary" rounded="square"><template #default>부산</template></Button>
            <Button color="tertiary" rounded="square"><template #default>...</template></Button>
          </div>
          <Tag class="mt-5 mb-5"/>
          <ul>
            <li v-for="(item, i) in list" :key="'region-list-' + i" class="s-body-02 pt-2 pb-2"
                style="color:var(--s-semantic-primary-font-info-default); border-bottom: 1px solid var(--s-semantic-primary-stroke-info-default);">{{item}}</li>
          </ul>
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
import Tag from "@/components/core/Tag/Tag.vue";
import {ref} from "vue";

const props = defineProps({})

const list = ref(['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구'])
</script>
