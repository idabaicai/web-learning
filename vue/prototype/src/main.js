

new Vue({
  el: '#app',
  template:  /*html */
  `
  <div class="app">
    <div class="pre">
      <pre> {{ objData }} </pre>
    </div>
    <json-view :json-data="jsonData"></json-view>
  </div>
  `,
  data: {
    jsonData: JSON.stringify({
      "name": "成都市",
      "address": "天府四又五分之三街", 
      "length": "18km", 
      "location": {
        "lat": "30.24599", 
        "long": "104.26472", 
        "size":{
          "width": 200,
          "height": 300, 
          "area": {
            "foo": "bar", 
            "prop1": "value1"
          }
        }
      },
      "date": "2021-06-24",
      "area": ["高新区","金牛区","青羊区", {"other": "other1", "arr":[1,2,3,4]}],
      "people": {
        "word": "但使龙城飞将在，不教胡马度阴山。"
      }
    }),
    objData: {}
  },
  created() {
    this.objData = JSON.parse(this.jsonData);
  }
})