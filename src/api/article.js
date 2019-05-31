import request from '@/plugins/axios';

export const GetArticleList = (params) => {
  return request({
    url: '/api/article',
    method: 'get',
    params
  });
};
