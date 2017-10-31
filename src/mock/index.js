import Mock from 'mockjs'
import loginAPI from './login'
import userAPI from './user'
import requirementAPI from './requirement'
import articleAPI from './article'
import article_tableAPI from './article_table'

Mock.setup({
  timeout: '350-600'
})

// 登录相关
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/users\/info\.*/, 'get', loginAPI.getUserInfo)

// User相关
Mock.mock(/\/users/, 'get', userAPI.getList)
Mock.mock(/\/requirements/, 'get', requirementAPI.getList)

// // 文章相关
Mock.mock(/\/article\/list/, 'get', articleAPI.getList)
Mock.mock(/\/article\/detail/, 'get', articleAPI.getArticle)
Mock.mock(/\/article\/pv/, 'get', articleAPI.getPv)
// // table example相关
Mock.mock(/\/article_table\/list/, 'get', article_tableAPI.getList)
Mock.mock(/\/article_table\/p/, 'get', article_tableAPI.getPv)

export default Mock
