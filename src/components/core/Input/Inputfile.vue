<template>
  <div class="position-relative">
    <div class="flex flex-justify-center flex-items-center position-relative"
         :style="imgStyles">
      <img v-if="!imageData" src="@/lib/assets/svg/ic_user.svg" alt="유저 기본 이미지" style="width: 28px; height: 28px;">
      <img v-if="imageData" :src="imageData" alt="Uploaded Image Preview" style="width: auto; height: 100%;" />
    </div>
    <div class="flex flex-justify-center flex-items-center position-absolute" :style="styles">
      <label for="file">
      <span>
        <img src="@/lib/assets/svg/ic_camera.svg" alt="파일 업로드 버튼">
      </span>
      </label>
      <input type="file" name="file" id="file" :disabled="disabled" @change="onFileChange" accept="image/*" style="display: none"/>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue';
import Badge from "@/components/core/Badge/Badge.vue";

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: value => ['md', 'lg'].includes(value)
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
  },
  disabled: {
    type: Boolean,
    default: false,
  }
});

const styles = computed(() => {
  let { size } = props

  return {
    width: size === 'md' ? '30px' : '45px',
    height: size === 'md' ? '30px' : '45px',
    bottom: 0,
    right: 0,
    borderRadius: '100px',
    background: '#D9D9D9',
  };
});

const imgStyles = computed(()=>{
  let { size } = props
  return{
    width: size === 'md' ? '82px' : '117px',
    height: size === 'md' ? '82px' : '117px',
    borderRadius: '100px',
    overflow: 'hidden',
    marginTop:  size === 'md' ? '0' : '10px',
    background: size === 'md' ? 'var(--s-palette-main-lighten-white)' : 'var(--s-palette-gray-200)',
  }
})

const imageData = ref(null); // 이미지 데이터를 저장하는 ref

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();

    reader.onload = (e) => {
      imageData.value = e.target.result; // base64 데이터로 변환된 이미지
    };

    reader.readAsDataURL(file); // 파일을 base64 형식으로 읽기
  } else {
    alert('Please upload a valid image file.');
  }
};
</script>

<style scoped>
textarea{
  background-color: transparent;
  width: 100%;
  resize: none;
}
textarea::placeholder {
  color: var(--s-semantic-placeholder-font-normal-default);
}

textarea:focus{
  outline: none;
}
</style>
