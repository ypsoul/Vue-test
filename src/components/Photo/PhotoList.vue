<template>
  <div>
    <nav-bar title="图文列表"></nav-bar>
    <!--<div  class="swiper-container classid">-->
      <!--<div class="swiper-wrapper">-->
        <!--<div v-for="category in categorys" :key="category.id" class="swiper-slide">-->
          <!--<a href="javascript:void (0)" @click="loadImgByCategoryId(category.id)" >{{category.catalog}}</a>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <div class="photo-header">
      <ul>
        <li v-for="category in categorys" :key="category.id">
          <a href="javascript:void (0)" @click="loadImgByCategoryId(category.id)" >{{category.catalog}}</a>
        </li>
      </ul>
    </div>
    <div>
      <ul class="photomark">
        <li v-for="img in imgs" :key="img.id">
          <router-link :to="{name:'photo.detail',params:{id:img.id} }">
            <!--图片不更新-->
            <img v-lazy="img.img" alt="" :src="img.img">
            <div class="photomarkl">
              <p>{{ img.title }}</p>
              <p>{{ img.tags | convertStr(30)}}</p>
              <p>{{ img.bytime }}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgs: [],
      categorys: []
    }
  },
  // 路由复用，但参数改变触发
  beforeRouteUpdate (to, from, next) {
    console.log(to)
    this.loadImgById(to.params.categoryId)
    next()
  },
  created () {
    // 获取路由参数 拼接url字符串
    let categoryId = this.$route.params.categoryId
    this.loadImgById(categoryId)
    this.$axios.get('/test/goodbook/catalog?dtype=&key=b6e725b01bbe5f9520b8185b7c6efbff')
      .then(res => {
        this.categorys = res.data.result
        console.log(this.categorys)
      }).catch(err => console.log('错误', err))
  },
  methods: {
    loadImgByCategoryId (categoryId) {
      // console.log(categoryId)
      this.$router.push({
        params: {categoryId: categoryId}
      })
      // console.log(this.$route.params.categoryId)
    },
    loadImgById (id) {
      this.$axios.get('/test/goodbook/query?catalog_id=' + id + '&pn=&rn=&dtype=&key=b6e725b01bbe5f9520b8185b7c6efbff')
        .then(res => {
          this.imgs = res.data.result.data
        }).catch(err => console.log('错误', err))
    }
  }
}
</script>

<style scoped>
  .photo-header li {
    list-style: none;
    display: inline-block;
    margin-left: 10px;
  }

  .photo-header ul {
    /*强制不换行*/
    white-space: nowrap;
    overflow-x: auto;
    padding-left: 0px;
    margin: 5px;
    font-size:0.20rem;
  }
  .photo-header ul li a{
    font-size:0.20rem;
  }
  image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
  .photomark{
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  .photomark li{
    width: 48%;
    height: 4.00rem;
    margin-bottom: 20px;
    margin-left: 1%;
  }
  .photomark li a{
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    font-size: 0.24rem;
  }
  .photomark li a img{
    width: 100%;
    height: 100%;
  }
  .photomarkl{
    position: absolute;
    bottom: 0;
    height: 2rem;
    width: 100%;
    padding: 20px 10px;
    background: rgba(51, 51, 51,0.5);
    color: white;
  }
  .photomarkl p{
    color: white;
  }
</style>
