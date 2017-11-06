import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    name: '@ctitle(5, 10)',
    intro: '@ctitle(10, 20)',
    'importance|1': ['mandatory', 'important', 'proposal'],
    // 'importance|1': ['必须', '重要', '建议'],
    // importance: '@integer(1, 3)',
    'type|1': ['功能需求', '非功能需求'],
    'status|1': ['published', 'draft', 'deleted'],
    creator: '@cname',
    created_date: '@datetime'
  }))
}

export default {
  getList: config => {
    const { id, intro, creator, page, limit, sort } = param2Obj(config.url)
    let mockList = List.filter(item => {
      // +id 什么意思
      if (id && item.id !== +id) return false
      // 查询需求名称和描述
      if (intro && item.intro.indexOf(intro) < 0 && item.name.indexOf(intro) < 0) return false
      if (creator && item.creator !== creator) return false
      return true
    })
    if (sort === '-id') {
      mockList = mockList.reverse()
    }

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      total: mockList.length,
      list: pageList
    }
  }
}
