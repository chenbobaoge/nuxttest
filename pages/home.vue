<template>
  <div>
    <div>home1{{msg}}</div>
    <nuxt-link to="/">首 页</nuxt-link>
    <nuxt-child/>
  </div>
</template>
<script>
export default {
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description2222222222222222222', content: 'My custom description' }
      ]
    }
  },
  data() {
    return {
      msg: 'I am index'+this.$moment.format('YYYY-MM-DD HH:mm:ss'),
    }
  }
}
</script>
<style>

</style>
