// 显示时间
import { getDateTime } from './utils.js'

function showTime() {
  const time = getDateTime();
  document.getElementById('time').innerHTML = `当前时间: ${time} `;
}

setInterval(showTime, 1000);
(function(){
  const echartBar1 = echarts.init(document.getElementById('bar1'));
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
  
  echartBar1.setOption(option);
  // 自适应屏幕宽度
window.addEventListener('resize', () => {
  echartBar1.resize()
});
})();

(function(){
  const echartBar = echarts.init(document.getElementById('bar2'));
  const option = {
    title: {
        text: '世界人口总量',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: '10%',
        left: '22%',
        right: '4%',
        bottom: '10%',
        // containLabel: true
    },
    xAxis: {
        show: false
    },
    yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
        axisLine: {
          show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
          color: '#fff'
      }
    },
    series: [
        {
            name: '条',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230],
            itemStyle: {
              borderRadius: 20
            },
            barCategoryGap: '10%',
            barWidth: 10
        },
        // {
        //     name: '2012年',
        //     type: 'bar',
        //     data: [19325, 23438, 31000, 121594, 134141, 681807]
        // }
    ]
};
echartBar.setOption(option);
window.addEventListener('resize',  () => echartBar.resize())
})();
