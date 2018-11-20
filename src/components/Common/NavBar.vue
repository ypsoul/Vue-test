<template>
    <div class="cms-s-header">
      <h5 @click="goback" class="back">返回</h5>
      <h4 class="page-title">{{ title }}</h4>
    </div>
</template>

<script>
export default {
  name: 'nav-bar',
  props: ['title'],
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .cms-s-header{
    position: relative;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 0.3rem;
  }
  .back{
    position: absolute;
    left: 5px;

  }
</style>
