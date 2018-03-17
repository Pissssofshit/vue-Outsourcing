import Vue from 'vue'
import MYURL from '../../const/MYURL.js'

const staffIndex = {
  state: {
    staffList: []
  },
  mutations: {
    SaveStaffList(state, staffList) {
      state.staffList = staffList
    },
    // 假把戏
    AddNewStaff(state, newStaff) {
      let Staff = {
        staffAge: 20,
        staffId: newStaff.staffId,
        staffJoinName: "2018-1-1",
        staffName: 'heihei',
        staffPhone: '1092',
        staffPostion: newStaff.staffPostion,
        staffWeChat: 'WMBYY',
      }
      state.staffList.push(Staff)
    },
  },
  actions: {
    StaffListAction({ state, commit, rootState }, projectId) {
      return new Promise((resolve, reject) => {
        Vue.http.get(MYURL.URL_STAFF, { projectId: projectId }).then(response => {
          if (response.status === 200) {
            console.log("StaffListAction:" + '获取人员列表成功')
            commit('SaveStaffList', response.body.staffList)
            resolve()
          } else {
            console.log("StaffListAction:" + '获取人员列表失败')
            reject()
          }
        })
      })
    },

    // 假把戏 应该put
    AddNewStaffAction({ state, commit, rootState }, newStaff) {
      commit('AddNewStaff', newStaff)
    }
  },
  getters: {}
}
export default staffIndex
