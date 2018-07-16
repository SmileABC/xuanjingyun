// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import States from './vuex/states'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import AqPosture from './components/Pandect/PandectItem/AqPosture'
import WxAnalysis from './components/Pandect/PandectItem/WxAnalysis'
import AqRating from './components/Pandect/PandectItem/AqRating'
import AqEventHostTop from './components/Pandect/PandectItem/AqEventHostTop'
import Table from './components/Pandect/PandectItem/Table'

Vue.use(ElementUI);
Vue.use(Vuex);
const store = new Vuex.Store(States)

Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.component(AqPosture.name,AqPosture)
Vue.component(WxAnalysis.name,WxAnalysis)
Vue.component(AqRating.name,AqRating)
Vue.component(AqEventHostTop.name,AqEventHostTop)
Vue.component(Table.name,Table)

window.eventBus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
