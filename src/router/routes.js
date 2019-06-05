// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/utils/import/' + process.env.NODE_ENV);

export default [
  {
    path: '/',
    name: 'home',
    component: _import('Home')
  },
  {
    path: '/about',
    name: 'about',
    component: _import('About')
  },
  {
    path: '/category',
    name: 'category',
    component: _import('Category')
  },
  {
    path: '/article',
    name: 'article',
    component: _import('Article')
  },
  {
    path: '/tag',
    name: 'tag',
    component: _import('Tag')
  }
];
