<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <Aside />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "../components/Header";
import Aside from "../components/Aside.vue";

export default {
  name: "Index",
  components: {
    Header,
    Aside,
  },
};
</script>

<style scoped>
.el-header {
  padding: 0;
}
.el-main {
  padding: 0 10px;
}
</style>