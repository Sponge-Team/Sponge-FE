<template>
  <div style="background-color: #F4F4F4;">
    <CaseWebBar class="position-fixed" style="width: 100%; background-color: #F4F4F4; z-index: 1"/>
    <CaseContents
        class="pt15"
        :buttons="['전체', '분리불안', '사회성', '요구성 짖음', '입질']"
        :cards="filteredCases"/>
    <NavBar class="nav-bar"/>
  </div>
</template>
<script setup>
import CaseWebBar from "@/components/expanded/CaseWebBar.vue";
import CaseContents from "@/components/expanded/CaseContents.vue";
import NavBar from "@/components/expanded/NavBar.vue";
import {onMounted, ref} from "vue";
import {fetchCsePosts} from "@/apis/fakeApi.js";

const theCase = ref([])
const filteredCases = ref([])

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
}
onMounted(()=> {
  getCases();
})
</script>
