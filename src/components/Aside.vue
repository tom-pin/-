<template>
  <div>
    <el-menu
      :default-active="this.active"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <h3>{{ isCollapse ? '后台' : '通用后台管理系统' }}</h3>

      <el-menu-item
        @click="clikMenu(item)"
        v-for="item in noChildren"
        :key="item.name"
        :index="item.name"
      >
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>

      <el-submenu
        v-for="item in hasChildren"
        :key="item.label"
        :index="item.label"
      >
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group
          v-for="subItem in item.children"
          :key="subItem.name"
        >
          <el-menu-item @click="clikMenu(subItem)" :index="subItem.name">
            {{ subItem.label }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  data() {
    return {
      menuData: [
        {
          path: '/',
          name: 'userMain',
          label: '首页',
          icon: 's-home',
          url: 'UserMain/UserMain',
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage',
        },
        {
          path: '/commodity',
          name: 'commodity',
          label: '商品管理',
          icon: 'shopping-cart-full',
          url: 'MallManage/MallManage',
        },
        {
          label: '其他',
          icon: 'more',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'Other/pageOne',
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'Other/pageTwo',
            },
          ],
        },
      ],
    }
  },
  computed: {
    active() {
      return this.menuData[0].name
    },
    // 返回store中的isCollapse
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
    noChildren() {
      return this.menuData.filter((item) => !item.children)
    },
    hasChildren() {
      return this.menuData.filter((item) => item.children)
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log('isCollapse',this.$store.state.isCollapse)
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    //点击菜单，路由跳转
    clikMenu(item) {
      // console.log('active', this.active)
      if (
        this.$route.path !== item.path &&
        !(this.$route.path === '/userMain' && item.path === '/')
      ) {
        this.$router.push(item.path)
      }
      // 更新header区域文字显示
      this.$store.commit('selectPath', item)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.el-menu {
  height: 100vh;
  h3 {
    margin: 20px 0;
    text-align: center;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    white-space: nowrap;
  }
}
.el-menu {
  border: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
