export default {
  mutations: {
    // 获取用户图表数据
    getGraphData(state, data) {
      state.GraphData = data.data.data
      // console.log('getGraphData', state.GraphData)
    },
  },
  state: {
    GraphData: [],
  },
}
