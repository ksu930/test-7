<template>
  <div
    class="border-[1px] border-gray-200 w-[360px] h-full flex flex-col box-border"
  >
    <HeaderCom />
    <div class="w-full h-full flex flex-row flex-wrap bg-gray-600">
      <div class="flex flex-col m-[20px] w-[150px] h-[300px] bg-gray-400">
        <div class="w-[150px] h-[150px] rounded-md">
          <img
            class="w-[150px] h-[150px] rounded-md"
            src="../assets/img.jpg"
            alt="img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from "./global/HeaderCom.vue";
export default {
  components: {
    HeaderCom: HeaderCom,
  },
};
</script>

<style></style>
