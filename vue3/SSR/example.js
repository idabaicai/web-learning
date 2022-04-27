/*
 * @Date: 2022-04-28 07:48:39
 * @Author: liuhui
 * @LastEditTime: 2022-04-28 07:51:26
 * @LastEditors: liuhui
 * @Description: vue ssr
 */

import { createSSRApp } from "vue";
import {renderToString} from 'vue/server-renderer'

const app = createSSRApp({
  data: () => ({
    count: 1
  }),
  template: `
    <div @click="count++">{{count}}</div>
  `
})
renderToString(app).then((html) => {
  console.log(html);
})
