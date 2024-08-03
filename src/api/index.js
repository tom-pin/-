import http from '../utils/request'

//请求首页数据
export const getData = () => {
  //返回一个promise对象
  return http.get('/userMain/getData')
}
//请求用户管理页(user)数据
export const getUser = (param) => {
  //返回用户列表
  // console.log('param', param)
  return http.get('/user/getUser', param)
}
export const addUser = (data) => {
  return http.post('/user/add', data)
}
export const editUser = (data) => {
  return http.post('/user/edit', data)
}
export const delUser = (data) => {
  return http.post('/user/del', data)
}

//返回登录列表信息
export const getMenu = (data) => {
  return http.post('/permission/getMenu', data)
}
