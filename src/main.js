// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vueresource from 'vue-resource'
import $ from 'jquery'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

// Vue.use(VueRouter);
Vue.use(iView);
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vueresource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
