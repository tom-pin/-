<template>
  <div class="ComHeader">
    <div class="left-content">
      <el-button
        @click="handMenu()"
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <!-- 当前导航目录显示 -->
      <span>{{ breadCrumb }}</span>
    </div>
    <div class="right-content">
      <!-- 下拉菜单 -->
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <img src="../assets/imagess/user.png" alt="头像" />
        </span>

        <!-- <el-button :circle="true" class="el-dropdown-link"></el-button> -->
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="userMsg">个人中心</el-dropdown-item>
          <el-dropdown-item command="exit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
export default {
  name: 'Header',
  // data(){
  // isCollapse:this.$store.state.isCollapse
  // },
  computed: {
    breadCrumb() {
      const label = this.$store.state.tab.breadcrumb.map((i) => i.label)
      return label.join()
    },
  },
  methods: {
    handMenu() {
      // console.log("isCollapse", this.$store.state.isCollapse);
      this.$store.commit('isChang')
    },
    handleCommand(command) {
      if (command === 'exit') {
        //清除Cookie
        Cookie.remove('token')
        // //跳转到登录页
        this.$router.push({ name: 'login' })
        this.$message.success('已成功退出!')
      }
      // console.log('清除Cookie', command)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  height: 40px;
  width: 40px;
}
.el-icon-arrow-down {
  font-size: 12px;
}

.ComHeader {
  height: 50px;
  background-color: rgb(77, 79, 79);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .left-content {
    span {
      color: #fff;
      font-size: 14px;
      padding: 0 10px;
    }
  }
}
img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>

