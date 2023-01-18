<template>
  <div class="border-gray-200 w-[360px] h-full flex flex-col box-border">
    <HeaderCom title="최근 들어온 상품" />

    <div
      class="w-full h-full flex flex-row flex-wrap justify-between box-border p-[20px] gap-[20px]"
    >
      <div
        class="flex flex-col w-[150px] h-fit box-border"
        v-for="product in products"
        :key="product.id"
      >
        <div class="w-[150px] h-[150px] rounded-md box-border">
          <img
            class="w-[150px] h-[150px] rounded-md box-border"
            :src="product.image"
            alt="img"
          />
        </div>
        <div
          class="relative top-[-30px] right-[-120px] w-[20px] h-[0] box-border cursor-pointer"
          v-if="!product.isLike"
          @click="onLikeChange(product.id)"
        >
          🤍
        </div>

        <div
          class="relative top-[-30px] right-[-120px] w-[20px] h-[0] box-border cursor-pointer"
          v-else
          @click="onLikeChange(product.id)"
        >
          ❤️
        </div>
        <div class="mt-[8px]">
          <div class="text-xs tracking-[-0.3px] text-slate-400 box-border">
            {{ product.title }}
          </div>
          <div class="mt-[4px] text-xs tracking-[-0.3px] box-border">
            {{ product.subTitle }}
          </div>
          <div
            class="flex flex-row gap-[4px] mt-[2px] text-sm tracking-[-0.3px] text-beGray2 box-border"
          >
            <div class="font-bold text-beRed box-border">
              {{ product.discount }}%
            </div>
            <div>{{ product.afterPrice.toLocaleString() }}원</div>
            <div
              class="font-bold text-[10px] text-beGray2 line-through box-border"
            >
              {{ product.beforePrice.toLocaleString() }}원
            </div>
          </div>
          <div
            class="flex flex-row gap-[4px] mt-[8px] text-sm tracking-[-0.3px] text-slate-400 box-border"
          >
            <div
              class="flex justify-center w-[46px] h-[18px] text-[10px] text-beGray rounded-md items-center bg-beGray3 tracking-[-0.3px] box-border"
            >
              무료배송
            </div>
            <div
              class="flex justify-center w-[58px] h-[18px] rounded-md text-[10px] items-center text-beLightGray border-solid border-beLightGray border-[1px] tracking-[-0.3px] pt-[-6px] box-border"
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
import HeaderCom from '../Global/HeaderCom.vue';
import data from '../../assets/data';
import api from '../../api/api';
export default {
  components: {
    HeaderCom: HeaderCom,
  },
  data() {
    return {
      products: [],
      isBoolean: true,
    };
  },
  methods: {
    onLikeChange(id) {
      this.products.forEach((product) => {
        if (product.id === id) {
          product.isLike = !product.isLike;
          return false;
        }
      });
      // let index = this.products.findIndex((product) => product.id === id);
      // this.products[index].isLike = !this.products[index].isLike;
    },
    async getData() {
      let { data } = await api.get('/users');
      this.products = data.data;
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style></style>
