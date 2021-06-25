
let depth = 1;
const jsonView = Vue.component('json-view', {
  props: ['jsonData'],
  template: /*html */ 
  `
    <div class="container">
      <div v-for="(val, name) in objData" :key="name">
        <p v-if="typeof val !== 'object'">
         <span v-if="!Array.isArray(val)">{{ name }}: {{ val }}</span> 
         <span v-else>{{ val }}</span> 
        </p>
        <div v-else>
          <p>{{ name }}:</p>
          <json-view :json-data="val" :class="className"></json-view>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      depth: 1,
      className: '',
      objData: {}
    }
  },
  created() {
    if(typeof this.jsonData === 'string') {
      console.log(this.jsonData);
      this.objData = JSON.parse(this.jsonData);
    } else {
      depth += 1;
      this.objData = this.jsonData;
    }
    this.depth = depth;
    this.className = `child_${this.depth}`
    console.log(this.objData);
    console.log(depth);
  }
})