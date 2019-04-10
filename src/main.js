import Vue from 'vue'
import App from './App.vue'
// 引用样式
require('./assets/css/default.css');
require('./assets/css/style.css');
require('./assets/css/responsive.css');
require('./assets/css/animate.css');
// 引用js
require('./assets/js/script.js');

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app')
