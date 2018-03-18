<template>
  <div class="box">
    <mt-header title="登录" class="m-header">
      <mt-button slot="left" icon="back" @click.native="back">返回</mt-button>
    </mt-header>
    <div class="main">
      <div class="col">
        <p class="label">邮箱：</p>
        <div class="content">
          <input type="text" v-model="email" placeholder="请输入绑定的邮箱">
        </div>
        <p class="btn-get-token" @click="getToken">获取验证码</p>
      </div>
      <div class="col">
        <p class="label">验证码：</p>
        <div class="content">
          <input type="text" v-model="token">
        </div>
      </div>
      <mt-button size="large" type="primary" @click="login">登录</mt-button>
    </div>
  </div>
</template>
<script>
import { UsersApi } from 'api'
import { Toast } from 'mint-ui'

export default {
  name: '',
  data () {
    return {
      email: '',
      token: ''
    }
  },
  methods: {
    async getToken () {
      if (this.email !== '') {
        try {
          await UsersApi.getToken({ email: this.email })
          Toast({
            message: '发送成功',
            iconClass: 'icon icon-success'
          })
        } catch (err) {
          Toast({
            message: `获取验证码失败： ${err.message}`,
            position: 'middle',
            duration: 3000
          })
        }
      }
    },
    async login () {
      if (this.email !== '' && this.token !== '') {
        try {
          const data = await UsersApi.login({
            email: this.email,
            token: this.token
          })
          window.localStorage.setItem('token', data.token)
          window.localStorage.setItem('user', JSON.stringify(data.origData))
          this.$router.go(-1)
        } catch (err) {
          Toast({
            message: `登录失败： ${err.message}`,
            position: 'middle',
            duration: 3000
          })
        }
      }
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
.main {
  width: 100%;
  .col {
    display: flex;
    align-content: flex;
    background: white;
    padding: 40px;
    .label {
      font-size: 50px;
      line-height: 100px;
      text-align: center;
      flex-basis: 280px;
    }
    .content {
      flex: auto;
      input {
        width: 100%;
        outline: none;
        font-size: 40px;
      }
    }
    .btn-get-token {
      font-size: 40px;
      line-height: 100px;
    }
  }
}
</style>
