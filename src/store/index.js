import Vue from 'vue'
import Vuex from 'vuex'
import Attendance from './modules/attendanceIndex.js'
import Staff from './modules/staffIndex.js'
import Task from './modules/taskIndex.js'
import MYURL from '../const/MYURL.js'
Vue.use(Vuex)
const defaultState = {
  //用户
  IsLogin: false,
  userInfo: {
    username: '',
    userid: ''
  },
  // 项目
  projectList: {
    joinProjectList: [],
    managerProjectList: []
  },
  ProjectId: ''
}

const store = new Vuex.Store({
  state: defaultState,
  getters: {},
  mutations: {
    ResetState(state) {
      state.IsLogin = false
      state.userInfo.username = ""
      state.userInfo.userid = ""
      state.projectList.joinProjectList = []
      state.projectList.managerProjectList = []
    },
    SaveUserInfo(state, userInfo) {
      state.IsLogin = true
      state.userInfo.username = userInfo.username
      state.userInfo.userid = userInfo.userid
    },
    // SaveProjectList(state, projectList) {
    //   state.projectList = projectList
    // },
    SaveJoinProjectList(state, joinProjectList) {
      state.projectList.joinProjectList = joinProjectList
    },
    SaveManageProjectList(state, managerProjectList) {
      state.projectList.managerProjectList = managerProjectList
    },
    AddManageProjectList(state, newProject) {
      state.projectList.managerProjectList.push(newProject)
    },
    AddJoinProjectList(state, newProject) {
      state.projectList.joinProjectList.push(newProject)
    },
    IntoProjectDetails(state, projectId) {
      state.ProjectId = projectId
    }
  },
  actions: {
    ResetStateAction({ commit }) {
      commit('ResetState')
    },
    LoginAction({ commit }, userInfo) {
      commit('SaveUserInfo', userInfo)
    },
    JoinProjectListAction({ commit }, userid) {
      return new Promise((resolve, reject) => {
        Vue.http.get(MYURL.URL_JOINPROJECTLIST, { userid: userid }).then(response => {
          if (response.status === 200) {
            console.log("JoinProjectListAction:" + '获取我参与的项目列表成功')
            commit('SaveJoinProjectList', response.body.projectList)
            resolve()
          } else {
            console.log("JoinProjectListAction:" + '获取我参与的项目列表失败');
            reject()
          }
        })
      })
    },
    ManageProjectListAction({ commit }, userid) {
      return new Promise((resolve, reject) => {
        Vue.http.get(MYURL.URL_MANAGEPROJECTLIST, { userid: userid }).then(response => {
          if (response.status === 200) {
            console.log("ManageProjectListAction:" + '获取我管理的项目列表成功')
            commit('SaveManageProjectList', response.body.projectList)
            resolve()
          } else {
            console.log("ManageProjectListAction:" + '获取我管理的项目列表失败');
            reject()
          }
        })
      })
    },
    AddJoinProjectListAction({ commit }, projectId, projectName) {
      let newProject = { projectId: projectId, projectName: projectName };
      commit('AddJoinProjectList', newProject)
    },
    AddManageProjectListAction({ commit }, projectId, projectName) {
      let newProject = { projectId: projectId, projectName: projectName };
      commit('AddManageProjectList', newProject)
    },
    IntoProjectDetailsAction({ commit }, projectId) {
      commit('IntoProjectDetails', projectId)
    }
  },

  modules: {
    attendance: Attendance, // attendance moudle
    staff: Staff, //staff moudle
    task: Task, //task moudle
  }
})
export default store
