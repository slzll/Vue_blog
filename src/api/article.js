import request from '@/plugins/axios';

export const GetArticleList = (params) => {
  return request({
    url: '/api/article',
    method: 'get',
    params
  });
};

export const GetArticleDetail = (params) => {
  return request({
    url: '/api/article/getArticleDetail',
    method: 'get',
    params
  });
};
