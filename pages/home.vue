<template>
  <div>
    <div>home1</div>
    <nuxt-link to="/">首 页</nuxt-link>
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
  }
}
</script>
<style>

</style>
