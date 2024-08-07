<template>
  <div>
    <div>
      <span>{{label}}</span>
      <span v-if="required === true">*</span>
    </div>
    <span class="flex">
      <input :type="type" :value="value" :placeholder="placeholder" @input="inpInputEvt" @change="inpChangeEvt"
             :readonly="state==='disabled'" :class="[style, state, size, shape, color]"

      />
      <slot name="icon"></slot>
    </span>
  </div>
</template>
<script setup>
const props = defineProps({
  placeholder : {
    type: String,
  },
  type : {
    type: String,
    default: 'text',
    validator: function (value) {
      return ['text', 'number', 'file', 'range'].indexOf(value) !== -1
    }
  },
  style: {
    type: String,
    default: 'text',
    validator: function (value) {
      return ['filled', 'outlined', 'text'].indexOf(value) !== -1
    }
  },
  state : {
    type: String,
    default: 'enabled',
    validator: function (value) {
      return ['enabled', 'disabled', 'error'].indexOf(value) !== -1
    }
  },
  size : {
    type: String,
    default: 'm',
    validator: function (value) {
      return ['sm', 'm', 'l', 'xl'].indexOf(value) !== -1
    }
  },
  shape : {
    type: String,
    default: 'circle',
    validator: function (value) {
      return ['square', 'rounded', 'circle'].indexOf(value) !== -1
    }
  },
  color : {
    type: String,
    default: 'primary',
    validator: function (value) {
      return ['primary', 'secondary', 'tertiary'].indexOf(value) !== -1
    }
  },
  value : {
    type: Object,
  },
  model: {
    type: Object,
  },
  label : {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['updateInput', 'changeInput'])
const inpChangeEvt = (e) => {
  emit('updateInput', e.target.value)
}
const inpInputEvt = (e) => {
  emit('updateInput', e.target.value)
}
</script>
