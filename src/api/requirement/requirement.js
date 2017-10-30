import fetch from '@/utils/fetch'

export function fetchList(query) {
  return fetch({
    url: '/requirements',
    method: 'get',
    params: query
  })
}
