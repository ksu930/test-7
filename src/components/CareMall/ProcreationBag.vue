<template>
  <div class="flex flex-col w-full h-full min-h-screen items-center box-border">
    <div
      class="flex relative my-[10px] w-[320px] h-[46px] rounded-[23px] bg-beLightRed box-border"
    >
      <div
        class="flex justify-center items-center w-[160px] h-full rounded-[23px] bg-beLightRed text-xs leading-7 tracking-[-0.4px] font-bold cursor-pointer transition delay-100"
        :class="
          materialState === 0
            ? 'bg-beRed text-white'
            : 'bg-beLightRed text-beMiddleRed'
        "
        @click="materialState = 0"
      >
        출산준비물
      </div>
      <div
        class="flex justify-center items-center w-[160px] h-full rounded-[23px] bg-beLightRed text-xs leading-7 tracking-[-0.4px] font-bold cursor-pointer transition delay-100"
        :class="
          materialState === 1
            ? 'bg-beRed text-white'
            : 'bg-beLightRed text-beMiddleRed'
        "
        @click="materialState = 1"
      >
        입소준비물
      </div>
    </div>

    <div
      class="flex flex-col w-full h-full min-h-screen items-center box-border"
      v-if="materialState === 0"
    >
      <div
        class="flex items-center py-[10px] px-[20px] w-full h-[40px] text-[14px] leading-[14px] tracking-[-0.35px] gap-[20px] box-border"
      >
        <div
          class="flex items-center w-full h-[40px] text-[14px] leading-[14px] tracking-[-0.35px] gap-[20px] bg-gradient-to-l box-border"
        >
          <div>임산부케어</div>
          <div>엄마영양제</div>
          <div>임산부용품</div>
          <div>임부복</div>
          <div
            class="absolute flex items-center justify-center right-[20px] z-10 w-[20px] h-[20px]"
          >
            ∨
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col w-full h-full min-h-screen items-center box-border"
      v-if="materialState === 1"
    >
      <div
        class="flex items-center justify-start py-[10px] px-[20px] w-full h-[40px] text-[12px] leading-[14px] tracking-[-0.35px] text-beGray4 box-border"
      >
        조리원 입소 준비물, 베럽이 한 눈에 정리해드릴게요
      </div>
      <div
        class="relative flex justify-center items-center w-[320px] h-[180px] rounded-[6px]"
      >
        <Swiper
          class="flex w-full h-full justify-center items-center rounded-[6px]"
          @touchStart="(swiper, event) => event.stopPropagation()"
          @swiper="swiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide
            class="flex w-full h-full justify-center items-center bg-slate-300"
            v-for="product in products"
            :key="product.id"
            >{{ product.title }}</swiper-slide
          >
        </Swiper>
        <div
          class="absolute flex justify-center items-center w-[110px] h-[27px] right-0 bottom-0 z-10 text-[12px] rounded-[6px] text-white box-border bg-beRed"
        >
          {{ thisPage + 1 }}/{{ allPage }} 전체보기
        </div>
      </div>
      <div
        class="flex items-center w-full h-[24px] my-[20px] px-[20px] box-border"
      >
        <img class="w-[22px] h-[22px] mr-[2px]" src="../../assets/basket.png" />
        <div class="text-[14px] font-bold">입소 전 꼭 챙겨두세요!</div>
      </div>
      <div class="w-full px-[20px]">
        <Swiper
          :slides-per-view="4"
          :modules="modules"
          :freeMode="{ enabled: true, minimumVelocity: 0.1, momentum: false }"
          @touchStart="(swiper, event) => event.stopPropagation()"
        >
          <swiper-slide
            class="cursor-pointer"
            v-for="product in products"
            :key="product.id"
            @click="swipeClickState = product.id"
          >
            <div class="w-[70px]">
              <img
                class="w-full h-[70px] rounded-[6px] border-solid border-2 border-beGray3"
                :class="swipeClickState === product.id ? 'border-beRed2' : null"
                :src="product.image"
              />
              <div
                class="flex justify-center items-center w-full h-17px text-[12px] font-bold"
              >
                {{ product.title }}
              </div>
            </div>
          </swiper-slide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import api from '../../api/api';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      materialState: 0,
      swipeClickState: 0,
      modules: [FreeMode],
      products: [],
      allPage: 0,
      thisPage: 0,
    };
  },
  methods: {
    swiper(swiper) {},
    onSlideChange(swiper) {
      this.thisPage = swiper.realIndex;
    },
  },
  async created() {
    const { data } = await api.get('/users');
    this.products = data.data;
    this.allPage = data.data.length;
  },
};
</script>

<style></style>
