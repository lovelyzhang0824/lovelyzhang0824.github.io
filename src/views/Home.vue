<template>
  <div class="home">
<van-swipe :autoplay="3000" indicator-color="white">
  <van-swipe-item><img class="swiper-img" src="http://img11.360buyimg.com/pop/s1180x940_jfs/t1/100731/29/9582/90538/5e0f2a96E7443d9d8/0c0a650d42a4a5de.jpg.webp"></van-swipe-item>
  <van-swipe-item><img class="swiper-img" src="http://img12.360buyimg.com/pop/s1180x940_jfs/t1/94575/12/9272/78433/5e0d8aabE9e9502ff/d9ea5361060f0205.jpg.webp" alt=""></van-swipe-item>
  <van-swipe-item><img class="swiper-img" src="http://img11.360buyimg.com/pop/s1180x940_jfs/t1/100731/29/9582/90538/5e0f2a96E7443d9d8/0c0a650d42a4a5de.jpg.webp"></van-swipe-item>
  <van-swipe-item><img class="swiper-img" src="http://img12.360buyimg.com/pop/s1180x940_jfs/t1/94575/12/9272/78433/5e0d8aabE9e9502ff/d9ea5361060f0205.jpg.webp" alt=""></van-swipe-item>
  
</van-swipe>
<van-grid>
  <van-grid-item icon="photo-o" text="啦啦啦啦" />
  <van-grid-item icon="photo-o" text="嗯嗯嗯嗯" />
  <van-grid-item icon="photo-o" text="哦哦哦哦" />
  <van-grid-item icon="photo-o" text="哈哈哈哈" />
  <van-grid-item icon="photo-o" text="啦啦啦啦" />
  <van-grid-item icon="photo-o" text="嗯嗯嗯嗯" />
  <van-grid-item icon="photo-o" text="哦哦哦哦" />
  <van-grid-item icon="photo-o" text="哈哈哈哈" />
</van-grid>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  components: {
  
  }
}
</script>

<style scoped>
.swiper-img{
  width:100%;
  height: 200px;
}
</style>

