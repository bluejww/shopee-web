import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import VueRouter from 'vue-router';
import Routers from './router/routers';

Vue.config.productionTip = false
Vue.use(ViewUI)
Vue.use(VueRouter)
Vue.use(Routers)

// The routing configuration
const RouterConfig = {
  routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
  el:'#app',
  router:router,
  render: h => h(App),
}).$mount('#app')
