import Vue from 'vue';
import iView from 'iview';
import locale from 'iview/dist/locale/zh-CN';
import App from './App.vue';
import router from './router/index';
import store from './store';
import vueFilter from './utils/filters';
import './registerServiceWorker';
import 'highlight.js/styles/vs2015.css';
import './styles/main.scss';
import './styles/iView-reset.less';

Vue.config.productionTip = false;

Vue.use(vueFilter);

Vue.use(iView, { locale });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
