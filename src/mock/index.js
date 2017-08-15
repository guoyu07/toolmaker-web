import Mock from 'mockjs';
import loginAPI from './user/login';
import userAPI from './user/user';
import articleAPI from './user/article';
import article_tableAPI from './user/article_table';


// 登录相关
Mock.mock(/\/login\/loginbyemail/, 'post', loginAPI.loginByEmail);
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout);
Mock.mock(/\/users\/info\.*/, 'get', loginAPI.getInfo)

// User相关
Mock.mock(/\/users/, 'get', userAPI.getList);

// // 文章相关
Mock.mock(/\/article\/list/, 'get', articleAPI.getList);
Mock.mock(/\/article\/detail/, 'get', articleAPI.getArticle);

// // table example相关
Mock.mock(/\/article_table\/list/, 'get', article_tableAPI.getList);
Mock.mock(/\/article_table\/p/, 'get', article_tableAPI.getPv);

export default Mock;
