import Vue from 'vue'
import Router from 'vue-router'
//top pages
import Login from '@/pages/Login/login'
import Auth from '@/pages/Login/authentication'
import Register from '@/pages/Register/register'
import MainPage from '@/pages/mainPage'
import My from '@/pages/My/my'
import Search from '@/pages/Search/search'
//second pages
import ProjectList from '@/pages/Project/projectList'
import ProjectDetails from '@/pages/Project/projectDetails'
import ProjectCreate from '@/pages/Project/projectCreate'
// third pages
import Staff from '@/pages/Project/ProjectDetails/staff'
import Recordgraph from '@/pages/Project/ProjectDetails/recordgraph'
import ProjectPlan from '@/pages/Project/ProjectDetails/projectplan'
import ProjectPower from '@/pages/Project/ProjectDetails/projectpower'
import Tasklist from '@/pages/Project/ProjectDetails/tasklist'
import Attendance from '@/pages/Project/ProjectDetails/attendance'
import test from '../pages/test.vue'
Vue.use(Router)
// 兄弟 or 侄子 用router-to ，父子 包含router-view
const vueRouter = new Router({
  routes: [
    { path: '', redirect: { name: '登录' } },
    { path: '/login', name: '登录', component: Login },
    { path: "/au", name: "人脸验证", component: Auth },
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
          path: "project-create",
          name: '新建项目',
          component: ProjectCreate
        },
        {
          path: 'project-details',
          name: '项目详情',
          component: ProjectDetails,
          redirect: { name: '任务总览' }, 
          children: [
            {
              path: 'tasklist',
              name: '任务总览',
              component: Tasklist,
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
            },
            {
              path: 'recordgraph',
              name: '记录图表',
              component: Recordgraph,
              meta: ["首页", "项目详情", "记录图表"]
            },
            {
              path: 'projectplan',
              name: '项目计划',
              component: ProjectPlan,
            },
            {
              path: 'ProjectPower',
              name: '项目权限',
              component: ProjectPower
            }
          ]
        }
      ]
    },
    { path: '/register', name: '注册', component: Register },
    { path: '/my', name: '我的', component: My },
    { path: '/search', name: '搜索', component: Search },
    { path: '/login', name: '', component: Login },
    { path: '/test', component: test }
  ]
})

export default vueRouter
