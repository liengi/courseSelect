import Vue from "vue";
import VueRouter from "vue-router";

// 避免跳转当前页面报错
const changePush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return changePush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path: "/home",
      component: () => import("@/layout/index.vue"),
      meta: { title: "首页" },
      children: [
        {
          path: "/home/courseList",
          component: () => import("@/views/courseList.vue"),
          meta: { title: "课程信息" },
        },
        {
          path: "/home/courseselected",
          component: () => import("@/views/courseselected.vue"),
          meta: { title: "选课信息" },
        },
      ],
    },
  ],
});

export default router;
