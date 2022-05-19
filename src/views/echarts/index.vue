<script lang="ts" setup>
import {nextTick, onMounted, reactive} from 'vue'
import * as echarts from 'echarts'
import {EChartsType} from "echarts/types/dist/echarts";


// 指定图表的配置项和数据
const option = reactive({
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }]
})
const option2 = reactive({
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        {value: 1048, name: 'Search Engine'},
        {value: 735, name: 'Direct'},
        {value: 580, name: 'Email'},
        {value: 484, name: 'Union Ads'},
        {value: 300, name: 'Video Ads'}
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
})

let myChart: EChartsType | null = null
let myChart2: EChartsType | null = null

function init() {
// 基于准备好的dom，初始化echarts实例
  myChart = echarts.init(document.getElementById('echarts') as HTMLDivElement)
  myChart2 = echarts.init(document.getElementById('echarts2') as HTMLDivElement)
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
  myChart2.setOption(option2)
}

const handleAddData = () => {
  option.series[0].data.push(Math.random() * 100)
  option.xAxis.data.push('新增商品')
  myChart?.setOption(option)
}
onMounted(() => {
  nextTick(() => {
    init()
  })
})
</script>

<template>
  <div class="echarts-page">
    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <button @click="handleAddData">Add Data</button>
    <div id="echarts" style="width: 600px;height:400px;"></div>
    <div id="echarts2" style="width: 600px;height:400px;"></div>
  </div>
</template>

<style lang="scss" scoped>
.root-page {

}
</style>
