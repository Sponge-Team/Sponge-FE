<template>
  <div class="flex flex-justify-between flex-col">
    <div class="pl-5 pr-5 pt-3">
      <div>
        <div class="s-heading-00">로그인을 위해 <br> 아이디와 비밀번호를 입력해주세요.</div>
        <div class="pl-1 pr-1 pt-5">
          <LoginInputItem title="아이디" :errorMessage="idError">
            <template #body-content>
              <div class="flex">
                <Input
                    shape="square"
                    color="secondary"
                    placeholder="아이디"
                    @changeInput="(data)=>{id = data}"
                    :value="id"
                />
              </div>
            </template>
          </LoginInputItem>
          <LoginInputItem title="비밀번호" :errorMessage="pwError">
            <template #body-content>
              <div class="flex">
                <Input
                    inputType="password"
                    shape="square"
                    color="secondary"
                    placeholder="비밀번호"
                    @changeInput="(data)=>{pw = data}"
                    :value="pw"
                />
              </div>
            </template>
          </LoginInputItem>
        </div>
        <div class="mb-5 mt-5">
          <Button class="w100%" :size="'l'">
            <template #default>
              로그인
            </template>
          </Button>
        </div>

        <div id="G_OAuth_btn" class="google-btn"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Input from '@/components/core/Input/Input.vue';
import LoginInputItem from "@/components/expanded/LoginInputItem.vue";
import Button from "@/components/core/Button/Button.vue";
import store from "@/store/index.js";
import { useRouter } from 'vue-router';

const props = defineProps({
  userType: {
    required: true
  }
})

const router = useRouter();

const id = ref('');
const idError = ref('');
const pw = ref('');
const pwError = ref('');
const googleUser = ref(null);

onMounted(() => {
  googleInit();
});

const googleInit = () => {
  const google = window.google;

  google.accounts.id.initialize({
    client_id: "96645396031-la16osh4o4au2utriue68opuhk9tlat9.apps.googleusercontent.com",
    callback: googleCallback,
  });

  // 자동 로그인을 방지하기 위해 AutoSelect를 비활성화
  google.accounts.id.disableAutoSelect();

  google.accounts.id.renderButton(
      document.getElementById("G_OAuth_btn"),
      {
        theme: "filled_white",
        size: "large",
        text: "signup_with",
        shape: "pill",
        logo_alignment: "left",
        locale: "ko-KR",
      }
  );

  google.accounts.id.prompt();  // 계정 선택 프롬프트 강제 호출
};

const googleCallback = (res) => {
  if (!res || !res.credential) {
    console.error("No credential received from Google");
    return;
  }else{
    googleUser.value = res.credential;
    console.log(res)
    store.commit('SET_GOOGLE', {google: googleUser.value, userType: props.userType});
    router.push({ path: '/' });
  }
};

const logout = () => {
  google.accounts.id.disableAutoSelect();
  googleUser.value = null;
};
</script>
