<!--  -->
<template>
  <div>
       <el-button type="primary" @click='loginout'>退出</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    //   点击退出
      loginout(){
              window.sessionStorage.clear()
              this.$router.push('/login')
      }
  }
}

</script>
<style  lang='less'>
</style>