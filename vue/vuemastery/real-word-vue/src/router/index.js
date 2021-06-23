import Vue from "vue"
import VueRouter from "vue-router"
import EventCreate from "../views/EventCreate";
import EventList from "../views/EventList";
import EventShow from "../views/EventShow";
import User from "../views/user/User";
import NotFound from "../views/NotFound"
import Post from "../views/user/component/Post"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/event",
    name: "EventShow",
    component: EventShow,
  },
  {
    path: "/event/create",
    name: "EventCreate",
    component: EventCreate,
  },
  {
    path: "/user/:id",
    name: "User",
    component: User,
    props: true,
    children: [
      {
        path: "post",
        name: "Post",
        component: Post
      }
    ]
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
]

const router = new VueRouter({
  mode: 'history', // 开启历史模式
  routes,
})

export default router
