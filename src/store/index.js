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
        projectId: "1",
        projectName: "人脸识别数据整理",
        projectLogo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523619533231&di=d4dfb2651dc27ef98c0a48670886929d&imgtype=0&src=http%3A%2F%2Fimg3.qianzhan.com%2Fnews%2F201710%2F09%2F20171009-4821d52a1f888617_600x5000.jpg",
        projectState: '整理、分类识别数据',
      },
      {
        projectId: "2",
        projectName: "自然语言整理",
        projectLogo: "https://edu-image.nosdn.127.net/BF967F2AE9D9F9379B3ADBBC6635C2A0.jpg?imageView&amp;thumbnail=510y288&amp;quality=100&amp;thumbnail=223x125&amp;quality=100",
        projectState: '整理自然语言'
      },
    ],
    startProjectList: [{
        projectId: "2",
        projectName: "鹅脸识别",
        projectLogo: "http://5b0988e595225.cdn.sohucs.com/images/20180401/c0875b628c574e82bb808d4e6a405b2d.jpeg",
        projectState: '尝试识别鹅脸'
      },
      {
        projectId: "2",
        projectName: "猫脸识别",
        projectLogo: "http://www.gpuworld.cn/ymfiles/images/1485413038.png",
        projectState: '尝试识别猫脸'
      },
       {
        projectId: "2",
        projectName: "狗脸识别",
        projectLogo: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=952826246,1824229028&fm=27&gp=0.jpg",
        projectState: '尝试识别狗脸'
      },
    ],
    finishProjectList: [{
      projectId: "1",
      projectName: "虹膜识别",
      projectLogo: "https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=679ee9e68db1cb132a643441bc3d3d2b/a8773912b31bb051ab2f3121367adab44aede0b4.jpg",
      projectState: '整理虹膜识别数据'
    }, ]
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
