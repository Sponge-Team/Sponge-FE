<template>
  <div class="flex flex-col flex-justify-between">
    <div>
      <ProfileItem title="주요 활동지역 선택" desc="(중복선택 가능)">
        <template #body-content>
          <div class="flex flex-wrap" :style="isActiveOtherRegions === true ? 'gap:10px;' : ''">
            <div v-for="(item, i) in list"
                 :style="isActiveOtherRegions === true ? 'flex: 1 1 calc(33.333% - 10px);' : 'flex: 1 1 calc(33.333% - 10px)' ">
              <Button
                  v-if="i < showCount"
                  :color="openMajorRegion === item.major ? 'primary' : 'tertiary'" rounded="square" :key="'major-list'+i"
                  @click="showRegionList(item.major)" style="width: 100%;">
                <template #default>
                  {{item.major}}
                </template>
              </Button>
            </div>
            <Button v-if="isActiveOtherRegions === false" @click="isActiveOtherRegions = true, showCount = list.length" color="tertiary" rounded="square"><template #default>...</template></Button>
          </div>
          <div v-if="selectedRegionList.length > 0" class="mt-5 mb-5 flex-justify-start flex flex-items-center">
            <TagButton v-for="(item, i) in selectedRegionList" :key="'selectedRegionList'+i"
                       :class="selectedRegionList.length !== i ? 'mr-2' : ''"
                       @close="()=>{deleteSelectedRegion(item.major, item.sub)}"
            >
              <div class="flex flex-justify-between flex-items-center">
                <p>{{item.major}}</p>
                <img class="mr-2 ml-2" src="@/lib/assets/svg/ic_arrow_right_y.svg" alt="#">
                <p>{{item.sub}}</p>
              </div>
            </TagButton>
          </div>
          <ul v-if="openMajorRegion !== ''">
            <li v-for="(item, i) in list[openMajorRegion].sub" :key="'region-list-' + i" class="s-body-02 pt-2 pb-2"
                style="color:var(--s-semantic-primary-font-info-default); border-bottom: 1px solid var(--s-semantic-primary-stroke-info-default);"
                @click="setSelectedRegionList(openMajorRegion, item)">
              {{item}}
            </li>
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
import {computed, ref} from "vue";
import TagButton from "@/components/core/Tag/TagButton.vue";

const props = defineProps({})
const list = ref([
  {
    major: '서울',
    sub: [
      '종로구',
      '중구',
      '용산구',
      '성동구',
      '광진구',
      '동대문구',
      '중랑구',
      '성북구',
      '강북구',
      '도봉구',
      '노원구',
      '은평구',
      '서대문구',
      '마포구',
      '양천구',
      '강서구',
      '구로구',
      '금천구',
      '영등포구',
      '동작구',
      '관악구',
      '서초구',
      '강남구',
      '송파구',
      '강동구'
    ],
    isActive: false,
  },
  {
    major: '경기',
    sub:[
      '수원시',
      '용인시',
      '고양시',
      '화성시',
      '성남시',
      '부천시',
      '남양주시',
      '안산시',
      '평택시',
      '안양시',
      '시흥시',
      '파주시',
      '김포시',
      '의정부시',
      '광주시',
      '하남시',
      '광명시',
      '군포시',
      '양주시',
      '오산시',
      '이천시',
      '안성시',
      '구리시',
      '의왕시',
      '포천시',
      '양평군',
      '여주시',
      '동두천시',
      '과천시',
      '가평군',
      '연천군'
    ],
    isActive: false,
  },
  {
    major: '인천',
    sub:[
      '중구',
      '동구',
      '미추홀구',
      '연수구',
      '남동구',
      '부평구',
      '계양구',
      '서구',
      '강화군',
      '옹진군'
    ],
    isActive: false,
  },
  {
    major: '부산',
    sub:[
    '중구',
    '서구',
    '동구',
    '영도구',
    '부산진구',
    '동래구',
    '남구',
    '북구',
    '해운대구',
    '사하구',
    '금정구',
    '강서구',
    '연제구',
    '수영구',
    '사상구',
    '기장군'
  ],
    isActive: false,
  },
  {
    major: '대구',
    sub:[
    '중구',
    '동구',
    '서구',
    '남구',
    '북구',
    '수성구',
    '달서구',
    '달성군',
    '군위군'
  ],
    isActive: false,
  },
  {
    major: '광주',
    sub:[
      '동구',
      '서구',
      '남구',
      '북구',
      '광산구'
    ],
    isActive: false,
  },
  {
    major: '대전',
    sub:[
      '동구',
      '중구',
      '서구',
      '유성구',
      '대덕구'
    ],
    isActive: false,
  },
  {
    major: '울산',
    sub:[
      '중구',
      '남구',
      '동구',
      '북구',
      '울주군'
    ],
    isActive: false,
  },
  {
    major: '세종',
    sub:['세종'],
    isActive: false,
  },
  {
    major: '강원',
    sub:[
      '춘천시',
      '원주시',
      '강릉시',
      '동해시',
      '태백시',
      '속초시',
      '삼척시',
      '홍천군',
      '횡성군',
      '영월군',
      '평창군',
      '정선군',
      '철원군',
      '화천군',
      '양구군',
      '인제군',
      '고성군',
      '양양군'
    ],
    isActive: false,
  },
  {
    major: '충북',
    sub:[
      '청주시',
      '충주시',
      '제천시',
      '보은군',
      '옥천군',
      '영동군',
      '증평군',
      '진천군',
      '괴산군',
      '음성군',
      '단양군'
    ],
    isActive: false,
  },
  {
    major: '충남',
    sub:[
      '천안시',
      '공주시',
      '보령시',
      '아산시',
      '서산시',
      '논산시',
      '계룡시',
      '당진시',
      '금산군',
      '부여군',
      '서천군',
      '청양군',
      '홍성군',
      '예산군',
      '태안군'
    ],
    isActive: false,
  },
  {
    major: '전북',
    sub:[
      '전주시',
      '군산시',
      '익산시',
      '정읍시',
      '남원시',
      '김제시',
      '완주군',
      '진안군',
      '무주군',
      '장수군',
      '임실군',
      '순창군',
      '고창군',
      '부안군'
    ],
    isActive: false,
  },
  {
    major: '전남',
    sub:[
      '목포시',
      '여수시',
      '순천시',
      '나주시',
      '광양시',
      '담양군',
      '곡성군',
      '구례군',
      '고흥군',
      '보성군',
      '화순군',
      '장흥군',
      '강진군',
      '해남군',
      '영암군',
      '무안군',
      '함평군',
      '영광군',
      '장성군',
      '완도군',
      '진도군',
      '신안군'
    ],
    isActive: false,
  },
  {
    major: '경북',
    sub:[
      '포항시',
      '경주시',
      '김천시',
      '안동시',
      '구미시',
      '영주시',
      '영천시',
      '상주시',
      '문경시',
      '경산시',
      '의성군',
      '청송군',
      '영양군',
      '영덕군',
      '청도군',
      '고령군',
      '성주군',
      '칠곡군',
      '예천군',
      '봉화군',
      '울진군',
      '울릉군'
    ],
    isActive: false,
  },
  {
    major: '경남',
    sub:[
      '창원시',
      '진주시',
      '통영시',
      '사천시',
      '김해시',
      '밀양시',
      '거제시',
      '양산시',
      '의령군',
      '함안군',
      '창녕군',
      '고성군',
      '남해군',
      '하동군',
      '산청군',
      '함양군',
      '거창군',
      '합천군'
    ],
    isActive: false,
  },
  {
    major: '제주',
    sub:[
      '제주시',
      '서귀포시'
    ],
    isActive: false,
  }
])
const isActiveOtherRegions = ref(false)
const openMajorRegion = ref('')
const showCount = ref(4)

const buttonWrapStyles = computed(()=>{
  return {

  }
})

const showRegionList = (item) => {
  if(openMajorRegion.value !== item){
    openMajorRegion.value = item
  }else{
    openMajorRegion.value = ''
  }
}

const selectedRegionList = ref([])

const setSelectedRegionList = (major, item) => {
  const exists = selectedRegionList.value.some(region => {
    return region.major === major && region.sub === item;
  });

  // 동일한 객체가 없으면 push
  if (!exists) {
    selectedRegionList.value.push({
      major: major,
      sub: item
    });
  }
}

const deleteSelectedRegion = (major, sub) => {
  selectedRegionList.value = selectedRegionList.value.filter(region => {
    return !(region.major === major && region.sub === sub);
  });
}
</script>
