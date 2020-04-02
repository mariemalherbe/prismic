import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import PrismicVue from 'prismic-vue'
import HelloWorld from './components/HelloWorld.vue'
import NudePage from'./components/NudePage.vue'

Vue.config.productionTip = false

// Add this before the new Vue instance
Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
});

Vue.use(VueRouter)

const routes = [
  { path: '/0001', component: HelloWorld },
  { path: '/:uid', component: NudePage, props: true },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')




