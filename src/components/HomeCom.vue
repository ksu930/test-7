<template>
  <div
    class="border-black border-2 w-[360px] h-full min-h-screen flex flex-col box-border"
  >
    <div class="my-auto">Home Component</div>
    <FooterCom />
  </div>
</template>

<script>
import FooterCom from '../components/Global/FooterCom.vue';
export default {
  components: {
    FooterCom: FooterCom,
  },
};
</script>

<style></style>
