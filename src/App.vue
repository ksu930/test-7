<script></script>
<template>
  <div class="w-full h-screen flex justify-center text-lg">
    <div class="border-black border-2 w-96 h-full flex flex-col box-border">
      <div class="my-auto">
        <RouterView />
      </div>
      <div class="flex justify-evenly gap-2 box-border">
        <div
          class="border-black border-2 cursor-pointer"
          @click="$router.push('/')"
        >
          Home
        </div>
        <div
          class="border-black border-2 cursor-pointer"
          @click="$router.push('/search')"
        >
          About
        </div>
        <div
          class="border-black border-2 cursor-pointer"
          @click="$router.push('/mall')"
        >
          Mall
        </div>
        <div
          class="border-black border-2 cursor-pointer"
          @click="$router.push('/event')"
        >
          Event
        </div>
        <div
          class="border-black border-2 cursor-pointer"
          @click="$router.push('/mypage')"
        >
          Mypage
        </div>
      </div>
    </div>
  </div>
</template>
