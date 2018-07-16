<template>
  <div class="aneventhosttop" ref="wxanalysis" :style="{width:'100%',height:'100%'}">

  </div>
</template>

<script>
  export default {
    name: "v-aneventhosttop",
    data(){
      return {
        option: {

        }
      }
    },
    mounted(){
      let dataSource = [
        {
          time: 'EIT-20160822MX',
          value: 9,
          value1: 9,
          value2: 9,
          value3: 9,
        },
        {
          time: 'EIT-20160823MX',
          value: 18,
          value1: 4,
          value2: 6,
          value3: 4,

        },
        {
          time: 'EIT-20160824MX',
          value: 13,
          value1: 7,
          value2: 9,
          value3: 7,
        },{
          time: 'EIT-20160825MX',
          value: 18,
          value1: 4,
          value2: 6,
          value3: 4,
        },
        {
          time: 'EIT-20160826MX',
          value: 13,
          value1: 7,
          value2: 9,
          value3: 7
        }
      ]
      let option = {
        color: ['#16e39e','#5957c4', '#f9f995','#f37781'],
        legend: {
          right: '5%',
          top: '5%',
          shadowColor: '#dddddd',
          shadowOffsetY: 2,
          data: [{
            name:'严重',
            icon: 'circle',
            textStyle:{
              fontSize:16,
              color: '#dddddd'
            }
          }, {
            name:'高危',
            icon: 'circle',
            textStyle:{
              fontSize:16,
              color: '#dddddd'
            }
          }, {
            name:'中危',
            icon: 'circle',
            textStyle:{
              fontSize:16,
              color: '#dddddd'
            }
          },{
            name:'低危',
            icon: 'circle',
            textStyle:{
              fontSize:16,
              color: '#dddddd'
            }
          }]

        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            lineStyle: {
              opacity: 0
            }
          }
        },
        grid: {
          top: '23%',
          left: '8%',
          right: '3%',
          bottom: '10%'
        },
        xAxis: [{
          type: 'category',
          data: dataSource.map((item) => (item.time)),
          axisTick: {
            show: false
          },
          axisLine:{
            show: true,
            lineStyle:{
              width: 2,
              color:'#134a61'
            }
          },
          axisLabel: {
            show: true,
            color: '#dddddd',
            fontSize: 12
          }
        }],
        yAxis: [{
          type: 'value',
          lineStyle:{
            width: 2,
            color:'#134a61'
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle:{
              color:'#134a61'
            }
          },
          axisLine:{
            show: true,
            lineStyle:{
              width: 2,
              color:'#134a61'
            }
          },
          axisLabel: {
            show: true,
            color: '#dddddd',
            fontSize: 12,
            formatter: '{value}个'
          }
        }],
        series: [{
          name: '低危',
          type: 'bar',
          stack: '总量',
          barWidth: '10%',
          barMaxWidth: '40%',
          data: dataSource.map((item)=>{
            return {
              value: item.value,
              itemStyle:{
                borderWidth: 1,
                borderColor: new this.$echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [
                    {offset: 0, color: 'rgba(255, 255, 255, 0)'},
                    {offset: 1, color: 'rgba(255, 255, 255, 0.8)'},
                  ]
                )
              }
            }
          })
        }, {
          name: '中危',
          type: 'bar',
          stack: '总量',
          barWidth: '40%',
          barMaxWidth: '40%',
          data: dataSource.map((item)=>{
            return {
              value: item.value,
              itemStyle:{
                borderWidth: 1,
                borderColor: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: 'rgba(255, 255, 255, 0.8)'},
                    {offset: 1, color: 'rgba(255, 255, 255, 0.8)'},
                  ]
                )
              }
            }
          })
        },{
          name: '高危',
          type: 'bar',
          stack: '总量',
          barWidth: '40%',
          barMaxWidth: '40%',
          itemStyle: {
            barBorderRadius: [5, 5, 0, 0]
          },
          data: dataSource.map((item)=>{
            return {
              value: item.value,
              itemStyle:{
                borderWidth: 1,
                borderColor: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: 'rgba(255, 255, 255, 0)'},
                    {offset: 1, color: 'rgba(255, 255, 255, 0.8)'},
                  ]
                )
              }
            }
          })
        },{
          name: '严重',
          type: 'bar',
          stack: '总量',
          barWidth: '40%',
          barMaxWidth: '40%',
          itemStyle: {
            barBorderRadius: [5, 5, 0, 0]
          },
          data: dataSource.map((item)=>{
            return {
              value: item.value,
              itemStyle:{
                borderWidth: 1,
                borderColor: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: 'rgba(255, 255, 255, 0)'},
                    {offset: 1, color: 'rgba(255, 255, 255, 0.8)'},
                  ]
                )
              }
            }
          })
        }]
      };



      let myChart = this.$echarts.init(this.$refs.wxanalysis);
      myChart.setOption(option)
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
  .aneventhosttop{
    overflow: hidden;
    margin: 0 auto;
  }
</style>
