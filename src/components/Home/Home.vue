<template>
    <div>
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(time,index) in homebanner.slice(0,5)" :key="index">
          <img :src="time.thumbnail_pic_s" alt="">
        </mt-swipe-item>
      </mt-swipe>
      <div class="gnews">
        <my-ul>
          <my-li v-for="(innew,index) in innews" :key="index">
            <router-link :to="innew.router">
              <div :class="innew.className"></div>
            </router-link>
            <p>{{ innew.title }}</p>
          </my-li>
        </my-ul>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      homebanner: [ ],
      innews: [
        {className: 'news1',
          title: '新闻资讯',
          router:
            {name: 'news.list'}
        },
        {className: 'news2',
          title: '图文分享',
          router:
            { name: 'photo.list', params: {categoryId: 242} }},
        {className: 'news3',
          title: '产品展示',
          router:
            {name: 'news.list'}},
        {className: 'news4',
          title: '留言反馈',
          router:
            {name: 'news.list'}},
        {className: 'news5',
          title: '搜索资讯',
          router:
            {name: 'news.list'}},
        {className: 'news6',
          title: '联系我们',
          router:
            {name: 'news.list'}}
      ]
    }
  },
  created () {
    this.$axios.get('/api/toutiao/index?type=guoji&key=c1bc7f75343680b1d4b2fb446ee3a3a4')
      .then(res => {
        this.homebanner = res.data.result.data
        // console.log(res.data.result.data)
      })
      .catch(err => console.log('轮播图', err))
  }
}
</script>

<style scoped>
mt-swipe {
  height: 3.00rem;
}
.mint-swipe {
  height: 3.00rem;
}
.mint-swipe img {
  width: 100%;
  height: 100%;
}
.cms-news {
  width: 33.3%;
  text-align: center;
  font-size: 0.5rem;
  margin-bottom: 10px;
}
.news1 {
  display: block;
  height: 50px;
  width: 50px;
  margin: 0 auto;
  background: url("../../assets/img/tushow.png") center no-repeat;
  background-size: 100% 100%;
}
.news2 {
  display: block;
  height: 50px;
  width: 50px;
  margin: 0 auto;
  background: url("../../assets/img/find.png") center no-repeat;
  background-size: 100% 100%;
}
.news3 {
  display: block;
  height: 50px;
  width: 50px;
  margin: 0 auto;
  background: url("../../assets/img/shopcart.png") center no-repeat;
  background-size: 100% 100%;
}
.news4 {
  display: block;
  height: 50px;
  width: 50px;
  margin: 0 auto;
  background: url("../../assets/img/letter.png") center no-repeat;
  background-size: 100% 100%;
}
.news5 {
  display: block;
  height: 50px;
  width: 50px;
  margin: 0 auto;
  background: url("../../assets/img/search.png") center no-repeat;
  background-size: 100% 100%;
}
.news6 {
  display: block;
  height: 50px;
  width: 50px;
  margin: 0 auto;
  background: url("../../assets/img/contact.png") center no-repeat;
  background-size: 100% 100%;
}
</style>
