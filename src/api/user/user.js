import fetch from 'utils/fetch';

export function fetchList(query) {
  return fetch({
    url: '/users',
    method: 'get',
    params: query
  });
}