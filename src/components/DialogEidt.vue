<template>
  <div class="dialog">
    <el-dialog
      title="修改用户信息"
      :visible.sync="dialogVisibleEidt"
      width="40%"
      :before-close="handleCloseEidt"
    >
      <!-- 修改信息表单 -->
      <el-form ref="form" :model="EditRow" :rules="rules" label-width="80px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="姓名" prop="name">
              <el-input
                v-model="EditRow.name"
                placeholder="请输入姓名"
                maxlength="10"
                show-word-limit
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="年龄" prop="age">
              <el-input
                v-model.number="EditRow.age"
                placeholder="请输入年龄"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="性别" prop="sex" placeholder="请选择">
              <el-select v-model="EditRow.sex">
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
                v-model="EditRow.birth"
                style="width: 100%"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="地址" prop="addr">
          <el-input
            type="textarea"
            v-model="EditRow.addr"
            placeholder="请填写地址"
            maxlength="50"
            show-word-limit
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelEidt">取 消</el-button>
        <el-button type="primary" @click="submitEidt">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      EditRow: {},
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
    dialogVisibleEidt() {
      return this.$store.state.user.dialogVisibleEidt
    },
    getRow() {
      const EditRow = this.$store.state.user.EditRow
      JSON.parse(JSON.stringify(EditRow))
      return EditRow
    },
  },
  methods: {
    submitEidt() {
      this.$refs.form.validate((valid) => {
        // 表单验证是否通过 ；validate 是element ui提供的表单验证字段，会返回ture or false
        if (valid) {
          // 表单验证通过，提交数据
          this.$store.commit('upList', this.EditRow)
          // 重置表单
          this.handleCloseEidt()
        } else {
          return false
        }
      })
    },
    // 弹窗关闭
    handleCloseEidt() {
      this.$store.commit('diaChangEdit')
    },
    cancelEidt() {
      this.handleCloseEidt()
    },
  },
  updated() {
    // 表单回显,点击编辑按钮时
    this.EditRow = this.getRow
  },
}
</script>
