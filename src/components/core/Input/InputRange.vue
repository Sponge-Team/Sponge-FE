<template>
  <div class="range-container">
    <input
        type="range"
        :value="value"
        min="0"
        max="10"
        @input="handleInput"
        class="rangeInput"
        ref="rangeInput"
    />
    <span
        class="rangeValue s-body-02"
        :style="rangeValueStyle"
    >{{ value }}년</span>
  </div>
</template>

<script setup>
import {ref, computed, watch, onMounted} from 'vue';

const props = defineProps({
  value: {
    type: Number,
    default: 0,
  }
});

const emit = defineEmits(['updateInput', 'changeInput']);
const rangeInput = ref(null);
const value = ref(props.value);

// 핸들러 함수
const handleInput = (e) => {
  value.value = Number(e.target.value);
  emit('updateInput', value.value);
  emit('changeInput', value.value);
  updateBackground(e.target);
};

// 슬라이더 배경을 업데이트하는 함수
const updateBackground = (target) => {
  const valuePercent = (target.value - target.min) / (target.max - target.min) * 100;
  target.style.background = `linear-gradient(to right, #FFE283 ${valuePercent}%, #ececec ${valuePercent}%)`;
};

// 슬라이더 thumb의 위치에 따라 span 위치 조정
const rangeValueStyle = computed(() => {
  if (!rangeInput.value) return {};

  const rangeWidth = rangeInput.value.offsetWidth;
  const thumbWidth = 23; // 슬라이더 thumb의 너비
  const valuePercent = (value.value - 0) / (10 - 0);
  const offset = valuePercent * (rangeWidth - thumbWidth);

  return {
    left: `${offset + thumbWidth / 2}px`,
    transform: 'translateX(-50%)',
    top: '30px'
  };
});

// 컴포넌트가 마운트되었을 때 배경과 span 위치 업데이트
onMounted(() => {
  updateBackground(rangeInput.value);
  rangeValueStyle.value = updateRangeValueStyle();
});

// props.value가 변경될 때마다 배경과 span 위치 업데이트
watch(() => props.value, (newValue) => {
  value.value = newValue;
  updateBackground(rangeInput.value);
  rangeValueStyle.value = updateRangeValueStyle();
});

function updateRangeValueStyle() {
  if (!rangeInput.value) return {};
  const rangeWidth = rangeInput.value.offsetWidth;
  const thumbWidth = 23; // 슬라이더 thumb의 너비
  const valuePercent = (value.value - 0) / (10 - 0);
  const offset = valuePercent * (rangeWidth - thumbWidth);

  return {
    left: `${offset + thumbWidth / 2}px`,
    transform: 'translateX(-50%)',
  };
}
</script>

<style lang="scss">
.range-container {
  position: relative;
  width: 100%;
  .rangeInput {
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, #FFE283 0%, #ececec 0%);
    border-radius: 8px;
    outline: none;
    transition: background 450ms ease-in;
    -webkit-appearance: none;
    accent-color: #ffca1d;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      border: 3px solid var(--s-palette-main-lighten-white);
      width: 23px;
      height: 23px;
      background: var(--s-semantic-primary-background-normal-default);
      cursor: pointer;
      border-radius: 50%;
      position: relative;
    }

    &::-moz-range-thumb {
      width: 23px;
      height: 23px;
      background: var(--s-semantic-primary-background-normal-default);
      cursor: pointer;
      border-radius: 50%;
    }
  }



  .rangeValue {
    position: absolute;
    top: 30px;
    white-space: nowrap;
    transition: left 0.1s ease-in-out;
    color: var(--s-semantic-primary-font-info-default);
  }
}


</style>
