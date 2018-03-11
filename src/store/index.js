import Vue from 'vue'
import Vuex from 'vuex'
import Attendance from './modules/attendanceIndex.js'
import Staff from './modules/staffIndex.js'
import Task from './modules/taskIndex.js'
import MYURL from '../const/MYURL.js'
Vue.use(Vuex)
const defaultState = {
  IsLogin: false,
  userInfo: {
    username: '',
    userid: ''
  },
  projectList: {
    joinProjectList: [],
    managerProjectList: []
  }
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
    SaveProjectList(state, projectList) {
      state.projectList = projectList
    },
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
    }
  },
  actions: {
    ResetStateAction({ commit }) {
      commit('ResetState')
    },
    LoginAction({ commit }, userInfo) {
      commit('SaveUserInfo', userInfo)
    },
    ProjectListAction({ commit }, projectList) {
      Vue.http.post(MYURL.URL_ALLPROJECTLIST, { userid: state.userInfo.userid }).then(response => {
        if (response.status === 200) {
          console.log("ProjectListAction:" + '获取项目列表成功')
          commit('SaveProjectList', projectList)
        } else {
          console.log("ProjectListAction:" + '获取项目列表失败');
        }
      })
    },
    JoinProjectListAction({ commit }, userid) {
      Vue.http.post(MYURL.URL_JOINPROJECTLIST, { userid: userid }).then(response => {
        if (response.status === 200) {
          console.log("JoinProjectListAction:" + '获取我参与的项目列表成功')
          commit('SaveJoinProjectList', response.body.projectList)
        } else {
          console.log("JoinProjectListAction:" + '获取我参与的项目列表失败');
        }
      })

    },
    ManageProjectListAction({ commit }, userid) {
      Vue.http.post(MYURL.URL_MANAGEPROJECTLIST, { userid: userid }).then(response => {
        if (response.status === 200) {
          console.log("ManageProjectListAction:" + '获取我管理的项目列表成功')
          commit('SaveManageProjectList', response.body.projectList)
        } else {
          console.log("ManageProjectListAction:" + '获取我管理的项目列表失败');
        }
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
  },

  modules: {
    attendance: Attendance, // attendance moudle
    staff: Staff, //staff moudle
    task: Task, //task moudle
  }
})
export default store
