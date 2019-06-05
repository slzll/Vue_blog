import hljs from 'highlight.js';

window.hljs = hljs;
require('highlightjs-line-numbers.js');
export default {
  install(Vue, options) {
    Vue.prototype.$hljs = hljs;
  }
};
