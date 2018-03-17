import Vue from 'vue'
import MYURL from '../../const/MYURL.js'
const attendanceIndex = {
  state: {
    attendanceList: [],
    attendanceRangeList: []
  },
  mutations: {
    SaveAttendanceList(state, attendanceList) {
      state.attendanceList = attendanceList
      // console.log(state.attendanceList)
    },
    SaveattendanceRangeList(state, attendanceRangeList) {
      state.attendanceRangeList = attendanceRangeList
    }
  },
  actions: {
    AttendanceListAction({ state, commit, rootState }, keys) {
      return new Promise((resolve, reject) => {
        Vue.http.get(MYURL.URL_ATTENDANCE, { projectId: keys.projectId, date: keys.date }).then(response => {
          if (response.status === 200) {
            console.log("AttendanceListAction:" + '获取考勤列表成功')
            // console.log(response.body)
            // console.log(response.body.attendanceList)
            commit('SaveAttendanceList', response.body.attendanceList)
            resolve()
          } else {
            console.log("AttendanceListAction:" + '获取考勤列表失败');
            reject()
          }
        })
      })
    },
    AttendanceRangeListAction({ state, commit, rootState }, keys) {
      return new Promise((resolve, reject) => {
        Vue.http.get(MYURL.URL_ATTENDANCERANGE, {
            projectId: keys.projectId,
            startDate: keys.startDate,
            endDate: keys.endDate
          })
          .then(response => {
            if (response.status === 200) {
              console.log("AttendanceRangeListAction:" + '获取考勤统计列表成功')
              // console.log(response.body)
              // console.log(response.body.attendanceList)
              commit('SaveattendanceRangeList', response.body.attendanceRangeList)
               resolve()
            } else {
              console.log("AttendanceRangeListAction:" + '获取考勤统计列表失败');
               reject()
            }
          })
      })

    },
  },
  getters: {}
}
export default attendanceIndex
