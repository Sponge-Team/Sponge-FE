<template>
  <div :style="caseViewStyle">
    <CaseWebBar class="position-fixed" :style="caseWebBarStyle" @updateMode="(data) => {caseViewMode = data}" @updateInputData="(data)=>{fnSearchedCases(data)}"/>
    <div v-if="caseViewMode === 'LIST'">
      <div class="overflow-hidden position-relative">
        <CaseTitle class="pt15 mb10"/>

        <Card color="white" style="padding: 0;">
          <template #body-content>
            <div style="border-bottom: 1px solid #E8E8E8; height: 49px;">
              <ToggleButtons :buttons="['전체', '분리불안', '배변', '짖음', '사회성', '공격성', '기본교육']" style="overflow-x: auto; height: 100%; white-space: nowrap;"/>
            </div>
            <PostsCardContainer :cards="filteredCases" shape="square" @clickCase="(data) => {openTheCaseDetail(data)}"/>
          </template>
        </Card>

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
      </div>

      <NavBar class="nav-bar"/>
    </div>

    <div v-if="caseViewMode === 'SEARCH'" class="pt15">
      <Card color="white" style="padding: 0;">
        <template #body-content>
          <PostsCardContainer :cards="searchedCases" shape="square"/>
        </template>
      </Card>
    </div>

    <div v-if="caseViewMode === 'DETAIL'" class="pl5 pr5">
      <div v-if="caseDetail !== {}" class="pt25">
        <div class="flex justify-start">
          <Tag :text="'#'+caseDetail.tag.main" class="mr2"/>
          <Tag v-for="(item, i) in caseDetail.tag.sub" :key="'caseDetail.tag.sub.'+i" :text="'#'+item" color="secondary" :class="{'mr2' : caseDetail.tag.sub.length !== i}"/>
        </div>
        <div>
          <p class="s-title-00">{{caseDetail.title}}</p>
        </div>
        <div>
          <p>{{caseDetail.content.text}}</p>
        </div>
        <div>
          <span v-for="(item, i) in caseDetail.tag.sub" class="s-body-00" :class="{'mr2' : i !== caseDetail.tag.sub.length}" :key="'caseDetail.tags.'+i" style="color: var(--s-semantic-primary-font-strong-default)">#{{item}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import CaseWebBar from "@/components/expanded/CaseWebBar.vue";
import NavBar from "@/components/expanded/NavBar.vue";
import {computed, onMounted, onUnmounted, ref} from "vue";
import {fetchCsePosts} from "@/apis/fakeApi.js";
import CaseTitle from "@/components/expanded/CaseTitle.vue";
import Button from "@/components/core/Button/Button.vue";
import PostsCardContainer from "@/components/core/Card/PostsCardContainer.vue";
import ToggleButtons from "@/components/core/Button/ToggleButtons.vue";
import Card from "@/components/core/Card/Card.vue";
import Tag from "@/components/core/Tag/Tag.vue";

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
    body: post.content.text.substring(0, 58) + '...',
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

const caseDetail = ref({})
const openTheCaseDetail = async (id) => {
  caseViewMode.value = 'DETAIL'
  caseDetail.value = {}
  const allData = await fetchCsePosts();

  if (allData) {
    caseDetail.value = allData.find(item => item.id === id);
  }
}
</script>
