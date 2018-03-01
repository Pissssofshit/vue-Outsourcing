import Vue from 'vue'
import Vuex from 'vuex'
import Attendance from './modules/attendanceIndex.js'
import Staff from './modules/staffIndex.js'
import Task from './modules/taskIndex.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      login: false,
      userInfo: 'no',
      projectList: []
  },
  getters: {
  },
  mutations: {
    setAllInfo(state, obj) {
      state.allInfo = obj
    }
  },
  actions: {
    set_AllInfo({ commit }, obj) {
      commit('setAllInfo', obj)
    }
  },

  modules: {
    attendance: Attendance, // attendance moudle
    staff: Staff, //staff moudle
    task: Task, //task moudle
  }
})
export default store
