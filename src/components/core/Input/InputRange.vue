<template>
  <div class="range-container">
    <input type="range" :value="value"
           min="0" max="10"
           @input="handleInput"
           class="rangeInput"
           ref="rangeInput"
    />
<!--    <div class="range-label" :style="labelStyle">{{ value }}</div>-->
    <slot name="icon"></slot>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue';

const props = defineProps({
  placeholder: {
    type: String,
  },
  value: {
    type: [String, Number, Object],
  },
  model: {
    type: Object,
  },
  label: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['updateInput', 'changeInput']);
const rangeInput = ref(null);
const rangeValue = ref(props.value);

const handleInput = (e) => {
  rangeValue.value = e.target.value;
  emit('updateInput', rangeValue.value);
  emit('changeInput', rangeValue.value);
  updateBackground(e.target);
  updateLabelPosition();
};

const updateBackground = (target) => {
  let gradientValue = 100 / target.max;
  target.style.background = `linear-gradient(to right, #FFE283 0%, #FFE283 ${gradientValue * target.value}%, #ececec ${gradientValue * target.value}%, #ececec 100%)`;
};

const updateLabelPosition = () => {
  const range = rangeInput.value;
  const label = document.querySelector('.range-label');
  const value = ((range.value - range.min) / (range.max - range.min)) * 100;
  const newPosition = value * (range.offsetWidth / 100) - (label.offsetWidth / 2) + 'px';
  label.style.left = newPosition;
};

onMounted(() => {
  updateBackground(rangeInput.value);
  updateLabelPosition();
});

watch(() => props.value, (newValue) => {
  if (rangeInput.value) {
    rangeInput.value.value = newValue;
    rangeValue.value = newValue;
    updateBackground(rangeInput.value);
    updateLabelPosition();
  }
});

const labelStyle = computed(() => {
  return {
    position: 'absolute',
    bottom: '30px', /* Adjust this value to position the label below the slider handle */
    transform: 'translateX(-50%)'
  };
});
</script>

<style scoped>
.range-container {
  width: 100%;
}

.range-label {
  position: absolute;
  left: 50%;
  bottom: 0px; /* Adjust this value to position the label below the slider handle */
  transform: translateX(-50%);
  padding: 2px 5px;
  border-radius: 3px;
  pointer-events: none;
  color: var(--s-palette-gray-600);
}

/* Range Track */
.rangeInput {
  width: 100%;
  height: 20px; /* Adjust this value to change the height of the track */
  background: linear-gradient(to right, #FFE283 0%, #FFE283 50%, #ececec 50%, #ececec 100%);
  border-radius: 8px;
  outline: none;
  transition: background 450ms ease-in;
  -webkit-appearance: none;
  accent-color: #ffca1d;
}

/* Webkit (Chrome, Safari) */
.rangeInput::-webkit-slider-thumb {
  position: relative;
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px; /* Adjust this value to change the height of the thumb */
  background: #4CAF50;
  cursor: pointer;
  border-radius: 50%;
  margin-top: -2.5px; /* Adjust this value to vertically center the thumb */
}

/* Firefox */
.rangeInput::-moz-range-thumb {
  width: 25px;
  height: 25px; /* Adjust this value to change the height of the thumb */
  background: #4CAF50;
  cursor: pointer;
  border-radius: 50%;
}
</style>
