<template>
 <nav class="nav-box">
   <div class="user">
     <div class="user-imgbox" :style="{ width:!isCollapse?'115px':'44px',height:!isCollapse?'115px':'44px' }">
       <img src="../../assets/user.jpg"/>
     </div>
     <p class="username">
        Admin
     </p>
   </div>
   <div class="nav-container" :class="isCollapse?'iscoll':''">
      <ul class="nav-list">
        <li class="nav-item "
            v-for="(item,index) in navList"
            @click="changeMain(index)"
            :key="index"
            >
          <a :class="!isCollapse&&(index==main)?'is-active':(index==main)?'is-active2':''">
            <i class="nav-icon el-icon-menu"></i>
            <span class="nav-title" :style="(!isCollapse)||(index==main)?{display:'inline',margin:(isCollapse)&&(index==main)?'0 0 0 80px':''}:{}">
              {{ item.text }}
            </span>
            <i class="arrow-icon el-icon-arrow-right" v-if="item.submenu" :style="index==main?{ transform:'rotate(90deg)'}:{}" style="transition:transform .3s"></i>
          </a>  <!-- 须将a表情换成router-link -->
          <!--:class="index==main?'iscoll-nav-item-list':''"-->
          <ul class="nav-item-list" :class="isCollapse?'iscoll-nav-item-list':''" v-if="item.submenu" :style="ulHeight(index,index==main)">
            <li class="nav-item-item" v-for="(ite,ind) in item.submenu" :key="ind">
              <a href="">
                <!--<i class="nav-icon el-icon-menu"></i>-->
                <span class="nav-item-title">
                   {{ ite.text }}
                </span>
                <i class="arrow-icon el-icon-arrow-right" v-if="ite.submenu"></i>
              </a>
            </li>

            <!--<li class="nav-item-item">-->
              <!--<a href="">-->
                <!--&lt;!&ndash;<i class="nav-icon el-icon-menu"></i>&ndash;&gt;-->
                <!--<span class="nav-item-title">-->
                   <!--二级菜单-->
                <!--</span>-->
                <!--<i class="arrow-icon el-icon-arrow-right"></i>-->
              <!--</a>-->
            <!--</li>-->
            <!--<li class="nav-item-item">-->
              <!--<a href="">-->
                <!--&lt;!&ndash;<i class="nav-icon el-icon-menu"></i>&ndash;&gt;-->
                <!--<span class="nav-item-title">-->
                   <!--二级菜单-->
                <!--</span>-->
                <!--<i class="arrow-icon el-icon-arrow-right"></i>-->
              <!--</a>-->
            <!--</li>-->
          </ul>
        </li>
      </ul>
   </div>

   <!-- 循环三级菜单-->
  <!--<el-menu default-active="1-4-1" class="el-menu-vertical-demo"-->
           <!--active-text-color='#ffffff'-->
           <!--background-color="#08425a"-->
           <!--@open="handleOpen" @close="handleClose"-->
           <!--:collapse="isCollapse"-->
           <!--text-color="#dddddd"-->
           <!--:class="isCollapse?'activea':''"-->
  <!--&gt;-->
    <!--<template  v-for="(item,index) in navList" >-->
    <!--<el-submenu v-if="item.children" :index="String(index+1)" :key="index" popper-class="nav-popper">-->
      <!--<template slot="title">-->
        <!--<i class="el-icon-location" :style="{marginLeft:!isCollapse?'25px':'0'}"></i>-->
        <!--<span slot="title">{{ item.name }}</span>-->
      <!--</template>-->
      <!--<el-menu-item-group v-for="(it,ind) in item.children" :key="ind">-->
        <!--<el-menu-item v-if="!it.children" :index="String(index+1) + '-' + String(ind+1)" style="padding: 0 50px">{{ item.name }}</el-menu-item>-->
        <!--<el-submenu v-else :index="String(index+1) + '-' + String(ind+1)" style="padding: 0 50px"  popper-class="nav-popper">-->
          <!--<el-menu-item  v-for="(j,i) in it.children" :index="String(index+1) + '-' + String(ind+1) + '-' + String(i+1)" :key="i">{{ j.name }}</el-menu-item>-->
        <!--</el-submenu>-->
      <!--</el-menu-item-group>-->
    <!--</el-submenu>-->
    <!--<el-menu-item v-if="!item.children" :index="String(index+1)"  popper-class="nav-popper">-->
      <!--<i class="el-icon-menu" :style="{marginLeft:!isCollapse?'25px':'0'}"></i>-->
      <!--<span slot="title">{{ item.name }}</span>-->
    <!--</el-menu-item>-->
    <!--</template>-->
  <!--</el-menu>-->
 </nav>
</template>
<script>
    export default {
      name: "v-navleft",
      data() {
        return {
          isCollapse: false,
          navList: [
            {
              text: '态势总览',
              icon: '',
            }, {
              text: '资产列表',
              icon: '',
            }, {
              text: '安全防御',
              icon: '',
              "submenu": [
                {"text": "漏洞管理", "sref": "app.security.vulnerablity-mgr",     "psref":"app.security" },
                {"text": "基线检查", "sref": "app.security.baselinecheck-mgr", "psref":"app.security" },
                {"text": "弱口令检查", "sref": "app.security.weakpwdchk-list", "psref":"app.security" },
                {"text": "防暴力破解", "sref": "app.security.anti-violence-cracking", "psref":"app.security" },
                {"text": "防端口扫描", "sref": "app.security.anti-port-scan", "psref":"app.security" }
              ]
            }, {
              text: '入侵检测',
              icon: '',
              "submenu": [
                {"text": "异常登录", "sref": "app.security.exceptionlogin",     "psref":"app.security" },
                {"text": "主机后门", "sref": "app.security.webshell", "psref":"app.security" },
                {"text": "主机异常", "sref": "app.security.hostanomaly", "psref":"app.security" }
              ]
            }, {
              text: '操作审计',
              icon: '',
            },
            {
              text: '安全配置',
              icon: '',
            },
            {
              text: '告警配置',
              icon: '',
            },
            {
              text: '用户管理',
              icon: '',
            },
            {
              text: '日志管理',
              icon: '',
            },
            {
              text: '安全卸载',
              icon: '',
            },
          ],
          main: null
        }
      },
      methods: {
        // handleOpen(key, keyPath) {
        //   console.log(key, keyPath);
        // },
        // handleClose(key, keyPath) {
        //   console.log(key, keyPath);
        // }
        changeMain(i){
          if(this.main === i){
            this.main = null
          }else{
            this.main = i
          }
        },
        ulHeight(...i){
          // if(this.navList[i[0]]){
          if(this.navList[i[0]].hasOwnProperty('submenu') && i[1]){
            let n = this.navList[i[0]].submenu.length;
            return {
              height: n*60 + 'px'
            }
          }else{
            return {  }
          }
        },
        windowHeight(){
          return document.body.clientHeight;
        }
      },
      props: {
      'iscollapse':{
        type:Boolean,
        default(){
          return true
        }
       }
     },
      mounted(){
        let _this = this;
        // this.$http.get('./static/sidebar-menu.json').then((res)=>{
        //   console.log(res.data[7])
        //   this.navList = res.data[7].submenu
        // })
        window.eventBus.$on('changenav',function(x){
          _this.isCollapse = x
        })
      }

    }
</script>

<style scoped>
  .nav-container{
    width: 100%;
  }
  .nav-item{
    background-color:#08425a;
    box-sizing: border-box;
    line-height: 60px;
    position: relative;
  }
  .nav-item a{
    display: block;
    font-size: 14px;
    color:#dddddd;
    height:60px;
    text-decoration: none;
    overflow: hidden;
    transition: padding .3s;
  }
  .nav-item>a {
    padding:0 50px;
  }
  .nav-item .nav-icon{
    margin-right: 40px;
    font-size: 20px;
    transition: margin-right .3s;
  }
  .nav-item .arrow-icon{
    float: right;
    line-height: 60px;
    margin-top:0;
    transition: margin-top 0.3s;
  }
  .nav-item span{
    transition: margin-top 0.3s;
  }
  .iscoll .nav-item>a{
    padding:0 20px;
    height: 60px;
    transition: all .3s;
    box-sizing: border-box;
    width: 64px;
  }

  .iscoll .nav-item .nav-icon{
    margin-right:0;
    font-size: 20px;
    transition: margin-right .3s;
  }
  .iscoll .nav-title{
    margin-top: 50px;
    display: none;
  }
  .iscoll.arrow-icon{
    display: none;
  }
  .nav-item-tooltip{

  }
  .nav-list>li>a:hover{
    background-color: #002e44;
  }
  .nav-item-title{
    margin-left: 30px;
  }
  .nav-item-list{
    height: 0;
    transition: height 0.5s;
    overflow: hidden;
  }
  .iscoll-nav-item-list{
    position: absolute;
    left:65px;
    width:200px;
    z-index: 99;
  }
  .iscoll-nav-item-list .nav-item-item{
    background-color: #003247;
    padding: 0 20px;
  }
 .nav-item .is-active2{
    width: 265px!important;
    position: relative;
    z-index: 999;
    background:#0c5070;
  }
  .nav-item-item{
    padding: 0 50px;
 }






  .el-menu li,span{
    font-size: 12px;
  }
  .el-menu {
    border:0;
  }
  .el-menu-item, .el-submenu__title{
    height:60px;
    line-height: 60px;
    /*background: ;*/
  }
  .user{
    width: 100%;
    padding: 35px 0;
    text-align: center;
  }
  .user .user-imgbox{
    max-width:115px;
    max-height:115px;
    width:115px;
    height:115px;
    border:2px solid #ffffff;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto;
    line-height:0;
    transition: all 0.5s;
  }
  .user .user-imgbox img{
    width: 100%;
    height:auto;
  }
  .user .username{
    display: block;
    line-height: 15px;
    font-size: 14px;
    color:#ffffff;
  }
  .activea .is-active{
    background-image: none;
    background-size: 100% 100%;
  }
   .is-active{
    background-image: url("../../assets/button-3.png");
    background-size: 100% 100%;
  }
  .el-menu-item:focus, .el-menu-item:hover{
    /*background-image: url("../../assets/button.png")!important;*/
    background-size: 100% 100%;
    /*background-color:rgba(16,95,134,.5)!important;*/
  }
  /*.el-submenu >div:hover{*/
    /*!*background-image: url("../../assets/button.png")!important;*!*/
    /*background-size: 100% 100%;*/
    /*background-color:rgba(16,95,134,.5)!important;*/
    /*color:red*/
  /*}*/
  .el-submenu__title{
    background-color: #000!important;
  }

  .el-menu-item span{
    opacity: 1;
  }
  .activea span{
    opacity: 0;
  }
  .el-menu-item i{
    margin-left: 0;
    transition: margin-left 5s;
  }
  /*.nav-box{*/
    /*overflow-y: auto;*/
    /*overflow-x:visible;*/
    /*height:1080px;*/
  /*}*/
  /*.nav-box::-webkit-scrollbar {*/
    /*width: 4px;*/
  /*}*/
  /*.nav-box::-webkit-scrollbar-track {*/
    /*background-color:#093446fa;*/
    /*-webkit-border-radius: 2em;*/
    /*-moz-border-radius: 2em;*/
    /*border-radius:2em;*/
  /*}*/
  /*.nav-box::-webkit-scrollbar-thumb {*/
    /*background-color:#0d5a79;*/
    /*-webkit-border-radius: 2em;*/
    /*-moz-border-radius: 2em;*/
    /*border-radius:2em;*/
  /*}*/
</style>
