<template>
  <div class="border-gray-200 w-[360px] h-full flex flex-col box-border">
    <HeaderCom />
    <div
      class="w-full h-full flex flex-row flex-wrap justify-between box-border p-[20px] gap-[20px]"
    >
      <div
        class="flex flex-col w-[150px] h-fit box-border"
        v-for="(a, i) in data"
        :key="a[i]"
      >
        <div class="w-[150px] h-[150px] rounded-md box-border">
          <img
            class="w-[150px] h-[150px] rounded-md box-border"
            :src="a.image"
            alt="img"
          />
        </div>
        <div
          class="relative top-[-30px] right-[-120px] w-[20px] h-[0] box-border"
          v-if="!a.like"
        >
          🤍
        </div>

        <div
          class="relative top-[-30px] right-[-120px] w-[20px] h-[0] box-border"
          v-if="a.like"
        >
          ❤️
        </div>
        <div class="mt-[8px]">
          <div class="text-xs tracking-[-0.3px] text-slate-400 box-border">
            {{ a.title }}
          </div>
          <div class="mt-[4px] text-xs tracking-[-0.3px] box-border">
            {{ a.subtitle }}
          </div>
          <div
            class="flex flex-row gap-[4px] mt-[2px] text-sm tracking-[-0.3px] text-beGray2 box-border"
          >
            <div class="font-bold text-beRed box-border">{{ a.discount }}</div>
            <div>{{ a.afterprice }}</div>
            <div
              class="font-bold text-[10px] text-beGray2 line-through box-border"
            >
              {{ a.beforeprice }}
            </div>
          </div>
          <div
            class="flex flex-row gap-[4px] mt-[8px] text-sm tracking-[-0.3px] text-slate-400 box-border"
          >
            <div
              class="flex justify-center w-[46px] h-[18px] text-[10px] text-beGray rounded-md bg-beGray3 tracking-[-0.3px] box-border"
            >
              무료배송
            </div>
            <div
              class="flex justify-center w-[58px] h-[18px] rounded-md text-[10px] text-center text-beLightGray border-solid border-beLightGray border-[1px] tracking-[-0.3px] pt-[-6px] box-border"
            >
              조리원 전용
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from "./global/HeaderCom.vue";
import data from "../assets/data";

export default {
  components: {
    HeaderCom: HeaderCom,
  },
  data() {
    return {
      data: data,
    };
  },
};
</script>

<style></style>
