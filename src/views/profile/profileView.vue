<template>
  <div class="p5">
    <ProfileHeader :mode="mode"/>
    <ProfileContents/>
  </div>
</template>
<script setup>
import ProfileHeader from "@/components/expanded/ProfileHeader.vue";
import {ref} from "vue";
import ProfileContents from "@/components/expanded/ProfileContents.vue";

const mode = ref('ALL')
</script>