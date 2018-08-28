import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Headlines from './components/headlines/Headlines.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/headlines', component: Headlines },
    { path: '*', redirect: '/ ' }
  ]
});