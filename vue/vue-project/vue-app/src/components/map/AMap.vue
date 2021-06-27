<template>
    <div id="map"></div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'
// import point from '../../assets/json/point.geojson'
export default {
  name: 'AMap',
  data () {
    return {
      AMap: null,
      Loca: null,
      map: null
    }
  },
  methods: {
    loadMap () {
      return new Promise((resolve, reject) => {
        AMapLoader.load({
          key: '1a206ae0ccb6bbf8ce775356db600f54',
          version: '2.0',
          // mapStyle: 'amap://styles/darkblue',
          plugins: ['AMap.ToolBar', 'AMap.Scale'],
          Loca: { // load Loca
            version: '2.0.0'
          }

        }).then((AMap) => {
          const map = new AMap.Map('map', {
            resizeEnable: true,
            zoom: 11.7,
            center: [113.97199630737305, 22.5807295363949],
            viewMode: '3D',
            pitch: 40,
            showLabel: false,
            mapStyle: 'amap://styles/darkblue'
          })
          console.log(window.Loca, 'Loca')
          const loca = new window.Loca.Container({
            map
          })
          // blue point
          const geo = new Loca.GeoJSONSource({
            url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/sz_road.json'
            // url: '../../../static/json/point.json'
          })
          const scatter = new Loca.ScatterLayer({
            zIndex: 111,
            opacity: 1,
            visible: true,
            zooms: [2, 22]
          })
          scatter.setSource(geo)
          scatter.setStyle({
            color: 'rgba(43,156,75,1)',
            unit: 'meter',
            size: [150, 150],
            borderWidth: 0
          })
          loca.add(scatter)
          // 红色呼吸点
          var geoLevelF = new Loca.GeoJSONSource({
          // data: [],
            url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/sz_road_F.json'
          })
          // breath point
          var breathRed = new Loca.ScatterLayer({
            loca,
            zIndex: 113,
            opacity: 1,
            visible: true,
            zooms: [2, 22]
          })
          breathRed.setSource(geoLevelF)
          breathRed.setStyle({
            unit: 'meter',
            size: [2600, 2600],
            borderWidth: 0,
            texture: 'https://a.amap.com/Loca/static/loca-v2/demos/images/breath_red.png',
            duration: 500,
            animate: true
          })
          // 启动渲染动画
          loca.animate.start()
          // 加载控件
          const toolBar = new AMap.ToolBar()
          map.addControl(toolBar)
          this.AMap = AMap
          this.map = map
          resolve()
        }).catch((e) => {
          reject(e)
        })
      })
    },
    addMarker () {
      const marker = new this.AMap.Marker({
        position: [104, 30.6],
        icon: new this.AMap.Icon({
          size: new this.AMap.Size(40, 50),
          image: 'https://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png',
          imageOffset: new this.AMap.Pixel(0, -60)
        })
      })
      this.map.add(marker)
    }
  },
  created () {
    // console.log(point)
    this.loadMap().then(() => {
    })
  },
  beforeDestroy () {
    this.AMap = null
    // this.map.destory()
    this.map = null
  }
}

</script>

<style lang="less" scoped>
  #map {
    width: 800px;
    height: 400px;
  }
</style>
