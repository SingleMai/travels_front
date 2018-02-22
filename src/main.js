import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import store from './store' // 引入store
import 'js/aliFont.js' // 阿里图标
import 'mint-ui/lib/style.css'
// 引入通用样式文件
import 'sass/index.sass'
import 'sass/mint.sass'
Vue.config.productionTip = false

Vue.use(Mint)
// 富文本插件
// import VueQuillEditor from 'vue-quill-editor'
// Vue.use(VueQuillEditor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
