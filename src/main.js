import Vue from 'vue';
import antd, { message } from 'ant-design-vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import vueFilter from './utils/filters';
import './registerServiceWorker';
import './styles/main.scss';
import 'ant-design-vue/dist/antd.css';
import 'highlight.js/styles/vs2015.css';

Vue.config.productionTip = false;
Vue.prototype.$message = message;

Vue.use(vueFilter);
Vue.use(antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
