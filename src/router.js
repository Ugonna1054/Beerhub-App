import Vue from "vue";
import Router from "vue-router";
import signin from "@/views/signin.vue";
import signup from "@/views/signup.vue";
import home from "@/views/home.vue";
import favourites from "@/views/favourites.vue";
import details from "@/views/details.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/signin",
      name: "signin",
      component: signin
    },
    {
      path: "/signup",
      name: "signup",
      component: signup
    },
    {
      path: "/home",
      name: "home",
      component: home
    },
    {
      path: "/favourites",
      name: "favourites",
      component: favourites,
      meta: { authRequired: true }
    },
    {
      path: "/details",
      name: "details",
      component: details
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.authRequired)) {
//     if (!store.state.isAuthenticated) {
//      next({
//         path: "/signin"
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
