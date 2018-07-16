<template>
  <div class="aqposture" ref="aqzt" :style="{width:'100%',height:'100%'}">

  </div>
</template>

<script>
    export default {
        name: "v-aqposture",
      data(){
        return {
          optionFontSize:14,
            option: {}
        }
      },
      methods:{
        wresize(){
          if(document.body.clientWidth<=1349){
            this.optionFontSize = 12
          }else{
            this.optionFontSize = 14
          }
        }
      },
      mounted(){

        this.wresize()
        let data = [{
          value: 10,
          name: '运维管理良好',
          itemStyle: {
            normal: {
              color: '#5957c4',
            }
          }
        },
          {
            value: 10,
            name: '离线',
            itemStyle: {
              normal: {
                color: '#f9f995'
              }
            }
          },
          {
            value: 10,
            name: '在线',
            itemStyle: {
              normal: {
                color: '#16e39e'
              }
            }
          },
          {
            value: 10,
            name: '存在安全风险',
            itemStyle: {
              normal: {
                color: '#f37781'
              }
            }
          },
        ];


        let centerdata=[{
          value: 12,
          name: '12台\n总服务器',
          label: {
            normal: {
              fontSize: 14,
              color:'#ffffff'
            }
          },
          itemStyle: {
            normal: {
              color: '#44b0f2',

            }
          }
        }];

        let option = {
          backgroundColor:'#08425a',
          xAxis: [{
            type: 'category',show:false
          }],
          yAxis: [{
            type:'value',
            show:false
          }],
          series: [{
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#5957c4'
              }
            },
          },
            {
              type: 'pie',
              selectedMode: 'center',
              selectedOffset: 0,
              hoverAnimation: true,
              radius: ['0%', '35%'],
              label: {
                normal: {
                  position: 'center',
                  formatter: '{b|{b}}',
                  rich: {
                    b: {
                      color: '#dddddd',
                      fontSize: this.optionFontSize
                    },
                    ak: {
                      color: '#dddddd',
                      fontSize: this.optionFontSize,
                      verticalAlign: 'bottom'
                    }
                  }
                }
              },
              data: centerdata
            },
            {
              type: 'pie',
              radius: ['50%', '60%'],
              startAngle: [90],
              label: {
                normal: {
                  position: 'outside',
                  fontSize: this.optionFontSize,
                  color: '#dddddd',
                  lineHeight: 20,
                  formatter: '{b}\n\n',
                  borderWidth: 10,
                  borderRadius: 4,
                }
              },
              labelLine: {
                normal: {
                  show: true,
                  length: 10,
                  length2: 25,
                  lineStyle: {
                    type: 'solid',
                    color: "#dddddd"
                  }

                }
              },
              data: data
            },
          ]
        };


        let myChart = this.$echarts.init(this.$refs.aqzt);
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
.aqposture{
  height:100%;
  width:100%;
  overflow: hidden;
}
</style>
