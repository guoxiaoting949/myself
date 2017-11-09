import Vue from 'vue';
import Hello from './app/Hello.vue';
import Login from './app/containers/Login.vue';

import './index.less';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Hello
      }
    },
    {
      path: '/login',
      components: {
        default: Login
      }
    }
  ]
});

export default new Vue({
  el: '#root',
  router,
  render: h => h('router-view')
});
