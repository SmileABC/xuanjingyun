<template>
  <div class="wxanalysis" ref="wxanalysis" :style="{width:'100%',height:'100%'}">

  </div>
</template>

<script>
    export default {
      name: "v-wxanalysis",
      data(){
        return {
          option: {
          }
        }
      },
      mounted(){
        let option = {
          radar: [{
            indicator: [
              {name: '漏洞',max:5,min:0,axisLabel:{
                  show:false,
                }},
              {name: '基线',max:5,min:0,axisLabel:{
                  show:false,
                }},
              {name: '爆破',max:5,min:0,axisLabel:{
                  show:false,
                }},
              {name: '弱口令',max:5,min:0,axisLabel:{
                  show:false,
                }},
              {name: '端口扫描',max:5,min:0,axisLabel:{
                  show:false,
                }},
              {name: '异常登录',max:5,min:0,axisLabel:{
                  show:false,
                }},
              {name: '网站后门',max:5,min:0,
                axisLabel:{
                  show:true,
                  formatter:'{value}',
                  color:'#b8c1c6'
                },
              },
              {name: '主机异常',max:5,min:0,axisLabel:{show:false}}
            ],
            center: ['50%', '50%'],
            radius: "75%",
            startAngle: 90,
            splitNumber: 5,
            shape: 'circle',
            triggerEvent: true,
            silent: true,
            scale: true,
            nameGap: 9,
            name: {
              formatter: '{value}',
              textStyle: {
                color: '#dddddd',
                fontSize: 16
              }
            },
            splitArea: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#6d8088'
              }
            },
            axisTick: {
              show: true
            },
            axisLabel: {
              show: true,
              color: '#ffffff',
            },
            splitLine: {
              lineStyle: {
                color: '#6d8088'
              }
            }
          }],
          series: [{
            name: '雷达图',
            type: 'radar',
            areaStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: '#18ddf2'
                  }, {
                    offset: 1,
                    color: '#5557be'
                  }],
                  globalCoord: false
                }
              }
            },
            lineStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: '#18ddf2'
                  }, {
                    offset: 1,
                    color: '#5557be'
                  }],
                  globalCoord: false
                },
                width: 3
              }
            },
            data: [{
              value: [4, 4, 4, 4, 4,4,4,4],
              symbol: 'circle',
              symbolSize: 5,
              itemStyle: {
                normal: {
                  color: '#01eef0'
                }
              }
            }]
          }]
        }
        let myChart = this.$echarts.init(this.$refs.wxanalysis);
        myChart.setOption(option)
        setTimeout(function () {
          myChart.resize()
        },20)
        myChart.resize()
        window.addEventListener('resize',function () {
          myChart.resize()
        })
      }
    }
</script>

<style scoped>
.wxanalysis{
  overflow: hidden;
}
</style>
