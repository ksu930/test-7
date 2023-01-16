<template>
  <div
    class="border-gray-200 w-[360px] h-full min-h-screen flex flex-col box-border"
  >
    <HeaderCom title="전체보기" />

    <div class="flex w-full h-10 pl-5 text-sm">
      <div
        class="flex items-center px-2 border-b-2"
        :class="
          subTitleClickState === 0
            ? 'font-bold text-beRed border-b-2 border-beRed'
            : 'border-transparent'
        "
        @click="onClickTab(0)"
      >
        홈
      </div>
      <div
        class="flex items-center h-full px-2 gap-1 border-b-2"
        :class="
          subTitleClickState === 1
            ? 'font-bold text-beRed border-b-2 border-beRed'
            : 'border-transparent'
        "
        @click="onClickTab(1)"
      >
        <div class="flex items-center h-full">한정수량</div>
        <img class="w-[18px] h-[18px]" src="../../assets/new.webp" />
      </div>
      <div
        class="flex items-center px-2 border-b-2"
        :class="
          subTitleClickState === 2
            ? 'font-bold text-beRed border-b-2 border-beRed'
            : 'border-transparent'
        "
        @click="onClickTab(2)"
      >
        출산가방
      </div>
      <div
        class="flex items-center px-2 gap-1 border-b-2"
        :class="
          subTitleClickState === 3
            ? 'font-bold text-beRed border-b-2 border-beRed'
            : 'border-transparent'
        "
        @click="onClickTab(3)"
      >
        <div class="flex items-center h-full">혜택존</div>
        <img class="w-[18px] h-[18px]" src="../../assets/new.webp" />
      </div>
    </div>

    <div class="w-full h-full min-h-screen">
      <swiper
        class="mySwiper h-full min-h-screen w-full"
        :modules="modules"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          class="h-full min-h-screen w-full flex justify-center items-center bg-slate-400"
          >Slide 1
        </swiper-slide>
        <swiper-slide
          class="h-full min-h-screen flex justify-center items-center bg-slate-400"
          >Slide 2</swiper-slide
        >
        <swiper-slide
          class="h-full min-h-screen flex justify-center items-center bg-slate-400"
        >
          <div class="w-full h-full min-h-screen box-border">aaaaaa</div>
        </swiper-slide>
        <swiper-slide
          class="h-full min-h-screen flex justify-center items-center bg-slate-400"
          >Slide 4</swiper-slide
        >
      </swiper>
    </div>
  </div>
</template>

<script>
import HeaderCom from '../Global/HeaderCom.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper';
import 'swiper/css';

export default {
  components: {
    HeaderCom: HeaderCom,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      subTitleClickState: 0,
      swipeRef: null,
      modules: [Autoplay],
    };
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
      this.swipeRef = swiper;
    },
    onSlideChange(swiper) {
      this.subTitleClickState = swiper.activeIndex;
    },
    onClickTab(index) {
      this.swipeRef?.slideTo(index, 200);
      this.subTitleClickState = index;
    },
  },
};
</script>

<style></style>
