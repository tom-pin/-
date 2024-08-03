import Mock from 'mockjs'

// 定义mock数据
export default {
  getMenu: (config) => {
    const { username, password } = JSON.parse(config.body)
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === 'admin' && password === 'admin') {
      return {
        code: 20000,
        data: {
          menu: [
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
          token: Mock.Random.guid(),
          message: '获取成功',
        },
      }
    } else if (username === 'xiaoxiao' && password === 'xiaoxiao') {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path: '/home',
              name: 'home',
              label: '首页',
              icon: 's-home',
              url: 'Home.vue',
            },
            {
              path: '/video',
              name: 'video',
              label: '商品管理',
              icon: 'video-play',
              url: 'Mall.vue',
            },
          ],
          token: Mock.Random.guid(),
          message: '获取成功',
        },
      }
    } else {
      return {
        code: -999,
        data: {
          message: '账号或密码错误',
        },
      }
    }
  },
}
