<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Index from './page/Index.vue'

export default {
  name: 'App',
  components: {
    Index,
  },
  created() {
    // 在页面初始化时刷新当前路由
    this.reloadPageRoute()
  },
  methods: {
    reloadPageRoute() {
      // const currentPath = this.$route.path
      // console.log('currentPath', currentPath)
      if (this.$route.path !== '/userMain' && this.$route.path !== '/') {
        this.$router.replace({ path: '/' }) //触发组件的重新渲染
      }
    },
  },
}
</script>

<style lang="less">
html,
body,
h3,
p {
  margin: 0;
  padding: 0;
}
</style>
