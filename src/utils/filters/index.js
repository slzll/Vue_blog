import filters from './filters';

export default {
  install(Vue, options) {
    Object.keys(filters)
      .forEach(name => {
        Vue.filter(name, filters[name]);
      });
  }
};
