<template>
  <div class="range-container">
    <input type="range" :value="value"
           min="0" max="10"
           @input="handleInput"
           class="rangeInput"
           ref="rangeInput"
    />
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
};

const updateBackground = (target) => {
  let gradientValue = 100 / target.max;
  target.style.background = `linear-gradient(to right, var(--s-semantic-primary-background-normal-default) 0%, var(--s-semantic-primary-background-normal-default) ${gradientValue * target.value}%, var(--s-semantic-primary-background-light-default) ${gradientValue * target.value}%, var(--s-semantic-primary-background-light-default) 100%)`;
};


onMounted(() => {
  updateBackground(rangeInput.value);
});

watch(() => props.value, (newValue) => {
  if (rangeInput.value) {
    rangeInput.value.value = newValue;
    rangeValue.value = newValue;
    updateBackground(rangeInput.value);
  }
});

</script>

<style lang="scss" scoped>
.range-container {
  width: 100%;
}


/* Range Track */
.rangeInput {
  position: relative;
  width: 100%;
  height: 4px; /* Adjust this value to change the height of the track */
  background: linear-gradient(to right, #FFE283 0%, #FFE283 50%, #ececec 50%, #ececec 100%);
  border-radius: 8px;
  outline: none;
  transition: background 450ms ease-in;
  -webkit-appearance: none;
  accent-color: #ffca1d;
  &:before{
    position: absolute;
    content: '';
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 23px;
    height: 23px;
    background-color: red;
    border-radius: 50%;
    border: 3px solid var(--s-palette-main-lighten-white);
    background: var(--s-semantic-primary-background-normal-default);
  }
}

/* Webkit (Chrome, Safari) */
.rangeInput::-webkit-slider-thumb {
  position: relative;
  -webkit-appearance: none;
  appearance: none;
  border: 3px solid var(--s-palette-main-lighten-white);
  width: 23px;
  height: 23px; /* Adjust this value to change the height of the thumb */
  background: var(--s-semantic-primary-background-normal-default);
  cursor: pointer;
  border-radius: 50%;
}

.rangeInput::-webkit-slider-thumb::before {
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  width: 20px;
  height: 20px;
  background-color: red;
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
