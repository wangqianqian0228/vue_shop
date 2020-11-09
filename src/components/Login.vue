<!-- 登录组件 -->
<template>
  <div class="container">
    <div class="login_box">
      <el-form class="el_form" :form="loginform" :rules="loginFormRules">
        <el-form-item label="用户名:" prop="username">
          <el-input class="el_input" v-model="loginform.username"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input
            class="el_input"
            v-model="loginform.password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-button>重置</el-button>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表单的数据绑定对象
      loginform: {
        username: "",
        password: "",
      },
      // 表单的验证规则
      loginFormRules: {
        // 验证用户名
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" },
        ],
        // 验证密码
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 10, message: "长度在 6 到 10 个字符", trigger: "blur" },
        ],
      },
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    login() {},
  },
};
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  color: red;
  position: relative;
  background: url("../assets/imgs/login.jpg") no-repeat top left;
  background-size: 100% 100%;

  .login_box {
    position: absolute;
    width: 400px;
    height: 200px;
    background-color: #fff;
    top: 50%;
    left: 50%;
    .el_form {
      margin-top: 32px;
    }
    transform: translate(-50%, -50%);
    .el_input {
      width: 80%;
    }
    .el-button {
      float: right;
      margin: 0 15px;
    }
  }
}
</style>
