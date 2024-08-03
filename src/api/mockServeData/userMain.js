//mock模拟数据
import Mock from 'mockjs'

//图表数据
let List = []
export default {
  getStatisticalData: () => {
    //生成100~8000的随机数，保留小数 最小0位 最大0位
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          苹果: Mock.Random.float(100, 8000, 0, 0),
          vivo: Mock.Random.float(100, 8000, 0, 0),
          oppo: Mock.Random.float(100, 8000, 0, 0),
          魅族: Mock.Random.float(100, 8000, 0, 0),
          小米: Mock.Random.float(100, 8000, 0, 0),
        })
      )
    }
    let ListData = []
    for (let i = 0; i < 7; i++) {
      ListData.push(
        Mock.mock({
          todayBuy: Mock.Random.float(50, 200, 0, 0),
          monthbuy: Mock.Random.float(200, 300, 0, 0),
          totalBuy: Mock.Random.float(800, 2000, 0, 0),
        })
      )
    }
    return {
      code: 20000,
      data: {
        //饼图
        videoData: [
          {
            name: '小米',
            value: 2999,
          },
          {
            name: 'vivo',
            value: 1699,
          },
          {
            name: 'oppo',
            value: 1599,
          },
          {
            name: '苹果',
            value: 5999,
          },
          {
            name: '魅族',
            value: 1999,
          },
        ],
        //柱状图
        userData: [
          {
            data: '周一',
            new: 5,
            active: 200,
          },
          {
            data: '周二',
            new: 10,
            active: 260,
          },
          {
            data: '周三',
            new: 12,
            active: 500,
          },
          {
            data: '周四',
            new: 16,
            active: 290,
          },
          {
            data: '周五',
            new: 5,
            active: 200,
          },
          {
            data: '周六',
            new: 10,
            active: 500,
          },
          {
            data: '周日',
            new: 20,
            active: 600,
          },
        ],
        //折线图
        orderData: {
          date: [
            '20191001',
            '20191002',
            '20191003',
            '20191004',
            '20191005',
            '20191006',
            '20191007',
          ],
          data: List,
        },
        //表格数据
        tableData: [
          {
            name: 'oppo',
            todayBuy: 100,
            monthbuy: 300,
            totalBuy: 800,
          },
          {
            name: '魅族',
            todayBuy: 80,
            monthbuy: 240,
            totalBuy: 700,
          },
          {
            name: '苹果',
            todayBuy: 200,
            monthbuy: 400,
            totalBuy: 1800,
          },
          {
            name: 'vovo',
            todayBuy: 120,
            monthbuy: 260,
            totalBuy: 1000,
          },
          {
            name: '小米',
            todayBuy: 130,
            monthbuy: 360,
            totalBuy: 1300,
          },
        ],
        //表格数据2
        ListData: [],
      },
    }
  },
}
