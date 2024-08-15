import { ref } from "vue";

export function useDialog() {
  const isActive = ref(false);
  const translateY = ref(window.innerHeight);

  const openModal = () => {
    isActive.value = true;
    translateY.value = 0; // 모달이 화면 위로 슬라이딩되어 나타남
  };

  const closeModal = () => {
    isActive.value = false;
    translateY.value = window.innerHeight; // 초기화
  };

  return {
    isActive,
    translateY,
    openModal,
    closeModal,
  };
}
