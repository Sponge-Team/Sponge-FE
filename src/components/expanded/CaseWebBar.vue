<template>
  <div>
    <div v-if="mode === 'LIST'" class="flex justify-between flex-items-center p4">
      <h1 class="s-heading-04">진단사례</h1>
      <div class="flex justify-start flex-items-center">
        <Button class="mr5" color="transparent" style="padding: 0;" @click="updateMode('SEARCH')">
          <template #icon>
            <img src="@/lib/assets/svg/ic_search_b.svg" alt="검색하기 버튼">
          </template>
        </Button>
        <Button color="transparent" style="width: 40px; height: 40px; padding: 0;">
          <template #icon>
            <img src="@/lib/assets/svg/ic_web_bar_user.svg" alt="마이페이지 이동 버튼">
          </template>
        </Button>
      </div>
    </div>
    <div v-if="mode === 'SEARCH'" class="flex justify-between flex-items-center p4">
      <Button color="transparent" @click="updateMode('LIST')">
        <template #icon>
          <img src="@/lib/assets/svg/ic_arrow_right_lg.svg" alt="뒤로가기 버튼">
        </template>
      </Button>
      <Input type="outlined" :icon="true" placeholder="분리불안, 사회성 키워드 검색" :value="searchData" :model="searchData" @updateInput="(data)=> {detectInputData(data)}" style="width: 95%;">
        <template #icon>
          <img v-if="isFilledInput === false" src="@/lib/assets/svg/ic_search.svg" alt="검색 버튼" class="pl3" style="width: max-content; height: max-content;">
          <img v-if="isFilledInput === true" src="@/lib/assets/svg/ic_close.svg" alt="검색창 초기화 버튼" class="pl3" style="width: max-content; height: max-content;" @click="resetInputData">
        </template>
      </Input>
    </div>
  </div>
</template>
<script setup>
import Button from "@/components/core/Button/Button.vue";
import {onMounted, ref} from "vue";
import Input from "@/components/core/Input/Input.vue";

const mode = ref('LIST')

const searchData = ref('')
const isFilledInput = ref(false)

onMounted(()=>{
  mode.value = 'LIST'
})

const emit = defineEmits(['updateMode', 'updateInputData'])

const updateMode = (updateMode) => {
  mode.value = updateMode
  searchData.value = ''
  emit('updateMode', mode.value)
  emit('updateInputData', searchData.value)
}

const detectInputData = (data) => {
  isFilledInput.value = data.length > 0
  searchData.value = data
  emit('updateInputData', data)
}

const resetInputData = () => {
  searchData.value = ''
  isFilledInput.value = false
  emit('updateInputData', searchData.value)
}
</script>
