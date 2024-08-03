export default {
  mutations: {
    //菜单展开or收起
    isChang(state) {
      state.isCollapse = !state.isCollapse
      // console.log('isCollapse', state.isCollapse)
    },
    selectPath(state, val) {
      state.breadcrumb.splice(0, 1, val)
      // console.log('lab', state.breadcrumb.splice(0, 1, val))
    },
  },
  state: {
    //控制菜单展开or收起
    isCollapse: false,
    // 面包屑数据
    breadcrumb: [
      {
        path: '/',
        name: 'userMain',
        label: '首页',
        icon: 's-home',
        url: 'UserMain/UserMain',
      },
    ],
  },
}
