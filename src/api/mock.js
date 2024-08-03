import Mock from 'mockjs'
import userMainApi from './mockServeData/userMain.js'
import user from './mockServeData/user.js'
import permission from './mockServeData/permission.js'

//定义mock请求拦截
Mock.mock('/api/userMain/getData', 'get', userMainApi.getStatisticalData)

//获取用户列表数据
Mock.mock(/api\/user\/getUser/, 'get', user.getUserList)
//更改列表数据
Mock.mock('/api/user/add', 'post', user.createUser)
Mock.mock('/api/user/edit', 'post', user.updateUser)
Mock.mock('/api/user/del', 'post', user.deleteUser)

//登录权限数据
Mock.mock(/api\/permission\/getMenu/, 'post', permission.getMenu)
