<template>
  <div>
    <el-row>
      <el-col :span="8">
        <el-card class="box-card">
          <div class="user">
            <img src="../assets/imagess/user.png" alt="头像" />
            <div class="userinfo">
              <p class="name">Admin</p>
              <p class="access">管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>登录地点：<span>广州</span></p>
            <p>登录时间：<span>2024/7/25</span></p>
          </div>
        </el-card>
        <el-card class="data-card" style="margin-top: 20px">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column
              v-for="(val, key) in tableLabel"
              :key="key"
              :label="val"
              :prop="key"
              width="auto"
            >
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16" style="padding-left: 20px">
        <div class="num">
          <el-card
            v-for="item in countData"
            :key="item.name"
            :body-style="{ display: 'flex', padding: 0 }"
          >
            <i
              class="icon"
              :class="`el-icon-${item.icon}`"
              :style="{ background: item.color }"
            ></i>
            <div class="detail">
              <p class="price">¥{{ item.value }}</p>
              <p class="desc">{{ item.name }}</p>
            </div>
          </el-card>
        </div>
        <el-card style="height: 260px">
          <!-- 折线图 -->
          <LineGraph v-if="isGraph" />
        </el-card>
        <div class="graph">
          <!-- 柱状图 -->
          <el-card style="height: 240px">
            <HistoGram v-if="isGraph" />
          </el-card>
          <el-card style="height: 240px">
            <PieGraph v-if="isGraph" />
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getData } from '../api/index'
import LineGraph from '../components/LineGraph.vue'
import HistoGram from '../components/HistoGram.vue'
import PieGraph from '../components/PieGraph.vue'

export default {
  name: 'UserMain',
  components: { LineGraph, HistoGram, PieGraph },
  data() {
    return {
      isGraph: false,
      tableData: [],
      tableLabel: {
        name: '品牌',
        todayBuy: '今日购买',
        monthbuy: '本月购买',
        totalBuy: '总购买',
      },
      countData: [
        {
          name: '今日支付订单',
          value: 15,
          icon: 'success',
          color: '#2ec7c9',
        },
        {
          name: '今日收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980',
        },
        {
          name: '今日未支付订单',
          value: 1,
          icon: 's-goods',
          color: '#999999',
        },
        {
          name: '本月支付订单',
          value: 312,
          icon: 'success',
          color: '#2ec7c9',
        },

        {
          name: '本月收藏订单',
          value: 60,
          icon: 'star-on',
          color: '#ffb980',
        },

        {
          name: '本月未支付订单',
          value: 18,
          icon: 's-goods',
          color: '#999999',
        },
      ],
    }
  },
  created() {
    getData().then((data) => {
      this.tableData = data.data.data.tableData
      this.$store.commit('getGraphData', data)
      //开始渲染子组件
      this.isGraph = true
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.data-card {
  height: 415px;
  overflow: hidden;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}
.user {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(70, 70, 69);
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 40px;
  }
  .userinfo {
    .name {
      margin-bottom: 20px;
      font-size: 30px;
    }
    .access {
      font-size: 16px;
      color: rgb(114, 114, 112);
    }
  }
}
.login-info {
  margin-left: 20px;
  p {
    line-height: 28px;
    font-size: 14x;
    color: #999999;
    span {
      margin-left: 70px;
      color: #666666;
    }
  }
}
.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .icon {
    width: 80px;
    height: 80px;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
  .detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
    .price {
      margin: bottom 10px;
      font-size: 30px;
      line-height: 30px;
      height: 30px;
    }
    .desc {
      font-size: 14px;
      color: #999;
      text-align: center;
    }
  }
  .el-card {
    width: 32%;
    margin-bottom: 20px;
  }
}
.graph {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 48%;
  }
}
</style>
