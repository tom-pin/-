<template>
  <div ref="LineGraph" style="height: 260px">折线图</div>
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
    this.GraphData = this.$store.state.graph.GraphData.orderData
    console.log('LineGraphData', this.GraphData)
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(this.$refs.LineGraph)
    const xAxis = Object.keys(this.GraphData.data[0]) //获取第一个对象的key值，生成X轴的数组
    // console.log('xAxis', xAxis)
    const option = {
      // title: { text: '折线图' },
      //图例
      legend: {},
      //鼠标悬浮显示图表信息
      tooltip: {},
      xAxis: {
        type: 'category', //类目轴
        data: xAxis, //获取对象的key值
      },
      yAxis: {},
      series: [],
    }

    // 遍历对象的key值，添加series
    xAxis.forEach((key) => {
      option.series.push({
        name: key,
        data: this.GraphData.data.map((item) => item[key]), //根据对象的key值，遍历整个对象的值
        type: 'line',
      })
    })
    // console.log('series', option.series)
    myChart.setOption(option)
  },
}
</script>

<style lang='less' scoped>
</style>
