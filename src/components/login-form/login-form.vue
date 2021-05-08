<template>
  <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
    <FormItem prop="username">
      <Input v-model="form.username" placeholder="请输入用户名">
        <span slot="prepend">
          <Icon :size="16" type="ios-person"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="form.password" placeholder="请输入密码">
        <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
        </span>
      </Input>
    </FormItem>
	<div class="checked" prop="checked">
    <CheckboxGroup v-model="fruit" @on-change="checkAllGroupChange">
      <Checkbox label="记住密码"></Checkbox>
    </CheckboxGroup>
	</div>
    <FormItem>
      <Button @click="handleSubmit" type="primary" long>登录</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  name: 'LoginForm',
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  data () {
    return {
      form: {
        username: '',
        password: '',
        checked:false,
        fruit: ['']
      }
    }
  },
  computed: {
    rules () {
      return {
        username: this.userNameRules,
        password: this.passwordRules
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
       
        if (valid) {
          this.$emit('on-success-valid', {
            username: this.form.username,
            password: this.form.password
          })
           console.log(this.form.fruit)
           if(this.form.fruit == '记住密码'){
             //执行缓存
             
           }
        }
      })
    },
    checkAllGroupChange (data) {
        this.form.fruit = data
    }
  }
}
</script>
<style>
  .checked{
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: auto;
  }
</style>
