// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 配置minUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/swiper.min.css'
import './assets/css/global.css'
import Axios from 'axios'
// 注册自己组建
import Myul from '@/components/Common/Myul'
import Myli from '@/components/Common/Myli'
import NavBar from '@/components/Common/NavBar'
import Comment from '@/components/Common/Comment'
import FtoC from '@/components/Common/FtoC'
// 定义时间
import Moment from 'moment'

import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)
Vue.component('vue-preview', VuePreview)

Moment.locale('zh-cn')

Vue.component(Myul.name, Myul)
Vue.component(Myli.name, Myli)
Vue.component(NavBar.name, NavBar)
Vue.component(Comment.name, Comment)
Vue.component(FtoC.name, FtoC)
// 时间过滤器

Vue.filter('convertTime', function (data, formatStr) {
  return Moment(data).format(formatStr)
})

Vue.filter('relativeTime', function (previousTime) {
  return Moment(previousTime).fromNow()
})

Vue.filter('convertStr', function (str, count) {
  return str.substring(0, count) + '...'
})
// 配置axios
// 配置公共url
//
// Axios.defaults.baseURI = 'http://v.juhe.cn'

// Axios.interceptors.request.use(function (config) {
//   MintUI.Indicator.open({
//     text: '玩命加载中'
//   })
// })
// Axios.interceptors.response.use(function (response) {
//   MintUI.Indicator.closw()
//   return response
// })
Vue.prototype.$axios = Axios

// 配置加载

// 安装插件 注册全局组件及挂载属性
Vue.use(MintUI)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
