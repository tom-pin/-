import { getUser, delUser, addUser, editUser } from '../api/index';

export default {
  mutations: {
    editRow(state, row) {
      state.EditRow = row;
    },
    //控制新增用户弹窗
    diaChang(state) {
      state.dialogVisible = !state.dialogVisible
    },
    //控制修改用户信息弹窗
    diaChangEdit(state) {
      // console.log('dialogVisibleEidt')
      state.dialogVisibleEidt = !state.dialogVisibleEidt
    },
    // 修改查询条件
    searchFormName(state, form){
      state.searchForm.name = form.name
      state.searchForm.page = 1
      console.log('searchFormName',state.searchForm)
    },
    // 页码变更
    searchFormPage(state, form){
      state.searchForm.page = form.page
      console.log('searchFormPage',state.searchForm)
    },
    // 获取用户列表数据
    getList(state, param) {
      // this.getUserList()
      getUser(param).then((data) => {
       
        state.tableData = data.data.list;
        state.total = data.data.count
        // console.log('getUser', param)
      });
    },
    // 新增用户
    addList(state, values) {
      addUser(values).then(() => {
        getUser().then((data) => {
          state.tableData = data.data.list;
          console.log('新增数据', state.tableData[0])
        });
      });
    },
    // 修改用户信息
    upList(state, values) {
      editUser(values).then(() => {
        getUser().then((data) => {
          state.tableData = data.data.list;
          console.log('修改数据', values)
        });
      });
    },
    // 删除用户
    delList(state, values) {
      //传入对象id
      delUser({ id: values.id }).then(() => {
        //或者直接传入values
        // delUser(values).then(() => {
        getUser().then((data) => {
          state.tableData = data.data.list;
          console.log('删除数据', values.id)
        });
      });
    }
  },
  state: {
    dialogVisible: false,
    dialogVisibleEidt: false,
    tableData: [],
    total: 0,
    EditRow: {
      name: "",
      age: "",
      addr: "",
      sex: "",
      birth: "",
    },
    searchForm: {
      name: '',
      page: 1,
      limit: 10,
    }
  }
}