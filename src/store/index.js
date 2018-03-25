import Vue from 'vue'
import Vuex from 'vuex'
import Attendance from './modules/attendanceIndex.js'
import Staff from './modules/staffIndex.js'
import Task from './modules/taskIndex.js'
import MYURL from '../const/MYURL.js'
Vue.use(Vuex)
const logo = "https://edu-image.nosdn.127.net/BF967F2AE9D9F9379B3ADBBC6635C2A0.jpg?imageView&amp;thumbnail=510y288&amp;quality=100&amp;thumbnail=223x125&amp;quality=100"
const defaultState = {
  //用户
  IsLogin: false,
  userInfo: {
    username: '',
    userid: ''
  },
  // 项目
  projectList: {
    prepareProjectList: [{
      projectId: "",
      projectName: "",
      projectLogo: "",
    }],
    startProjectList: [{
      projectId: "",
      projectName: "",
      projectLogo: "",
    }],
    finishProjectList: [{
      projectId: "",
      projectName: "",
      projectLogo: "",
    }]
  },
  ProjectId: '',
  currentProjectId: '',
  // 界面
  aside: false
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
    AddPrepareProjectList(state, newProject) {
      state.projectList.prepareProjectList.push(newProject)
    },
    // AddManageProjectList(state, newProject) {
    //   state.projectList.managerProjectList.push(newProject)
    // },
    // AddJoinProjectList(state, newProject) {
    //   state.projectList.joinProjectList.push(newProject)
    // },
    SavePrepareProjectList(state, prepareProjectList) {
      state.projectList.prepareProjectList = prepareProjectList
    },
    SaveStartProjectList(state, startProjectList) {
      state.projectList.startProjectList = startProjectList
    },
    SaveFinishProjectList(state, finishProjectList) {
      state.projectList.finishProjectList = finishProjectList
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
    PrepareProjectListAction({ commit }, userid) {
      return new Promise((resolve, reject) => {
        Vue.http.get(MYURL.URL_PrepareProjectList, { userid: userid })
          .then(response => {
            if (response.status === 200) {
              commit('SavePrepareProjectList', response.body.projectList)
              resolve()
            } else {
              reject()
            }
          })
      })
    },
    StartProjectListAction({ commit }, userid) {
      return new Promise((resolve, reject) => {
        Vue.http.get(MYURL.URL_StartProjectList, { userid: userid })
          .then(response => {
            if (response.status === 200) {
              commit('SaveStartProjectList', response.body.projectList)
              resolve()
            } else {
              reject()
            }
          })
      })
    },
    FinishProjectListAction({ commit }, userid) {
      return new Promise((resolve, reject) => {
        Vue.http.get(MYURL.URL_FinishProjectList, { userid: userid }).then(response => {
          if (response.status === 200) {
            commit('SaveFinishProjectList', response.body.projectList)
            resolve()
          } else {
            reject()
          }
        })
      })
    },
    AddPrepareProjectListAction({ commit }, projectId, projectName) {
      let newProject = { projectLogo: logo, projectId: projectId, projectName: "待定" };
      commit('AddPrepareProjectList', newProject)
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
