<template>
  <header class="header">
    <a href="" class="logo-box">
      <div class="logoimgbox">
        <img src="../../assets/small-logo.png" height="34" width="34"/>
      </div>
      <span>悬镜云卫士</span>
    </a>
    <div class="changenavbox">
      <!--<img src="../../assets/img/icon/icon-nav.png" height="16" width="14" @click="changeNav"/>-->
      <i class="iconfont" @click="changeNav">&#xe604;</i>
    </div>
  </header>
</template>

<script>
  import logo from '@/assets/logo.png'
    export default {
      name: "v-header",
      data(){
        return {
          logoUrl:'../../assets/logo.png',
          isCollapse:'false'
        }
      },
      props:{

      },
      methods:{
        changeNav(){
          this.isCollapse = !this.isCollapse;
          this.$emit('changenav',this.isCollapse);
          eventBus.$emit('changenav',this.isCollapse);
        }
      },
      mounted(){
      }
  }
</script>

<style scoped>
  .header{
    height:100%;
  }
  .logo-box{
    display: block;
    height: 100%;
    width: 170px;
    float: left;
    margin-left: 14px;
    text-decoration: none;
  }
  .logo-box .logoimgbox{
    height: 100%;
    line-height: 85px;
    float: left;
  }
  .logo-box span{
    display: block;
    height:100%;
    line-height: 64px;
    font-size: 20px;
    color:#ffffff;
    float:left;
    padding-left: 10px;
  }
  .changenavbox{
    height: 100%;
    line-height: 66px;
    float: left;
  }
  .changenavbox i{
    color:#ffffff;
    font-size: 20px;
    cursor: pointer;
  }
</style>
