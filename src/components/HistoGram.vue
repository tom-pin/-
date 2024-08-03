<template>
  <div ref="HistoGram" style="height: 260px">折线图</div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  data() {
    return {
      GraphData: [],
    }
  },

  // computed: {
  //   // 获取vuex中的图表数据
  //   GraphData() {
  //     return this.$store.state.graph.GraphData.userData
  //   },
  // },
  mounted() {
    this.GraphData = this.$store.state.graph.GraphData.userData
    // console.log('HistoGram', this.GraphData)
    // 基于准备好的dom，初始化echarts实例
    const userChart = echarts.init(this.$refs.HistoGram)

    const option = {
      //标题
      // title: { text: '直方图' },
      //图例
      legend: {},
      //鼠标悬浮显示图表信息
      tooltip: {},
      xAxis: {
        data: this.GraphData.map((item) => item.data),
      },
      yAxis: {},
      series: [
        {
          name: '新增用户',
          type: 'bar',
          data: this.GraphData.map((item) => item.new),
        },
        {
          name: '活跃用户',
          type: 'bar',
          data: this.GraphData.map((item) => item.active),
        },
      ],
    }
    // 调用实例方法
    userChart.setOption(option)
  },
}
</script>

<style lang='less' scoped>
</style>
