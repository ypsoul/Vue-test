<template>
    <div>
      <mt-header fixed title="新闻资讯"></mt-header>
      <router-view></router-view>
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="home">
          <img slot="icon" src="./assets/img/index.png" @click="changeHash">
          首页
        </mt-tab-item>
        <mt-tab-item id="member">
          <img slot="icon" src="./assets/img/vip.png" @click="changeHash">
          会员
        </mt-tab-item>
        <mt-tab-item id="shopcart">
          <img slot="icon" src="./assets/img/shopcart.png" @click="changeHash">
          购物车
        </mt-tab-item>
        <mt-tab-item id="search">
          <img slot="icon" src="./assets/img/find.png" @click="changeHash">
          查找
        </mt-tab-item>
      </mt-tabbar>
    </div>
</template>
<script>
export default {
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    changeHash () {
      // 该调用早于 子组件赋值父组件的selected
      this.$nextTick(function () {
        this.$router.push({
          name: this.selected
        })
        // console.log(this.selected)
      })
    }
  }
  // watch: {
  //    selected (newV, oldV) {
  //     this.$router.push({
  //        name: newV
  //      })
  //    }
  // }
}
</script>
<style>

</style>
