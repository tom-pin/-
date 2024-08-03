<template>
  <div class="Login">
    <el-card class="card" shadow="never">
      <el-form :model="form" :rules="rules" ref="form">
        <h3>系统登录</h3>
        <el-form-item
          label="账号"
          prop="username"
          placeholder="请输入账号"
          label-width="80px"
        >
          <el-input v-model="form.username"> </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" label-width="80px">
          <el-input v-model="form.password" show-password></el-input>
        </el-form-item>

        <div class="footer">
          <el-form-item>
            <el-button class="btn1">注册</el-button>
            <el-button type="primary" @click="submit" class="btn2"
              >登录</el-button
            >
          </el-form-item>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Mock from 'mockjs'
import Cookie from 'js-cookie'
import { getMenu } from '../api/index'

export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入用户密码', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    submit() {
      // 表单验证，通过后跳转到首页，并存储token信息到cookie中
      this.$refs.form.validate((valid) => {
        if (valid) {
          getMenu(this.form).then((data) => {
            console.log('data', data.data)
            if (data.data.code === 20000) {
              const token = data.data.data.token
              // token信息存入cookie，用于不同页面间通信
              Cookie.set('token', token)
              // 跳转到首页
              this.$router.push('/')
            } else {
              this.$message.error(data.data.data.message)
            }
          })
        }
      })
    },
  },
}
</script>

<style lang='less' scoped>
.Login {
  display: flex;
  justify-content: center;
  padding-top: 8%;
  height: 100vh;
  .card {
    width: 300px;
    height: 280px;
    background-color: #fff;
    border-radius: 8%;
    h3 {
      margin: 0 auto;
      text-align: center;
      margin-bottom: 30px;
    }
    .footer {
      text-align: center;
      margin: 0 auto;
      .btn1 {
        margin-right: 20px;
      }
      .btn2 {
        margin-left: 20px;
      }
    }
  }
  .card:hover {
    box-shadow: 0 0 10px #b3b1b1;
    transition: box-shadow 0.3s ease-in-out;
  }
}
</style>

