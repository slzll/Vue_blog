import request from '@/plugins/axios';

export const GetCategoryList = (params) => {
  return request({
    url: '/api/category',
    method: 'get',
    params
  });
};
