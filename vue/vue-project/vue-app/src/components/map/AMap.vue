<template>
    <div id="map"></div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'
export default {
  name: 'AMap',
  data () {
    return {
      AMap: null,
      map: null
    }
  },
  methods: {
    loadMap () {
      return new Promise((resolve, reject) => {
        AMapLoader.load({
          key: '1a206ae0ccb6bbf8ce775356db600f54',
          version: '2.0',
          plugins: ['AMap.ToolBar', 'AMap.Scale'],
          Loca: { // load Loca
            version: '2.0.0'
          }
        }).then((AMap) => {
          this.AMap = AMap
          this.map = new this.AMap.Map('map', {
            resizeEnable: true,
            zoom: 11,
            center: [104, 30.6]
          })
          // 加载控件
          const toolBar = new this.AMap.ToolBar()
          const scale = new this.AMap.Scale()
          this.map.addControl(toolBar, scale)
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
    this.loadMap().then(() => {
      this.addMarker()
    })
  },
  beforeDestroy () {
    this.AMap = null
    this.map.destory()
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
