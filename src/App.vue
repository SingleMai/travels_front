<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { UsersApi } from 'api'

export default {
  name: 'App',
  mounted () {
    // 每次页面刷新都进行token的验证与更新
    this.$_updateToken()
  },
  methods: {
    async $_updateToken () {
      try {
        const { token, user } = await UsersApi.updateToken()
        window.localStorage.setItem('token', token)
        window.localStorage.setItem('user', JSON.stringify(user))
      } catch (err) {
       console.log(err)
      }
    }
  }
}
</script>

<style scoped=''>
</style>
