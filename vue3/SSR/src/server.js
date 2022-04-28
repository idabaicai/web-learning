/*
 * @Date: 2022-04-28 20:10:37
 * @Author: liuhui
 * @LastEditTime: 2022-04-28 20:31:09
 * @LastEditors: liuhui
 * @Description: SSR
 */

import express from "express";
// import { createSSRApp } from "vue";
import { createApp } from "./app.js";
import { renderToString } from "vue/server-renderer";

const serve = express()

serve.use(express.static('.'))

serve.get('/', (req, res) => {
  const app = createApp()
  renderToString(app).then((html) => {
    console.log(html);
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
        <script type="importmap">
          {
            "imports": {
              "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
            }
          }
        </script>
        <script type="module" src="/client.js"></script>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `)
  })
})

serve.listen(3000, () => {
  console.log('server run in http://localhost:3000');
})