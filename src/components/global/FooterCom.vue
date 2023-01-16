<template>
  <div class="flex justify-evenly gap-2 box-border text-sm">
    <div
      class="border-black border-2 cursor-pointer"
      @click="$router.push('/recentproduct')"
    >
      RecentProduvt
    </div>
    <div
      class="border-black border-2 cursor-pointer"
      @click="$router.push('/search')"
    >
      Search
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
</template>

<script>
export default {};
</script>

<style></style>
