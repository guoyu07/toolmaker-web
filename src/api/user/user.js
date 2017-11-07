import fetch from '@/utils/fetch'

export function fetchList(query) {
  return fetch({
    url: '/v1/users',
    method: 'get',
    params: query
  })
}
