<template>
    <div class="tmp1">
      <nav-bar title="新闻列表"/>
      <div class="demo">
        <ul>
          <li v-for="newsList in newsLists" :key="newsList.uniquekey">
            <router-link :to="{name: 'news.detail',query:{id:newsList.uniquekey}}">
              <img  class="img" :src="newsList.thumbnail_pic_s" alt="">
              <div class="img_right">
                <span>{{ newsList.title }}</span>
                <div class="news-desc">
                  <p>来源：{{ newsList.author_name }}</p>
                  <p>时间：{{ newsList.date | convertTime}}</p>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'NewsList',
  data () {
    return {
      newsLists: [ ]
    }
  },
  created () {
    this.$axios.get('/api/toutiao/index?type=shehui&key=c1bc7f75343680b1d4b2fb446ee3a3a4')
      .then(res => {
        this.newsLists = res.data.result.data
        console.log(this.newsLists)
      })
      .catch(err => console.log('新闻列表错误', err))
  }
}
</script>

<style scoped>
  .demo ul li{
    margin-bottom: 0.25rem;
  }
.demo ul li a{
  display: flex;
}
  .img{
    width:2.00rem;
    height: 2.00rem;
  }
  .img_right{
    width:5.00rem ;
    height: 2.00rem;
    padding-left: 0.20rem;
  }
  .img_right span{
    display: block;
    font-weight: bold;
    width: 5.00rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    font-size: 0.36rem;
  }
  .news-desc{
    font-size: 0.20rem;
    margin-top: 0.80rem;
  }
</style>
