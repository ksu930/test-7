<template>
  <div class="flex items-center h-[56px] box-border">
    <img
      class="mr-auto ml-[20px] my-[16px] w-[20px] h-[20px] cursor-pointer box-border"
      @click="$router.push('/')"
      alt="button_back"
      src="../../assets/button_back.png"
    />
    <div class="mx-auto text-[16px] font-bold">{{ title }}</div>
    <img
      class="w-[20px] h-[20px]"
      src="../../assets/glasses.png"
      alt="glasses"
    />
    <img
      class="ml-[18px] mr-[20px] w-[20px] h-[20px]"
      src="../../assets/cart.png"
      alt="glasses"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>
