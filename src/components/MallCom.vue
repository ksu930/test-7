<template>
  <div class="border-black border-2 w-[360px] h-full flex flex-col box-border">
    <div class="my-auto">Mall Component</div>
    <FooterCom />
  </div>
</template>

<script>
import FooterCom from "./global/FooterCom.vue";
export default {
  components: {
    FooterCom: FooterCom,
  },
};
</script>

<style></style>
