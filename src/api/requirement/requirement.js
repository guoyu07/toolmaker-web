import fetch from '@/utils/fetch'

export function fetchList(query) {
  return fetch({
    url: '/v1/requirements',
    method: 'get',
    params: query
  })
}
