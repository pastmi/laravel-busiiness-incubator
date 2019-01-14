/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import {
    sync
} from 'vuex-router-sync';
import KeenUI from 'keen-ui';

import {
    store
} from './store';
import App from './vue/App.vue';
import PageMain from './vue/PageMain.vue';
import Header from './vue/components/Header.vue';
import Menu from './vue/components/Menu.vue';
import MapControl from './vue/components/MapControl.vue';
import MyProjects from './vue/modals/MyProjects.vue';
import NewProjects from './vue/modals/NewProjects.vue';
import NewProjectsSecond from './vue/modals/NewProjectsSecond.vue';
import News from './vue/modals/News.vue';


Vue.component('Header', Header);
Vue.component('Menu', Menu);
Vue.component('map-control', MapControl);
Vue.component('modal-my-projects', MyProjects);
Vue.component('modal-new-projects', NewProjects);
Vue.component('modal-new-projects-second', NewProjectsSecond);
Vue.component('modal-news', News);


Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(KeenUI);

const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'main',
            component: PageMain
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
});
sync(store, router);

const app = new Vue({
    el: '#vue-content',
    store,
    router,
    render(h) {
        return h(App);
    }
});
