import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

export default new VueRouter({
  linkExactActiveClass: "vue-active-class",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
      path: "/brazil",
      name: "brazil",
      component: () =>
        import(/* webpackChunkName: "brazil" */ "../views/Brazil.vue")
    },
    {
      path: "/hawaii",
      name: "hawaii",
      component: () =>
        import(/* webpackChunkName: "hawaii" */ "../views/Hawaii.vue")
    },
    {
      path: "/panama",
      name: "panama",
      component: () =>
        import(/* webpackChunkName: "panama" */ "../views/Panama.vue")
    },
    {
      path: "/jamaica",
      name: "jamaica",
      component: () =>
        import(/* webpackChunkName: "jamaica" */ "../views/Jamaica.vue")
    },
    {
      path: "/details/:id",
      name: "DestinationDetails",
      component: () =>
        import(
          /* webpackChunkName: "Destinations" */ "../views/DestinationDetails.vue"
        )
    }
  ]
});
