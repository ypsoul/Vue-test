<template>
    <div>
      <nav-bar title="新闻详情"></nav-bar>
      <h2>{{ newsDetail.title }}</h2>
      <p>来源：{{ newsDetail.author_name }} 时间：{{ newsDetail.date }}</p>
      <!--<div>-->
        <!--{{ newsList.author_name }}-->
      <!--</div>-->
      <p>详情</p>
      <!--<comment :cid="$route.query.id"></comment>-->
    </div>
</template>

<script>
export default {
  name: 'NewsDetail',
  data () {
    return {
      newsDetail: {}
    }
  },
  created () {
    let id = this.$route.query.id
    console.log(id)
    this.$axios.get('/api/toutiao/index?type=shehui&key=c1bc7f75343680b1d4b2fb446ee3a3a4&id=' + id)
      .then(res => {
        this.newsDetail = res.data.result.data[0]
        // this.newsDetail = res
        console.log(this.newsDetail)
      })
      .catch(err => console.log('新闻详情页错误', err))
  }
}
</script>

<style scoped>
  h2{
    font-size: 18px;
    padding: 20px 20px;
  }
  p{
    font-size: 14px;
    text-align: center;
  }
</style>
