/*
 * @Date: 2022-04-28 20:17:53
 * @Author: liuhui
 * @LastEditTime: 2022-04-28 20:24:03
 * @LastEditors: liuhui
 * @Description: shared between serve and client
 */

import { createSSRApp } from "vue";

export function createApp() {
  return createSSRApp({
    data: () => ({
      count: 1
    }),
    template: `<button @click="count++">{{count}}</button>`
  })
}
