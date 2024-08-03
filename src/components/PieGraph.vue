<template>
  <div ref="PieGraph" style="height: 260px">折线图</div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  data() {
    return {
      GraphData: [],
    }
  },

  mounted() {
    this.GraphData = this.$store.state.graph.GraphData.videoData
    // console.log('videoData', this.GraphData)
    // 基于准备好的dom，初始化echarts实例
    const userChart = echarts.init(this.$refs.PieGraph)
    const option = {
      //标题
      // title: { text: '饼状图' },
      //图例
      legend: {},
      //鼠标悬浮显示图表信息
      tooltip: {},
      //图表数据
      series: [
        {
          type: 'pie',
          radius: '50%',
          data: this.GraphData,
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
