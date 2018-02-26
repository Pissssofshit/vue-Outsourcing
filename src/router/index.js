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

Vue.use(Router)
// 兄弟 or 侄子 用router-to ，父子 包含router-view
export default new Router({
  routes: [{
      path: '/',
      name: '首页',
      component: MainPage,
      children: [{ path: '', redirect: { name: '项目列表' } },
        {
          path: "project-list",
          name: '项目列表',
          component: ProjectList
        },
        {
          path: 'project-details',
          name: '项目详情',
          component: ProjectDetails,
          children: [{ path: '', redirect: { name: '任务总览' } },
            {
              path: 'task',
              name: '任务总览',
              component: Task,
              meta: []
            },
            {
              path: 'staff',
              name: '',
              component: Staff,
              meta: []
            },
            {
              path: 'attendance',
              name: '',
              component: Attendance,
              meta: []
            }
          ]
        }
      ]
    },
    { path: '/login', name: '', component: Login },
    { path: '/register', name: '', component: Register },
    { path: '/my', name: '', component: My },
    { path: '/search', name: '', component: Search },
  ]
})
