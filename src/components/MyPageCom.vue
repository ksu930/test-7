<script>
import FooterCom from "./global/FooterCom.vue";
export default {
  components: {
    FooterCom: FooterCom,
  },
};
</script>

<template>
  <div
    class="border-black border-2 w-[360px] h-full min-h-screen flex flex-col box-border"
  >
    <div class="my-auto">Mypage Component</div>
    <FooterCom />
  </div>
</template>
