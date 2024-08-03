<template>
  <div class="User">
    <div class="diaHeader">
      <el-button type="primary" @click="handleAdd">+ 新增</el-button>
      <el-form :inline="true" :v-model="searchForm" class="searchForm">
        <el-form-item>
          <el-input v-model="searchForm.name" placeholder="请输入姓名进行查找">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="onSubmit"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <!-- 组件渲染 -->
    <DialogAdd />
    <DialogEidt />
    <UserTable />
  </div>
</template>

<script>
import DialogAdd from '../components/DialogAdd.vue'
import DialogEidt from '../components/DialogEidt.vue'
import UserTable from '../components/UserTable.vue'

export default {
  name: 'user',
  components: {
    DialogAdd,
    UserTable,
    DialogEidt,
  },
  data() {
    return {
      searchForm: {
        name: '',
      },
    }
  },
  computed: {
    searchName() {
      return this.$store.state.user.searchForm
    },
  },
  methods: {
    //搜索事件
    onSubmit() {
      this.$store.commit('searchFormName', this.searchForm)
      // this.pageData.page = this.searchName
      // console.log('searchForm', this.searchName)
      // this.$store.commit('searchForm',form)
      this.$store.commit('getList', { params: { ...this.searchName } })
    },
    //打开弹窗并新增数据
    handleAdd() {
      this.$store.commit('diaChang')
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.User {
  padding-top: 20px;
  .diaHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-form-item {
      margin-bottom: 0;
    }
  }
}
</style>
