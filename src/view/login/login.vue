<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
         <p class="login-tip" show-icon v-show="flag">
           <Alert>账号或密码错误！</Alert>
         </p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'
import { setToken,getToken } from '@/libs/util'

export default {
  components: {
    LoginForm
  },
  data() {
    return{
      flag:false
    }
  },
  methods: {
    ...mapActions([
      'handleLogin',
      //'getUserInfo'
    ]),
    handleSubmit ({ username, password }) {
      this.handleLogin({ username, password }).then(res => {
        if(!getToken()){
          this.flag = true
        }
        //暂时不用
        this.flag = false
         this.$router.push({
           name: this.$config.homeName
         })
        // this.getUserInfo().then(res => {
        //  this.flag = false
        //   this.$router.push({
        //     name: this.$config.homeName
        //   })
        // })
      })
    }
  }
}
</script>

<style>

</style>
