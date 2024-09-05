<template>
  <div v-if="isActive === true" class="position-absolute" :style="style" v-click-outside="handleClickOutside">
    <div style="width: max-content;">
      <p v-for="(item, i) in list" :key="'dropdownList'+i" class="p3 s-body-01"  @click="selectedItem(item.value)">{{item.name}}</p>
    </div>
  </div>
</template>
<script setup>
  import {computed} from "vue";
  import {vClickOutside} from "click-outside-vue3"

  const props = defineProps({
    list: {
      type: Array,
      required: true
    },
    range: {
      type: String,
      default: 'right'
    },
    isActive: {
      type: Boolean,
      default: false
    }
  })

  const emit = defineEmits(['selectedItem'])

  const style = computed(() => {
    let {range} = props

    let positionStyle = range === "right" ? { right: "0" } : { left: "0" };
    return {
      ...positionStyle,
      top: "25px",
      background: 'var(--s-palette-main-lighten-white)',
      border: '1px solid var(--s-semantic-secondary-border-default)',
      borderRadius: '5px'
    };
  })

  const selectedItem = (item) => {
    emit('selectedItem', item)
  }

  const handleClickOutside = () => {
    props.isActive.value = false;
  };

</script>
