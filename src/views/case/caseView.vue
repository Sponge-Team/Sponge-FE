<template>
  <div :style="caseViewStyle">
    <CaseWebBar class="position-fixed" :style="caseWebBarStyle" @updateMode="(data) => {caseViewMode = data}" @updateInputData="(data)=>{fnSearchedCases(data)}"/>
    <div v-if="caseViewMode === 'LIST'">
      <div class="overflow-hidden position-relative">
        <CaseTitle class="pt15 mb10"/>
        <CaseContents
            :buttons="['전체', '분리불안', '사회성', '요구성 짖음', '입질']"
            :cards="filteredCases"
            @updateButtonData="(data) => {fnFilteredCases(data)}">
          <template #floatingButton>
            <div class="position-fixed" style="bottom: 85px; right: 20px;">
              <Button size="l" style="box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.25);" :rounded="isScroll === false ? 'rounded-circle' : 'circle'">
                <template #default>
                  <div class="flex flex-justify-between">
                    <img src="@/lib/assets/svg/ic_write_full.svg" alt="문제행동 상담받기 이미지" :class="isScroll === false ? 'mr3' : ''">
                    <p v-if="isScroll === false" class="s-heading-03">문제행동 상담받기</p>
                  </div>
                </template>
              </Button>
            </div>
          </template>
        </CaseContents>
      </div>
      <NavBar class="nav-bar"/>
    </div>
    <div v-if="caseViewMode === 'SEARCH'">
      <CaseContents
          class="pt15"
          :is-exits-buttons="false"
          :cards="searchedCases"/>
    </div>
  </div>
</template>
<script setup>
import CaseWebBar from "@/components/expanded/CaseWebBar.vue";
import CaseContents from "@/components/expanded/CaseContents.vue";
import NavBar from "@/components/expanded/NavBar.vue";
import {computed, onMounted, onUnmounted, ref} from "vue";
import {fetchCsePosts} from "@/apis/fakeApi.js";
import CaseTitle from "@/components/expanded/CaseTitle.vue";
import Button from "@/components/core/Button/Button.vue";

const caseViewMode = ref('LIST')

const theCase = ref([])
const filteredCases = ref([])
const searchedCases = ref([])

const getCases = async () => {
  const response = await fetchCsePosts();

  theCase.value = response.slice(0, 5).map(post => ({
    id: post.id,
    tags: post.tag,
    title: post.title,
    body: post.content.substring(0, 58) + '...',
    commentsCount: post.comment.length,
    recommendsCount: post.recommend
  }));
  filteredCases.value = theCase.value;
  searchedCases.value = theCase.value;
}

onMounted(()=> {
  caseViewMode.value = 'LIST'
  getCases();
})

const caseViewStyle = computed(()=>{
  return{
    background: caseViewMode.value === 'LIST' ? '#f4f4f4' : '#ffffff'
  }
})

const caseWebBarStyle = computed(() => {
  return{
    width: '100%',
    background: caseViewMode.value === 'LIST' ? '#f4f4f4' : '#ffffff',
    zIndex: '1',
    top: '0',
  }
})

/**
 * 스크롤이벤트
 */
const isScroll = ref(false)
const scrollPosition = ref(0);
const showAtPosition = 30; // 스크롤 위치가 200px 이상일 때 보여줌
const handleScroll = () => {
  scrollPosition.value = window.scrollY;
  isScroll.value = scrollPosition.value > showAtPosition;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  scrollPosition.value = window.scrollY;
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const fnSearchedCases = (selectedTags) => {
  if (!Array.isArray(selectedTags)) {
    selectedTags = [selectedTags];
  }

  if (selectedTags.length > 0) {
    searchedCases.value = theCase.value.filter(caseItem =>
        selectedTags.some(tag => caseItem.tags.includes(tag))
    );
  } else {
    searchedCases.value = theCase.value;
  }
}


const fnFilteredCases = (selectedTags) => {
  if (!Array.isArray(selectedTags)) {
    selectedTags = [selectedTags];
  }

  if (selectedTags[0] !== '전체') {
    filteredCases.value = theCase.value.filter(caseItem =>
        selectedTags.some(tag => caseItem.tags.includes(tag))
    );
  } else {
    filteredCases.value = theCase.value;
  }
}

</script>
