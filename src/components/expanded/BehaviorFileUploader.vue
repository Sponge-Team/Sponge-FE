<template>
  <div class="uploader-container">
    <div v-if="imageData" class="media-container" :style="mediaStyles">
      <template v-if="isImage">
        <img :src="imageData" alt="Uploaded Image Preview" class="media-preview" />
      </template>
      <template v-else>
        <video controls class="media-preview">
          <source :src="imageData" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </template>
    </div>
    <div class="upload-button-container">
      <label for="file">
        <span>
          <img src="@/lib/assets/svg/ic_camera.svg" alt="파일 업로드 버튼">
        </span>
      </label>
      <input type="file" name="file" id="file" :disabled="disabled" @change="onFileChange" accept="image/*,video/*" style="display: none" />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: value => ['md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const mediaStyles = computed(() => {
  let { size } = props;
  return {
    borderRadius: '8px',
    overflow: 'hidden',
    marginTop: size === 'md' ? '0' : '10px',
    background: size === 'md' ? 'var(--s-palette-main-lighten-white)' : 'var(--s-palette-gray-200)',
  };
});

const emit = defineEmits(['fileUpload']);
const imageData = ref(null);
const isImage = ref(true);

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      imageData.value = e.target.result;
      isImage.value = file.type.startsWith('image/');
      emit('fileUpload', imageData.value);
    };

    reader.readAsDataURL(file);
  } else {
    alert('Please upload a valid image or video file.');
  }
};
</script>

<style scoped>
.uploader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.media-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.media-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.upload-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #D9D9D9;
}

.upload-button-container img {
  width: 20px;
  height: 20px;
}
</style>
