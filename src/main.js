// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// discomfort
import Vueresource from 'vue-resource'
import $ from 'jquery'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// discomfort

import store from './store'

//vue-router + vuex +vue-resource+element-ui
// Vue.use(VueRouter);
Vue.use(iView);
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vueresource)


/*
  路由守卫 判断是否登录
*/
router.beforeEach(function(to, from, next) {
  const nextRoute = ['登录', '注册'];
  const auth = store.state.IsLogin;
  // console.log("main.js:"+auth)
  // console.log("main.js:"+nextRoute)
  // console.log("main.js:"+to.name)
  //除了登录和注册页面其他都要验证是否登录
  if (nextRoute.indexOf(to.name) === -1) {
    //未登录
    // console.log("main.js:"+nextRoute.indexOf(to.name))
    // console.log("main.js:"+store.state.IsLogin)
    if (store.state.IsLogin === false) {
      router.push({ name: '登录' })
    }
  }
  //已登录的情况再去登录页，跳转至首页
  if (to.name === '登录') {
    if (store.state.IsLogin) {
      router.push({ name: '首页' });
    }
  }
  next();
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
