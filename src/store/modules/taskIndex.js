const taskIndex = {
	state: {
		showRenwu: false
	},
	mutations: {
		showRenwu(state){
			console.log('im show renwu')
			state.showRenwu=true
		},
		hideRenwu(state){
			state.showRenwu=false
		}
	},
	actions: {
	},
	getters: {
	}
}
export default taskIndex
