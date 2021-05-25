// 显示时间
import { getDateTime } from './utils.js'

function showTime() {
  const time = getDateTime()
  document.getElementById('time').innerHTML = `当前时间: ${time} `
}

setInterval(showTime, 1000)

const echartBar1 = echarts.init(document.getElementById('bar1'))

const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'shadow'
    }
},
  // 指定图表的配置项和数据
    title: {
        text: '柱状图就业行业',
        textStyle: {
          color: '#fff',
        },
        textAlign: 'auto'
    },
    color: ['#2f89cf'],
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
        axisLabel: {
          color: 'rgba(255,255,255, .6)',
          fontSize: '12px'
        },
        axisLine: {
          show: false
        }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: 'rgba(255,255,255, .6)',
        fontSize: '12px'
      },
      splitLine: {
        color: 'rgba(255, 255, 255, .1)',
        lineStyle: {
          color: 'rgba(255, 255, 255, .1)'
      }
      }
    },
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
        itemStyle: {
          borderRadius: [5, 5, 0, 0]
      },
      barWidth: '50%'
    }]
};

echartBar1.setOption(option)