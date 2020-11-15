<!--  -->
<template>
  <div class="home_container">
    <el-container>
      <el-header>
        <el-button type="primary" @click="loginout">退出</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="2" class="el-menu-vertical-demo" router>
            <!-- 一级菜单 -->
            <el-submenu :index="item.id+''" v-for="item in menuLists" :key="item.id">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ item.authName }}</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item :index="'/'+subitem.path" v-for="subitem in item.children" :key='subitem.id' >
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{subitem.authName}}</span>
                </template>
              </el-menu-item>

            </el-submenu>
          </el-menu>
        </el-aside>

        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 左侧列表
      menuLists: [],
    };
  },
  created() {
    this.getMenuLists();
  },
  components: {},

  computed: {},

  mounted() {},

  methods: {
    //   点击退出
    loginout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    // 获取左侧菜单
    async getMenuLists() {
      const { data: res } = await this.$http.get("menus");
      if (res.meta.status !== 200) {
        return this.$message.error("获取列表数据失败");
      }
      // 存储列表数据
      this.menuLists = res.data;
      console.log(this.menuLists);
    },
  },
};
</script>
<style lang="less" scope>
.home_container {
  height: 100%;
}
.el-container {
  height: 100%;
  .el-button {
    float: right;
    margin-top: 9px;
  }
}
.el-header {
  background-color: #000;
  opacity: 0.5;
}
.el-aside {
  background-color: pink;
}
.el-main {
  background-color: #fafafa;
  
}
</style>
