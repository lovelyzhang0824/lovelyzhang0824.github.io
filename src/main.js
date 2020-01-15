import Vue from 'vue'

//导入所有组件并且引入css文件
import Vant from 'vant';
import 'vant/lib/index.css';

import App from './App.vue'
import router from './router'

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
