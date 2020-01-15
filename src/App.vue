<template>
  <div id="app">
<van-tabbar route>
  <van-tabbar-item icon="home-o" :to="{name:'Home'}">首页</van-tabbar-item>
  <van-tabbar-item icon="fire-o" :to="{name:'Hot'}">热映</van-tabbar-item>
  <van-tabbar-item icon="bag" :to="{name:'Fav'}">收藏</van-tabbar-item>
  <van-tabbar-item icon="user-o" :to="{name:'Me'}">我的</van-tabbar-item>
</van-tabbar>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //active: 0
    }
  }
}
</script>

<style>

</style>
