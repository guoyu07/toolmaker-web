webpackJsonp([20],{"/CP2":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("jMfX"),a=i("2FTK"),n=i("VU/8"),l=n(s.a,a.a,null,null,null);e.default=l.exports},"2FTK":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container calendar-list-container"},[i("div",{staticClass:"filter-container"},[i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"标题"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.handleFilter(e)}},model:{value:t.listQuery.title,callback:function(e){t.listQuery.title=e},expression:"listQuery.title"}}),t._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"search"},on:{click:t.handleFilter}},[t._v("搜索")]),t._v(" "),i("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"edit"},on:{click:t.handleCreate}},[t._v("添加")]),t._v(" "),i("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"document"},on:{click:t.handleDownload}},[t._v("导出")]),t._v(" "),i("el-checkbox",{staticClass:"filter-item",on:{change:function(e){t.tableKey=t.tableKey+1}},model:{value:t.showMobilePhone,callback:function(e){t.showMobilePhone=e},expression:"showMobilePhone"}},[t._v("显示移动电话")])],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,stripe:"","element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"序号",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"100px",align:"center",label:"用户名"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.userName))])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"65px",align:"center",label:"性别"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.gender))])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"200px",align:"center",label:"介绍"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.intro))])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"180px",align:"center",label:"邮箱"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.email))])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"110px",align:"center",label:"办公电话"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.officePhone))])]}}])}),t._v(" "),t.showMobilePhone?i("el-table-column",{attrs:{width:"110px",align:"center",label:"移动电话"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticStyle:{color:"red"}},[t._v(t._s(e.row.mobilePhone))])]}}])}):t._e(),t._v(" "),i("el-table-column",{attrs:{"class-name":"status-col",label:"状态",width:"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tag",{attrs:{type:t._f("statusFilter")(e.row.status)}},[t._v(t._s(e.row.status))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return["published"!=e.row.status?i("el-button",{attrs:{size:"small",type:"success"},on:{click:function(i){t.handleModifyStatus(e.row,"published")}}},[t._v("发布\n        ")]):t._e(),t._v(" "),"draft"!=e.row.status?i("el-button",{attrs:{size:"small"},on:{click:function(i){t.handleModifyStatus(e.row,"draft")}}},[t._v("草稿\n        ")]):t._e(),t._v(" "),"deleted"!=e.row.status?i("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(i){t.handleModifyStatus(e.row,"deleted")}}},[t._v("删除\n        ")]):t._e()]}}])})],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.listQuery.page=e}}})],1)],1)},a=[],n={render:s,staticRenderFns:a};e.a=n},XZlg:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,".waves-ripple{position:absolute;border-radius:100%;background-color:rgba(0,0,0,.15);background-clip:padding-box;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);opacity:1}.waves-ripple.z-active{opacity:0;-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out,-webkit-transform .6s ease-out}",""])},ctMr:function(t,e,i){var s=i("XZlg");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("81d72750",s,!0)},jMfX:function(t,e,i){"use strict";var s=i("BO1k"),a=i.n(s),n=i("woOf"),l=i.n(n),o=i("sF3y"),r=i("jdeu"),u=i("0xDb"),c=[{key:"CN",display_name:"中国"},{key:"US",display_name:"美国"},{key:"JP",display_name:"日本"},{key:"EU",display_name:"欧元区"}],d=c.reduce(function(t,e){return t[e.key]=e.display_name,t},{});e.a={name:"table_demo",directives:{waves:r.a},data:function(){return{list:null,total:null,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"},temp:{id:void 0,importance:0,remark:"",timestamp:0,title:"",type:"",status:"published"},importanceOptions:[1,2,3],calendarTypeOptions:c,sortOptions:[{label:"按ID升序列",key:"+id"},{label:"按ID降序",key:"-id"}],statusOptions:["published","draft","deleted"],dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建"},dialogPvVisible:!1,pvData:[],showAuditor:!1,tableKey:0}},filters:{statusFilter:function(t){return{published:"success",draft:"gray",deleted:"danger"}[t]},typeFilter:function(t){return d[t]}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,i.i(o.a)(this.listQuery).then(function(e){t.list=e.data.list,t.total=e.data.total,t.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},timeFilter:function(t){if(!t[0])return this.listQuery.start=void 0,void(this.listQuery.end=void 0);this.listQuery.start=parseInt(+t[0]/1e3),this.listQuery.end=parseInt((+t[1]+864e5)/1e3)},handleModifyStatus:function(t,e){this.$message({message:"操作成功",type:"success"}),t.status=e},handleCreate:function(){this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0},handleUpdate:function(t){this.temp=l()({},t),this.dialogStatus="update",this.dialogFormVisible=!0},handleDelete:function(t){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var e=this.list.indexOf(t);this.list.splice(e,1)},create:function(){this.temp.id=parseInt(100*Math.random())+1024,this.temp.timestamp=+new Date,this.temp.author="原创作者",this.list.unshift(this.temp),this.dialogFormVisible=!1,this.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})},update:function(){this.temp.timestamp=+this.temp.timestamp;var t=!0,e=!1,i=void 0;try{for(var s,n=a()(this.list);!(t=(s=n.next()).done);t=!0){var l=s.value;if(l.id===this.temp.id){var o=this.list.indexOf(l);this.list.splice(o,1,this.temp);break}}}catch(t){e=!0,i=t}finally{try{!t&&n.return&&n.return()}finally{if(e)throw i}}this.dialogFormVisible=!1,this.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})},resetTemp:function(){this.temp={id:void 0,importance:0,remark:"",timestamp:0,title:"",status:"published",type:""}},handleDownload:function(){var t=this;Promise.all([i.e(46),i.e(47)]).then(function(){var e=i("zWO4"),s=e.export_json_to_excel,a=["时间","地区","类型","标题","重要性"],n=["timestamp","province","type","title","importance"];s(a,t.formatJson(n,t.list),"table数据")}.bind(null,i)).catch(i.oe)},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return"timestamp"===t?i.i(u.a)(e[t]):e[t]})})}}}},jdeu:function(t,e,i){"use strict";var s=i("woOf"),a=i.n(s),n=i("ctMr");i.n(n);e.a={bind:function(t,e){t.addEventListener("click",function(i){var s=a()({},e.value),n=a()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},s),l=n.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var o=l.getBoundingClientRect(),r=l.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":(r=document.createElement("span"),r.className="waves-ripple",r.style.height=r.style.width=Math.max(o.width,o.height)+"px",l.appendChild(r)),n.type){case"center":r.style.top=o.height/2-r.offsetHeight/2+"px",r.style.left=o.width/2-r.offsetWidth/2+"px";break;default:r.style.top=i.pageY-o.top-r.offsetHeight/2-document.body.scrollTop+"px",r.style.left=i.pageX-o.left-r.offsetWidth/2-document.body.scrollLeft+"px"}return r.style.backgroundColor=n.color,r.className="waves-ripple z-active",!1}},!1)}}},sF3y:function(t,e,i){"use strict";function s(t){return i.i(a.a)({url:"/v1/users",method:"get",params:t})}e.a=s;var a=i("Vo7i")}});