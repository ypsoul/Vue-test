<template>
  <li>
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'my-li',
  data () {
    return {}
  }
}
</script>

<style scoped>
  li{
    width: 33.3%;
    float: left;
    margin-bottom: 5px;
  }
  li div{
    display: block;
  }
  li p{
    text-align: center;
    font-size: 12px;
  }

</style>
