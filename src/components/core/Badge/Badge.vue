<template>
  <div class="s-caption-01 position-relative" :style="style">
    <p>{{text}}</p>
    <div class="position-absolute triangle"></div>
  </div>
</template>
<script setup>
import {computed} from "vue";

const props = defineProps({
  text:{
    type: String,
    default: 'Badge'
  },
  color: {
    type: String,
    default: 'tertiary',
    validator: value => ['primary', 'secondary', 'tertiary'].includes(value)
  },
})
const style = computed( () => {
  let { color } = props;
  return {
    width: 'max-content',
    padding: '0 10px',
    borderRadius: '100px',
    background: color === 'primary' ? 'var(--s-semantic-tag-background-primary-default)' : color === 'secondary' ? 'var(--s-semantic-tag-background-secondary-default)' : 'var(--s-semantic-primary-background-strong-default)',
    color: color === 'primary' ? 'var(--s-semantic-primary-font-strong-default)' : color === 'secondary' ? 'var(--s-semantic-primary-font-light-default)' : 'var(--s-palette-main-lighten-white)'
  };
})
</script>
<style lang="scss">
.triangle {
  bottom: -5px; /* 말풍선의 아래쪽에 삼각형을 붙입니다 */
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid var(--s-semantic-primary-background-strong-default); /* 삼각형의 색상을 말풍선 배경색과 맞춥니다 */
}
</style>
