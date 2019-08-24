<template>
  <div class="container" ref="box">
    <el-card class="kapian">
      <img src="../../assets/images/logo_index.png" alt />
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" status-icon>
        <!-- el-form-item 表单项  label="活动名称" 文字说明-->
        <el-form-item prop="mobile">
          <el-input
            v-model="loginForm.mobile"
            placeholder="请输入手机号"
            style="width:350px;margin-right:25px;"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证码"
            style="width:230px;margin-right:10px;"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-from-item>
          <el-checkbox :value="true" style="margin-top:15px">如果你喜欢Jay,我们就是一家人</el-checkbox>
        </el-from-item>
        <el-from-item>
          <el-button @click="login()" type="primary" style="width:100%;margin-top:30px">We are family</el-button>
        </el-from-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  // mounted () {
  //   // 渲染完毕
  //   //  $refs  是当前组件上所有使用过ref属性的元素集合（对象）
  //   // ref="value" value就是你集合中的属性名称
  //   // const box = this.$refs.box  标签  dom
  //   // const loginForm = this.$refs.loginForm
  //   // console.log(box)   组件  vue实例
  //   // console.log(loginForm)
  // },
  data () {
    const checkMobile = (rule, value, callback) => {
      // 只能1 第二位数字 3-9 其余9位数字结尾
      // - 成功  callback()
      // - 失败 callback(new Error('提示信息'))
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error('手机格式不对头'))
      }
      callback()
    }
    return {
      loginForm: {
        mobile: '',
        code: ''
      },
      loginRules: {
        // blur失去焦点执行,change输入时执行
        mobile: [
          {
            required: true,
            message: '请输入手机号,别逼我揍你!',
            trigger: 'blur'
          },
          // validator自定义确认
          { validator: checkMobile, trigger: 'change' }
        ],
        code: [
          {
            required: true,
            message: '请输入验证码,不长眼吗?',
            trigger: 'blur'
          },
          {
            len: 6,
            message: '验证码长度是6个,请认真输入,有病啊?',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      // 调用 validate 对整体表进行校验
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // 成功 就登陆转到首页
          this.$http.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations', this.loginForm)
            .then(res => {
            // 成功
              this.$router.push('/')
            })
            .catch(() => {
            // 失败
              this.$message.error('你都输错了,别一直点行吗,有病啊!')
            })
        }
      })
    }
  }
}
</script>

<style lang="less">
.container {
  background: url(../../assets/images/QQ音乐.jpg) no-repeat center / cover;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.kapian {
  width: 400px;
  height: 350px;
  position: absolute;
  top: 30%;
  left: 80%;
  transform: translate(-50%, -50%);
  img {
    width: 200px;
    display: block;
    margin: 10px auto 20px;
  }
}
</style>
