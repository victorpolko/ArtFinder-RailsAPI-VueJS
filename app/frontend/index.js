import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './routes.js'
import UIkit from 'uikit'

Vue.use(VueRouter);
Vue.use(VueResource); // For VuePaginator

const router = new VueRouter({ routes });
const vm = new Vue({ router }).$mount('#router');
