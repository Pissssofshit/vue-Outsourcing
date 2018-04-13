// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.css'
// discomfort
import Vueresource from 'vue-resource'
import $ from 'jquery'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// discomfort
import Chart from 'chart.js'
import store from './store'
import sChart from 'vue-schart'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//vue-router + vuex +vue-resource+element-ui
// Vue.use(VueRouter);
Vue.use(iView);
Vue.use(sChart)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vueresource)

Vue.use(VueAwesomeSwiper)
/*
  路由守卫 判断是否登录
*/
router.beforeEach(function(to, from, next) {
  const nextRoute = ['登录', '注册'];
  const auth = store.state.IsLogin;
  console.log(from.name)
  // console.log("main.js:"+auth)
  // console.log("main.js:"+nextRoute)
  console.log(to.name)
  // console.log(to.name)
  //除了登录和注册页面其他都要验证是否登录
  if (from.name==='人脸验证'&&to.name==='登录') {
     router.push({ name: '人脸验证' })
     // console.log("1")
     // return
  }
  if (nextRoute.indexOf(to.name) === -1) {
    //未登录
    // console.log("main.js:"+nextRoute.indexOf(to.name))
    // console.log("main.js:"+store.state.IsLogin)
    if (store.state.IsLogin === false) {
      router.push({ name: '登录' })
      // console.log("2")
       // return
    }
  }
  //已登录的情况再去登录页，跳转至首页
  if (from.name!='人脸验证'&&to.name === '登录') {
    if (store.state.IsLogin) {
      router.push({ name: '首页' });
       // console.log("3")
       // return
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
