import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bulma/css/bulma.css'
import VueRouter from 'vue-router'
import ClienteView from './components/ClienteView.vue'
import Login from './components/Login.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
      path: '/cliente',
      component: ClienteView
    },
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      redirect: Login
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
 