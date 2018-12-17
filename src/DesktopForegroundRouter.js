import Home from "./views/Desktop/ForegroundViews/Home.vue";

var routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "./views/Desktop/ForegroundViews/About.vue");
    }
  },
  {
    path: "/upload",
    name: "upload",
    component: function() {
      return import(/* webpackChunkName: "about" */ "./views/Desktop/ForegroundViews/UploadFileExample.vue");
    }
  }
]

export default routes;
