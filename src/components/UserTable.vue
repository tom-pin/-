<template>
  <div class="UserTable">
    <el-table ref="tableRefName" :data="tableData" style="width: 100%" stripe>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="sex" label="性别">
        <!-- 自定义列模板 -->
        <template slot-scope="scope">
          <span>{{ scope.row.sex === 1 ? '男' : '女' }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="birth" label="出生日期"> </el-table-column>
      <el-table-column prop="addr" label="地址" width="500px"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="pager">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="this.total"
        @current-change="handlePage"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageData: {
        // name: '',
        page: 1,
        limit: 10,
      },
    }
  },
  computed: {
    tableData() {
      return this.$store.state.user.tableData
    },
    total() {
      return this.$store.state.user.total
    },
    searchForm() {
      return this.$store.state.user.searchForm
    },
  },
  methods: {
    //选择页码回调
    handlePage(page) {
      // this.pageData.page = val
      // this.$store.commit('searchForm', page)
      this.pageData.page = page
      this.$store.commit('searchFormPage', this.pageData)
      // console.log('searchForm', this.searchForm)
      this.$store.commit('getList', {
        params: { ...this.searchForm },
      })
    },
    handleEdit(row) {
      // 编辑用户
      this.$store.commit('diaChangEdit')
      this.$store.commit('editRow', row)
    },
    // 删除用户
    handleDelete(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          // 调用commit删除数据
          this.$store.commit('delList', row)
          this.$message({
            type: 'success',
            message: '删除成功!',
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          })
        })
    },
  },
  mounted() {
    this.$store.commit('getList', { params: this.pageData })
  },
}
</script>

<style lang="less" scoped>
.UserTable {
  // height: calc(100% - 62px);
  height: 85%;
  .pager {
    padding-top: 30px;
    padding-right: 50px;
    display: flex;
    justify-content: right;
  }
}
</style>