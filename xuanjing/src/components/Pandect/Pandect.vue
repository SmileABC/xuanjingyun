<template>
  <div class="wrap">
    <h3>总览</h3>
    <div class="zl0">
      
    </div>
    <el-row class="zl1">
      <el-col :span="8">
        <div class="grid-content bg-purple clearflx" ref="box1">
          <h3 class="item-title">
            安全态势
          </h3>
          <div class="aqts">
            <v-aqposture :message="{}"></v-aqposture>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light" ref="box2">
          <h3 class="item-title">
            威胁分析
          </h3>
          <div class="wxfx">
            <v-wxanalysis></v-wxanalysis>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple" ref="box3">
          <h3 class="item-title">
            安全评级
          </h3>
          <div class="wxfx">
            <v-aqrating></v-aqrating>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="zl2">
      <el-col :span="12" class="zl2-left">
        <div class="grid-content bg-purple" ref="box4">
          <h3 class="item-title">
            安全事件主机Top5
          </h3>
          <div class="wxfx">
            <v-aneventhosttop></v-aneventhosttop>
          </div>
        </div>
      </el-col>
      <el-col :span="12" class="zl2-right">
        <div class="grid-content bg-purple-light" ref="box5">
          <h3 class="item-title">
            安全事件主机Top5
          </h3>
          <div class="wxfx">
            <v-table></v-table>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Pandect',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      boxHeight: 0,
      ratio:0.58
    }
  },
  methods:{
    heightAuto(){
      let that = this;
      for(let x in  that.$refs){
        that.$refs[x].style.height = (that.$refs[x].offsetWidth * 0.58) + 'px'
      }
      window.onresize = function temp() {
        for(let x in  that.$refs){
          that.$refs[x].style.height = (that.$refs[x].offsetWidth * 0.58) + 'px'
        }
      };
    }
  },
  mounted() {
    this.heightAuto()
  },
}
</script>
<style scoped>
  .wrap>h3{
    text-align: left;
    margin-bottom:0.5em;
    margin-top:0;
    color:#dddddd;
  }
  .zl2,.zl1{
    margin-bottom: 30px;
  }
  .grid-content{
    font-size: 20px;
  }
  .item-title{
    font-size: 1em;
    margin: 0;
    margin-bottom: 0.5em;
    font-weight: 500;
    font-family:微软雅黑;
  }
  /*@media screen and (min-width: 1900px) {*/
    /*.grid-content{*/
      /*font-size: 20px;*/
    /*}*/
  /*}*/

  .zl1 .el-col{
    font-size: 30px;
    width: calc(33.33333% - 20px);
    overflow: hidden;
    margin-right: 30px;
    background-image: url("../../assets/box1.png");
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    padding: 1em 1em;
  }
  .zl1 .el-col:last-child{
    margin-right: 0;
  }
  .zl2 .el-col{
    width: calc(50% - 15px);
    background-image: url("../../assets/box2.png");
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    padding: 1em 1em;
  }

  .zl2-left{
    margin-right: 30px;
  }
  .grid-content>div>div>div{
    margin: 0 auto!important;

  }
  .aqts{
    padding-top:2%;
  }
.aqts{
  height: 80%;
}
  .wxfx{
    width: 100%;
    height:80%
  }

  @media screen and (max-width: 1349px) {
    .grid-content{
      font-size: 16px;
    }
    .zl1 .el-col{
      font-size: 20px;
      padding: 1em 1em;
    }
  }



</style>
