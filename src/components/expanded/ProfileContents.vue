<template>
  <div class="p1" style="height: calc(100% - 40px);">
    <ProfileProgressbar v-if="store.getters.getProfileLevel.mode === 'LIST'"/>
    <ProfileMainContents v-if="store.getters.getProfileLevel.step === 'MAIN'"/>
    <ProfileInfoContents v-if="store.getters.getProfileLevel.step === 'INFO'"/>
    <ProfileCareerContents v-if="store.getters.getProfileLevel.step === 'CAREER'"/>
    <ProfileRegionContents v-if="store.getters.getProfileLevel.step === 'REGION'"/>
    <ProfileSelfIntroduction v-if="store.getters.getProfileLevel.step === 'INTRODUCTION'"/>
    <ProfileFinish v-if="store.getters.getProfileLevel.step === 'FINISH'"/>
  </div>
</template>
<script setup>
import ProfileProgressbar from "@/components/expanded/ProfileProgressbar.vue";
import ProfileInfoContents from "@/components/expanded/ProfileInfoContents.vue";
import ProfileCareerContents from "@/components/expanded/ProfileCareerContents.vue";
import ProfileRegionContents from "@/components/expanded/ProfileRegionContents.vue";
import ProfileMainContents from "@/components/expanded/ProfileMainContents.vue";
import store from "@/store/index.js";
import ProfileSelfIntroduction from "@/components/expanded/ProfileSelfIntroduction.vue";
import ProfileFinish from "@/components/expanded/ProfileFinish.vue";
</script>
