<template>
    <div>
      {{ msg }}
      <button @click="postmsg">向父组件传值</button>
    </div>
</template>

<script>
export default {
  name: 'FtoC',
  props: ['msg'],
  data () {
    return {
    }
  },
  methods: {
    postmsg: function () {
      var n = 1
      this.$emit('listenevent', n)
    }
  }
}
</script>

<style scoped>

</style>
