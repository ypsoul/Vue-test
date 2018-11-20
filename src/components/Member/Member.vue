<template>
    <div>
      <FtoC v-bind:msg="text" v-on:listenevent="show"></FtoC>
      {{ showtext }}
    </div>
</template>

<script>
export default {
  data () {
    return {
      text: '信息',
      showtext: '原始数据'
    }
  },
  methods: {
    show: function (data) {
      this.showtext = data
    }
  }
}
</script>

<style scoped>

</style>
