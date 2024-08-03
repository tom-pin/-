<template>
  <div class="dialog">
    <el-dialog
      title="新增用户"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleCloseAdd"
    >
      <!-- 表单 -->
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="姓名" prop="name">
              <el-input
                v-model="form.name"
                placeholder="请输入姓名"
                maxlength="10"
                show-word-limit
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="年龄" prop="age">
              <el-input
                v-model.number="form.age"
                placeholder="请输入年龄"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="性别" prop="sex" placeholder="请选择">
              <el-select v-model="form.sex">
                <el-option label="男" :value="1"></el-option>
                <el-option label="女" :value="0"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="生日" prop="birth">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.birth"
                style="width: 100%"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="地址" prop="addr">
          <el-input
            type="textarea"
            v-model="form.addr"
            placeholder="请填写地址"
            maxlength="50"
            show-word-limit
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelAdd">取 消</el-button>
        <el-button type="primary" @click="submitAdd">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      EditRow: {},
      // searchForm: {
      //   name: "",
      //   page: 1,
      //   limit: 10,
      // },
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' },
          { type: 'number', message: '年龄必须为数字值' },
        ],
        brith: [{ required: true, message: '请输入生日', trigger: 'blur' }],
        addr: [{ required: true, message: '请填写地址', trigger: 'blur' }],
      },
    }
  },
  computed: {
    dialogVisible() {
      return this.$store.state.user.dialogVisible
    },
    modalType() {
      //获取modalType的值
      return this.$store.state.user.modalType
    },
    getRow() {
      const EditRow = this.$store.state.user.EditRow
      JSON.parse(JSON.stringify(EditRow))
      return EditRow
    },
  },
  methods: {
    // //搜索事件
    // onSubmit(e) {
    //   console.log("onSubmit", e);
    //   this.$store.commit("getList", { params: this.searchForm });
    // },
    submitAdd() {
      this.$refs.form.validate((valid) => {
        // 表单验证是否通过 ；validate 是element ui提供的表单验证字段，会返回ture or false
        if (valid) {
          // 表单验证通过，提交数据
          this.$store.commit('addList', this.form)
          // 重置表单
          this.handleCloseAdd()
        } else {
          return false
        }
      })
    },
    // 弹窗关闭时重置表单
    handleCloseAdd() {
      this.$refs.form.resetFields()
      this.$store.commit('diaChang')
    },
    cancelAdd() {
      this.handleCloseAdd()
    },
  },
}
</script>