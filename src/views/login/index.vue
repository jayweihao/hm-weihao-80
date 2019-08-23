<template>
  <div class="container">
    <el-card class="kapian">
      <img src="../../assets/images/logo_index.png" alt />
      <el-form :model="loginForm">
        <!-- el-form-item 表单项  label="活动名称" 文字说明-->
        <el-form-item>
          <el-input v-model="loginForm.mobie" placeholder="请输入手机号" style="width:350px;margin-right:25px;"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:230px;margin-right:10px;"></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-from-item>
            <el-checkbox :value="true" style="margin-top:15px">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-from-item>
        <el-from-item>
              <el-button type="primary" style="width:100%;margin-top:30px">登 录</el-button>
        </el-from-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobie: '',
        code: ''
      }
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
  background-color:purple;
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
