<template>
  <div id="app">
    <el-container>
      <el-header>
        <v-header @changenav="changenav"></v-header>
      </el-header>
      <el-container>
        <el-aside :style="{width:isCollapse?'66px':'260px',overflowY:isCollapse?'visible':'auto'}">
          <v-navleft></v-navleft>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import NavLeft from './components/navLeft/NavLeft'
  import Header from './components/header/Header'
export default {
  name: 'App',
  data(){
    return {
      isCollapse:false
    }
  },
  methods:{
    changenav(x){
      this.isCollapse = x
      this.$store.commit('increment',x)
    },
    windowHeight(){
      return document.body.offsetHeight-100;
    }
  },
  components:{
    'v-navleft': NavLeft,
    'v-header': Header
  }
}
</script>

<style>
  /*html{*/
    /*font-size: 16px;*/
    /*!*min-width:1900px*!*/
  /*}*/
  /*@media screen and (max-width: 1349px) {*/
    /*html{*/
      /*font-size: 16px;*/
      /*!*min-width:1900px*!*/
    /*}*/
  /*}*/
  @font-face {
    font-family: 'iconfont';
    src: url('./assets/font_kddculha3vl/iconfont.eot');
    src: url('./assets/font_kddculha3vl/iconfont.eot?#iefix') format('embedded-opentype'),
    url('./assets/font_kddculha3vl/iconfont.woff') format('woff'),
    url('./assets/font_kddculha3vl/iconfont.ttf') format('truetype'),
    url('./assets/font_kddculha3vl/iconfont.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  *{
    font-family:'微软雅黑'
  }
  body{
    min-width:1900px;
  }

  .clearflx::after{
    content: '';
    display: block;
    clear:both;
  }
  body,html,ul,li,ol{
    margin: 0;
    padding: 0;
  }
  .el-header {
    background-color: #08425a;
    color: #333;
    text-align: center;
    line-height: 68px;
    height:68px;
    box-sizing: border-box;
    border-bottom: 1px solid #ffffff;
    border-right: 1px solid #ffffff;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #FFFFFF;
    padding:31px 30px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-aside{
    color: #333;
    line-height: 200px;
    box-sizing: border-box;
    border: 1px solid #ffffff;
    border-top:0;
    width: 260px;
    background: #08425a;
    transition: width 0.5s;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-main{
    background: -webkit-linear-gradient(45deg,#002841, #073c51); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(45deg,#002841, #073c51); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(45deg,#002841, #073c51); /* Firefox 3.6 - 15 */
    background: linear-gradient(45deg,#002841, #073c51); /* 标准的语法 */
    box-shadow: 0 0 25px #000000 inset;
  }


  @media screen and (max-width: 1349px) {
    body{
      min-width:1349px;
    }
  }

  .el-aside{
    overflow: visible;
    position: relative;
    left:0;
  }
  .el-aside::-webkit-scrollbar {
    width: 4px;
  }
  .el-aside::-webkit-scrollbar-track {
    background-color:#093446fa;
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius:2em;
  }
  .el-aside::-webkit-scrollbar-thumb {
    background-color:#0d5a79;
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius:2em;
  }

</style>
