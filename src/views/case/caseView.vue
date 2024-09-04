<template>
  <div :style="caseViewStyle">
    <CaseWebBar class="position-fixed" :style="caseWebBarStyle" @updateMode="(data) => {caseViewMode = data}" @updateInputData="(data)=>{fnSearchedCases(data)}"/>
    <div v-if="caseViewMode === 'LIST'">
      <div class="overflow-hidden position-relative">
        <CaseTitle class="pt15 mb10"/>

        <Card color="white" style="padding: 0;">
          <template #body-content>
            <div style="border-bottom: 1px solid var(--s-semantic-secondary-border-default); height: 49px;">
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

    <div v-if="caseViewMode === 'DETAIL'" class="pb15">
      <div style="border-bottom: 8px solid var(--s-semantic-secondary-border-neutral-default)">
        <div class="pt25 pl5 pr5">
          <div v-if="caseDetail.tag">
            <div class="flex justify-start">
              <Tag :text="'#'+caseDetail.tag.main" class="mr2"/>
              <Tag v-for="(item, i) in caseDetail.tag.sub" :key="'caseDetail.tag.sub.'+i" :text="'#'+item" color="secondary" :class="{'mr2' : caseDetail.tag.sub.length !== i}"/>
            </div>
          </div>

          <p class="s-title-00 mt2">{{caseDetail.title}}</p>

          <div class="flex pt3 pb3" style="width: 100%; border-bottom: 1px solid var(--s-semantic-secondary-border-default);">
            <img class="mr2" src="@/lib/assets/svg/default_user_img.svg" alt="유저 프로필 이미지">
            <div style="width: 100%;">
              <p class="s-body-02">{{caseDetail.pet.name}}</p>
              <div class="s-body-03 flex justify-between" style="color:var(--s-semantic-secondary-font-strong-default);">
                <p>{{caseDetail.pet.species}} · {{caseDetail.pet.gender}} · {{caseDetail.pet.born}} · {{caseDetail.pet.weight}}</p>
                <p>
                  {{ moment().diff(moment(caseDetail.createdAt), 'hours') >= 24
                    ? moment().diff(moment(caseDetail.createdAt), 'days') + '일 전'
                    : moment().diff(moment(caseDetail.createdAt), 'hours') + '시간 전' }}
                </p>

              </div>
            </div>
          </div>
          <div class="pt3 pb3">
            <div>
              <div v-if="caseDetail.img !== null">
<!--                <img :src="caseDetail.content.img" alt="">-->
              </div>
              <p>{{caseDetail.content.text}}</p>
            </div>
            <div class="pt3 pb3">
              <span v-for="(item, i) in caseDetail.tag.sub" class="s-body-00" :class="{'mr2' : i !== caseDetail.tag.sub.length}" :key="'caseDetail.tags.'+i" style="color: var(--s-semantic-primary-font-strong-default)">#{{item}}</span>
            </div>
            <div>
              <Button color="outline-secondary" rounded="square" class="mr-2" style="padding: 5px 10px;">
                <template #default>
                  <div class="flex">
                    <img src="@/lib/assets/svg/Ic_like.svg" alt="추천" class="mr2">
                    <p class="s-body-01">{{caseDetail.recommend}}</p>
                  </div>
                </template>
              </Button>
              <Button color="outline-secondary" rounded="square" style="padding: 5px 10px;">
                <template #default>
                  <div class="flex">
                    <img src="@/lib/assets/svg/ic_mark_d.svg" alt="북마크" class="mr2">
                    <p class="s-body-01">저장</p>
                  </div>
                </template>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="flex justify-between flex-items-center p3">
          <p class="s-title-02">
            답변 {{caseDetail.comment.length}}개
          </p>
          <div>
            <Button color="transparent" v-for="(item, i) in filteringTypeList" :key="'filteringTypeList'+i" class="s-title-02" :class="i === filteringTypeList.length ? '' : 'mr2'" style="padding: 0;">
              <template #default>
                {{item}}
              </template>
            </Button>
          </div>
        </div>
        <div class="pl3 pr3">
          <div v-for="(item, i) in caseDetail.comment" :key="'caseDetail.comment'+i" :class="i !== caseDetail.comment.length ? 'mb2' : ''">
            <Card :color="item.selectYn === true ? 'light' : 'secondary'">
              <template #body-content>
                <div class="flex flex-items-center">
                  <div class="mr3" style="content: ''; width: 50px; height: 50px; background-color: gray; border-radius: 50%"></div>
                  <div>
                    <p class="s-heading-03">{{item.name}} 훈련사님</p>
                    <div class="s-body-02 flex flex-item-center" style="color: var(--s-semantic-secondary-font-neutral-default)">
                      <p>채택된 답변 <span class="s-title-03">{{ item.selectedCommentCount }}건</span></p>
                      <span class="ml2 mr3" style="content: ''; height: 9px; width: 0; border-right: 1px solid var(--s-sementic-primary-border-default)"></span>
                      <p>1:1상담 <span class="s-title-03">{{ item.advice }}회</span></p>
                    </div>
                  </div>
                </div>
              </template>
            </Card>
            <Tag v-if="item.selectYn === true" color="strong" size="lg" text="채택된 답변" class="mt2 mb2"/>
            <div class="s-body-01 mb2" style="color: var(--s-semantic-secondary-font-neutral-default);
                      width: 100%;
                      max-width: 600px;
                      line-height: 1.6;
                      white-space: pre-wrap;
                      position: relative;"
            >
              <p style="max-height: 125px;
                      overflow: hidden;
                      position: relative;"
              >
                {{item.content}}
              </p>
            </div>
            <div class="flex flex-justify-between flex-items-center">
              <Button color="transparent" rounded="square" class="mr-2" style="padding: 0; color: var(--s-semantic-primary-font-strong-default)">
                <template #default>
                  <div class="flex">
                    <img src="@/lib/assets/svg/Ic_like_s.svg" alt="추천" class="mr2">
                    <p class="s-body-01">추천 {{item.like}}</p>
                  </div>
                </template>
              </Button>
              <p class="s-body-02" style="color: var(--s-semantic-secondary-font-strong-default)">
                {{
                  moment().diff(moment(item.createdAt), 'days') >= 1
                      ? moment().diff(moment(item.createdAt), 'days') + '일 전'
                      : moment().diff(moment(item.createdAt), 'hours') >= 1
                          ? moment().diff(moment(item.createdAt), 'hours') + '시간 전'
                          : moment().diff(moment(item.createdAt), 'minutes') + '분 전'
                }} 답변
              </p>
            </div>
            <Button class="mt2 mb2" color="transparent" @click="" style="padding: 0;">
              <template #default>
                <p class="s-body-03" style="color: var(--s-semantic-secondary-font-strong-default)">
                  자세히 보기..
                </p>
              </template>
            </Button>
          </div>
        </div>
      </div>

      <NavBar class="nav-bar"/>
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
import moment from "moment";

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

const caseDetail = ref({
  tag: {
    main: '',
    sub: []
  },
  createdAt: '',
  pet: {
    name: '',
    species: '',
    gender: '',
    neutering: true,
    born: '',
    weight: ''
  },
  title: '',
  content: {
    text: ''
  },
  recommend: 0,
  comment: [
    {
      id: 1,
      name: '',
      selectedCommentCount: 0,
      advice: 0,
      selectYn: true,
      content: ''
    }
  ]
});

const openTheCaseDetail = async (id) => {
  caseViewMode.value = 'DETAIL'
  const allData = await fetchCsePosts();

  if (allData) {
    caseDetail.value = allData.find(item => item.id === id);
  }
}

const filteringType = ref('추천순')
const filteringTypeList = ref(['추천순', '최신순'])
</script>
