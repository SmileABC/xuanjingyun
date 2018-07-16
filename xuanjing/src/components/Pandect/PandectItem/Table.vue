<template>
    <div class="v-table">
      <el-table
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName"
          :header-cell-style="headerBackground"
      >
        <el-table-column
          v-for="(item,index) in tableLabel"
          :class="'v-tr'"
          :prop="item.prop"
          :label="item.text"
          :width="iswidth?item.width[0]||'':item.width[1]||''"
          :key="index"
        >
        </el-table-column>
        </el-table>


    </div>
</template>

<script>
  export default {
    name:'v-table',
    data() {
      return {
        iswidth:true,
        tableLabel:[
          {
            text:'排名',
            prop:'ranking',
            width:[100,70]
          },
          {
            text:'服务器名/IP',
            prop:'ip',
            width:[]
          },
          {
            text:'严重',
            prop:'yz',
            width:[90,50]
          },
          {
            text:'高危',
            prop:'gw',
            width:[90,50]
          },
          {
            text:'中危',
            prop:'zw',
            width:[90,50]
          },
          {
            text:'低危',
            prop:'dw',
            width:[90,50]
          },
          {
            text:'总数',
            prop:'sum',
            width:[90,50]
          }
        ],
        tableData: [{
          ranking:1,
          ip: '192.168.1.34',
          yz: 40,
          gw: 30,
          zw: 10,
          dw: 0,
          sum: 80
        }, {
          ranking:2,
          ip: '192.168.1.34',
          yz: 40,
          gw: 30,
          zw: 10,
          dw: 0,
          sum: 80
        }, {
          ranking:3,
          ip: '192.168.1.34',
          yz: 40,
          gw: 30,
          zw: 10,
          dw: 0,
          sum: 80
        }, {
          ranking:4,
          ip: '192.168.1.34',
          yz: 40,
          gw: 30,
          zw: 10,
          dw: 0,
          sum: 80
        },
          {
            ranking:5,
            ip: '192.168.1.34',
            yz: 40,
            gw: 30,
            zw: 10,
            dw: 0,
            sum: 80
          }
       ]
      }
    },
    methods:{
      tableRowClassName() {
          // return 'background:red';
          return 'warning-row';
      },
      headerBackground(){
        return 'color:#ffffff'
      },
      wresize(){
        if(document.body.clientWidth<=1349){
          this.iswidth = false
        }else{
          this.iswidth = true
        }
      }
    },
    mounted(){
      this.wresize()
      window.addEventListener('resize',this.wresize)
    }
  }
</script>
<style>
  .el-table th, .el-table tr{
    background: #08425a;
    color:#dddddd
  }
  .warning-row{
    font-size: 14px;
  }
  .el-table td, .el-table th.is-leaf{
    border-bottom: 1px solid #21556b;
  }
  .el-table--enable-row-hover .el-table__body tr:hover>td{
    background-color: #063b51!important;
    color:#ffffff;
  }
  .el-table--border::after, .el-table--group::after, .el-table::before{
    background-color: transparent;
  }
  .el-table td, .el-table th{
    padding: 18px 0;
  }
  .v-table{
    padding-top: .5em;
  }
  @media screen and (max-width: 1349px){
    .el-table td, .el-table th{
      padding: .8em 0;
      line-height: 1em;
      font-size: .4em;
    }
    .v-table{
      padding-top: 0;
    }

  }
</style>
