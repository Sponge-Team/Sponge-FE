<template>
  <div class="p4">
    <ProfileHeader title="경력" v-if="store.getters.getProfileLevel.mode !== ''" :mode="store.getters.getProfileLevel.mode"/>
    <ProfileContents/>
  </div>
</template>
<script setup>
import ProfileHeader from "@/components/expanded/ProfileHeader.vue";
import ProfileContents from "@/components/expanded/ProfileContents.vue";
import store from "@/store/index.js";
import {onMounted} from "vue";

onMounted(()=>{
  store.dispatch('setProfileLevel', {mode: 'LIST', step: 'MAIN', percentage: 0})
})

</script>
