import Vue from 'vue'
import Router from 'vue-router'
//top pages
import Login from '@/pages/Login/login'
import Register from '@/pages/Register/register'
import MainPage from '@/pages/mainPage'
import My from '@/pages/My/my'
import Search from '@/pages/Search/search'
//second pages
import ProjectList from '@/pages/Project/projectList'
import ProjectDetails from '@/pages/Project/projectDetails'
// third pages
import Staff from '@/pages/Project/ProjectDetails/staff'
import Task from '@/pages/Project/ProjectDetails/task'
import Attendance from '@/pages/Project/ProjectDetails/attendance'
import test from '../pages/test.vue'
Vue.use(Router)
// 兄弟 or 侄子 用router-to ，父子 包含router-view
const vueRouter = new Router({
  routes: [
    { path: '', redirect: { name: '登录' } },
    { path: '/login', name: '登录', component: Login },
    {
      path: '/index',
      name: '首页',
      component: MainPage,
      redirect: { name: '项目列表' },
      children: [{ path: '', redirect: { name: '项目列表' } },
        { 
          path: 'my', 
          name: '', 
          component: My 
        },
        {
          path: "project-list",
          name: '项目列表',
          component: ProjectList
        },
        {
          path: 'project-details',
          name: '项目详情',
          component: ProjectDetails,
          redirect: { name: '任务总览' }, //本来就是用下面的path:''渲染出来的，但是这里没用，不知何解
          children: [{
              path: 'task',
              name: '任务总览',
              component: Task,
              meta: ["首页", "项目详情", "任务总览"]
            },
            {
              path: 'staff',
              name: '人员',
              component: Staff,
              meta: ["首页", "项目详情", "人员"]
            },
            {
              path: 'attendance',
              name: '考勤',
              component: Attendance,
              meta: ["首页", "项目详情", "考勤"]
            }
          ]
        }
      ]
    },
    { path: '/register', name: '注册', component: Register },
    { path: '/my', name: '我的', component: My },
    { path: '/search', name: '搜索', component: Search },
    { path: '/login', name: '', component: Login },
    { path: '/test', component:test}
  ]
})

export default vueRouter
