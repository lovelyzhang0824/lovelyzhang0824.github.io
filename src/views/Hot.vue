<template>
  <div class="hot">
    <van-card
    v-for="item in movies"
    :key="item.id"
  :desc="item.commonSpecial"
  :title="item.t" 
  :thumb="item.img"
>
  <div slot="tags">
    <van-tag plain type="danger">{{item.actors}}</van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini">详情</van-button>
    <van-button type="danger" size="mini">收藏</van-button>
  </div>
</van-card>
  </div>
</template>


<script>
import {allHotMovies}from'../services/movie'
export default{
    data(){
        return{
            movies:[]
        }
    },
   async created(){
       const result=await allHotMovies()
       this.movies=result.data.ms


    }
}
</script>