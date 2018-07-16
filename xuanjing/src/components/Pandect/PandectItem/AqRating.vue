<template>
  <div class="content clearfix">
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div class="wxanalysis left" ref="wxanalysis" :style="{width:'100%',height:'100%'}"></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light aqrating-right">
          <h4>今日服务器状态：<span>安全</span></h4>
          <p>
            <button class="anewbtn">重新检测</button>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "v-aqrating",
    data(){
      return {
        option: {
          title: {
            text: '80%',
            x: 'center',
            y: 'center',
            textStyle: {
              fontWeight: 'normal',
              color: '#ffffff',
              fontSize: '16'
            }
          },
          color: ['#ffffff'],
          series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['65%', '75%'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [{
              value: 80,
              name: '01',
              itemStyle: {
                normal: {
                  color:'#16e39e', // 0% 处的颜色

                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              }
            }, {
              name: '02',
              value: 20
            }]
        }]
      }
    }},
    methods:{
      oData(val1,val2){
        this.option.series[0].data[0].value = val1;
        this.option.series[0].data[1].value = val2;
        return this.option;
      }
    },
    mounted(){
      let myChart = this.$echarts.init(this.$refs.wxanalysis);
      myChart.setOption(this.oData(80,20))
      setTimeout(function () {
        myChart.resize()
      },20)
      window.addEventListener('resize',function(){
        myChart.resize();
      });
    }
  }
</script>

<style scoped>
  .wxanalysis{
    overflow: hidden;
  }
  .aqrating-right{
    text-align: center;
  }
  .aqrating-right h4{
    /*font-size: 1em;*/
    /*padding: 20px 0 10px;*/
    /*font-weight: 500;*/
    padding: 2.5em 0 1em;
    font-size: 0.8em;
    /*padding: 0.8em 0 0.5em;*/
    margin: 0;
    font-weight: 500;
  }
  .aqrating-right h4 span{
   color:#1ae39f
  }
  .anewbtn{
    outline: none;
    width:122px;
    height:40px;
    background-color: #08425a;
    background-image: url("../../../assets/button-2.png");
    background-size: 100% 100%;
    font-size: 14px;
    color:#ffffff;
    border: 0;

    /*outline: none;*/
    /*width: 8em;*/
    /*height: 3em;*/
    /*background-color: #08425a;*/
    /*background-image: url(/static/img/button-2.9792ac3.png);*/
    /*background-size: 100% 100%;*/
    /*font-size: .9em;*/
    /*color: #ffffff;*/
    /*border: 0;*/
  }
  @media screen and (max-width: 1349px) {
    .anewbtn{
      outline: none;
      width: 8em;
      height: 3em;
      background-color: #08425a;
      background-image: url(/static/img/button-2.9792ac3.png);
      background-size: 100% 100%;
      font-size: .9em;
      color: #ffffff;
      border: 0;
    }
    .aqrating-right h4{
      /*font-size: 1em;*/
      /*padding: 20px 0 10px;*/
      /*font-weight: 500;*/
      /*padding: 2.5em 0 1em;*/
      font-size: 0.8em;
      padding: 0.8em 0 0.5em;
      margin: 0;
      font-weight: 500;
    }
  }
  .content{
    padding: 0.5em 0.5em 0;
    height: 100%;
    box-sizing: border-box;
  }
  .content div{
    height:100%;
  }
  .aqrating-right p{
    margin: 0;
    padding: 1em 0;
  }
</style>
