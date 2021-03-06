import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

const Table = _import('toolmaker/user/article_table')

Vue.use(Router)

/* layout */
import Layout from '../views/layout/Layout'

/**
* icon : the icon show in the sidebar
* hidden : if `hidden:true` will not show in the sidebar
* redirect : if `redirect:noredirect` will no redirct in the levelbar
* noDropdown : if `noDropdown:true` will has no submenu
* meta : { role: ['admin'] }  will control the page role
**/
export const constantRouterMap = [
    { path: '/login', component: _import('login/index'), hidden: true },
    { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
    { path: '/404', component: _import('errorPage/404'), hidden: true },
    { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    // path: '/',  //删除'/'，点击Dashboard可用
    path: '',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    icon: 'chart',
    noDropdown: true,
    // hidden: true,
    children: [{ path: 'dashboard', component: _import('dashboard/index'), name: 'Dashboard' }]
  }

  /*
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    hidden: true,
    children: [{ path: 'dashboard', component: _import('dashboard/index') }]
  },

  {
    path: '/introduction',
    component: Layout,
    redirect: '/introduction/index',
    icon: 'people',
    noDropdown: true,
    children: [{ path: 'index', component: _import('introduction/index'), name: '简述' }]
  }
  */
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/product',
    component: Layout,
    redirect: '/product',
    name: '产  品',
    icon: 'component'
    /*
    children: [
      { path: 'product', component: Table, name: '产品管理', icon: 'zonghe' },
      { path: 'version', component: Table, name: '版本管理', icon: 'zonghe' },
      { path: 'project', component: Table, name: '项目管理', icon: 'zonghe' },
      { path: 'risk', component: Table, name: '风险管理', icon: 'zonghe' },
      { path: 'measure', component: Table, name: '度量统计', icon: 'zonghe' },
      { path: 'lifecycle', component: Table, name: '生命周期管理', icon: 'zonghe' }
    ]
    */
  },

  {
    path: '/feature',
    component: Layout,
    redirect: '/feature',
    name: '特  性',
    icon: 'component',
    meta: { role: ['admin', 'editor'] },
    children: [
      { path: 'originalrequirement', component: Table, name: '原始需求', icon: 'form', meta: { role: ['requirement'] }},
      { path: 'systemfeature', component: Table, name: '系统特性', icon: 'form' }
    ]
  },

  {
    path: '/requirement',
    component: Layout,
    redirect: '/requirement',
    name: '需  求',
    icon: 'component',
    meta: { role: ['admin', 'editor'] },
    children: [
      { path: 'systemrequirement', component: _import('toolmaker/requirement/requirement'), name: '系统需求', icon: 'example' },
      { path: 'modulerequirement', component: _import('toolmaker/requirement/requirement'), name: '模块需求', icon: 'example' }
    ]
  },

  {
    path: '/design',
    component: Layout,
    redirect: '/design',
    name: '设  计',
    icon: 'component',
    children: [
      { path: 'systemcomponent', component: Table, name: '系统组件', icon: 'example' }
    ]
  },

  {
    path: '/implement',
    component: Layout,
    redirect: '/implement',
    name: '实  现',
    icon: 'component',
    children: [
      { path: 'coding', component: Table, name: '编码规范', icon: 'example' }
    ]
  },

  {
    path: '/testcase',
    component: Layout,
    redirect: '/testcase',
    name: '测  试',
    icon: 'component',
    children: [
      { path: 'systemtestcase', component: Table, name: '系统测试用例', icon: 'example' }
    ]
  },

  {
    path: '/defect',
    component: Layout,
    redirect: '/defect',
    name: '缺  陷',
    icon: 'component',
    children: [
      { path: 'onlinedefect', component: Table, name: '网上缺陷', icon: 'bug' },
      { path: 'defect', component: Table, name: '产品缺陷', icon: 'bug' }
    ]
  },

  {
    path: '/knowledge',
    component: Layout,
    redirect: '/knowledge',
    name: '知  识',
    icon: 'component',
    noDropdown: true,
    children: [
      { path: 'knowledge', component: Table, name: '知  识', icon: 'example' }
    ]
  },

  {
    path: '/settings',
    component: Layout,
    redirect: '/settings',
    name: '设  置',
    icon: 'component',
    children: [
      { path: 'user', component: _import('toolmaker/user/user'), name: '用户', icon: 'people' },
      { path: 'authority', component: _import('toolmaker/user/user'), name: '权限', icon: 'people' }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }

  /*
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    name: '权限测试',
    icon: 'lock',
    meta: { role: ['admin'] },
    noDropdown: true,
    children: [{ path: 'index', component: _import('permission/index'), name: '权限测试页', meta: { role: ['admin'] }}]
  },
  {
    path: '/icon',
    component: Layout,
    icon: 'icon',
    noDropdown: true,
    children: [{ path: 'index', component: _import('svg-icons/index'), name: 'icons' }]
  },
  {
    path: '/components',
    component: Layout,
    redirect: '/components/index',
    name: '组件',
    icon: 'component',
    children: [
      { path: 'index', component: _import('components/index'), name: '介绍 ' },
      { path: 'tinymce', component: _import('components/tinymce'), name: '富文本编辑器' },
      { path: 'markdown', component: _import('components/markdown'), name: 'Markdown' },
      { path: 'jsoneditor', component: _import('components/jsonEditor'), name: 'JSON编辑器' },
      { path: 'dndlist', component: _import('components/dndList'), name: '列表拖拽' },
      { path: 'splitpane', component: _import('components/splitpane'), name: 'SplitPane' },
      { path: 'avatarupload', component: _import('components/avatarUpload'), name: '头像上传' },
      { path: 'dropzone', component: _import('components/dropzone'), name: 'Dropzone' },
      { path: 'sticky', component: _import('components/sticky'), name: 'Sticky' },
      { path: 'countto', component: _import('components/countTo'), name: 'CountTo' },
      { path: 'mixin', component: _import('components/mixin'), name: '小组件' },
      { path: 'backtotop', component: _import('components/backToTop'), name: '返回顶部' }
    ]
  },
  {
    path: '/charts',
    component: Layout,
    redirect: '/charts/index',
    name: '图表',
    icon: 'chart',
    children: [
      { path: 'index', component: _import('charts/index'), name: '介绍' },
      { path: 'keyboard', component: _import('charts/keyboard'), name: '键盘图表' },
      { path: 'keyboard2', component: _import('charts/keyboard2'), name: '键盘图表2' },
      { path: 'line', component: _import('charts/line'), name: '折线图' },
      { path: 'mixchart', component: _import('charts/mixChart'), name: '混合图表' }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: 'noredirect',
    name: '综合实例',
    icon: 'example',
    children: [
      {
        path: '/example/table',
        component: _import('example/table/index'),
        redirect: '/example/table/table',
        name: 'Table',
        icon: 'table',
        children: [
          { path: 'dynamictable', component: _import('example/table/dynamictable/index'), name: '动态table' },
          { path: 'dragtable', component: _import('example/table/dragTable'), name: '拖拽table' },
          { path: 'inline_edit_table', component: _import('example/table/inlineEditTable'), name: 'table内编辑' },
          { path: 'table', component: _import('example/table/table'), name: '综合table' }
        ]
      },
      { path: 'form/edit', icon: 'form', component: _import('example/form'), name: '编辑Form', meta: { isEdit: true }},
      { path: 'form/create', icon: 'form', component: _import('example/form'), name: '创建Form' },
      { path: 'tab/index', icon: 'tab', component: _import('example/tab/index'), name: 'Tab' }
    ]
  },
  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: '错误页面',
    icon: '404',
    children: [
      { path: '401', component: _import('errorPage/401'), name: '401' },
      { path: '404', component: _import('errorPage/404'), name: '404' }
    ]
  },
  {
    path: '/errlog',
    component: Layout,
    redirect: 'noredirect',
    name: 'errlog',
    icon: 'bug',
    noDropdown: true,
    children: [{ path: 'log', component: _import('errlog/index'), name: '错误日志' }]
  },
  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/download',
    name: 'excel',
    icon: 'excel',
    children: [
      { path: 'download', component: _import('excel/index'), name: 'export excel' },
      { path: 'download2', component: _import('excel/selectExcel'), name: 'export selected' },
      { path: 'upload', component: _import('excel/uploadExcel'), name: 'upload excel' }
    ]
  },
  {
    path: '/zip',
    component: Layout,
    redirect: '/zip/download',
    name: 'zip',
    icon: 'zip',
    children: [
      { path: 'download', component: _import('zip/index'), name: 'export zip' }
    ]
  },
  {
    path: '/theme',
    component: Layout,
    redirect: 'noredirect',
    name: 'theme',
    icon: 'theme',
    noDropdown: true,
    children: [{ path: 'index', component: _import('theme/index'), name: '换肤' }]
  },
  {
    path: '/clipboard',
    component: Layout,
    redirect: 'noredirect',
    icon: 'clipboard',
    noDropdown: true,
    children: [{ path: 'index', component: _import('clipboard/index'), name: 'clipboard' }]
  },

  { path: '*', redirect: '/404', hidden: true }
  */
]
