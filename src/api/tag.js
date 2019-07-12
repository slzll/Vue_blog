import request from '@/plugins/axios';

export const GetTagList = (params) => {
  return request({
    url: '/api/tag',
    method: 'get',
    params
  });
};
