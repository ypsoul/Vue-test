import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Search from '@/components/Search/Search'
import Shopcart from '@/components/Shopcart/Shopcart'
import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'
import PhotoList from '@/components/Photo/PhotoList'
import PhotoDetail from '@/components/Photo/PhotoDetail'

Vue.use(Router)
export default new Router({
  routes: [
    // 底部路由
    {
      path: '/',
      redirect: {name: 'home'}
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart
    },
    // 新闻列表
    {
      name: 'news.list',
      path: '/news/list',
      component: NewsList
    },
    {
      name: 'news.detail',
      path: '/news/detail',
      component: NewsDetail
    },
    // 图文列表
    {
      name: 'photo.list',
      path: '/photo/list/:categoryId',
      component: PhotoList
    },
    {
      name: 'photo.detail',
      path: '/photo/detail/:vategoryId',
      component: PhotoDetail
    }
  ]
})
