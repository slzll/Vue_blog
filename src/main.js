import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import vueFilter from './utils/filters';
import './registerServiceWorker';
import './styles/main.scss';

Vue.config.productionTip = false;

Vue.use(vueFilter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
