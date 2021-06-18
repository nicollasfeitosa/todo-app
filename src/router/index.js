import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import LayoutAuth from '../layouts/Auth.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    component: LayoutAuth,
    children: [
      { path: '', name: 'login', component: Login},
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
