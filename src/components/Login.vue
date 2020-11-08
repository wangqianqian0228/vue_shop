<!-- 登录组件 -->
<template>
  <div class="container">
    <div class="login_box">
      <el-form >
        <el-form-item label="用户名：">
          <el-input ></el-input>
        </el-form-item>
         <el-form-item label="密码">
          <el-input ></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
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
    height: 300px;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
