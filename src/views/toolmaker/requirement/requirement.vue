<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <!--Search condition-->
      <el-input @keyup.enter.native="handleFilter" style="width: 60px;" class="filter-item" placeholder="编码" v-model="listQuery.id">
      </el-input>
      <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="需求描述" v-model="listQuery.intro">
      </el-input>
      <el-input @keyup.enter.native="handleFilter" style="width: 100px;" class="filter-item" placeholder="创建者" v-model="listQuery.creator">
      </el-input>
      <el-date-picker type="daterange" range-separator="TO" placeholder="选择日期范围" v-model="listQuery.daterang">
      </el-date-picker>

      <!--Operation-->
      <el-button class="filter-item" type="primary" icon="search" @click="handleFilter" v-waves>查询/刷新</el-button>
      <el-button class="filter-item" type="primary" icon="edit" @click="handleCreate" style="margin-left: 10px;" v-waves>添加</el-button>
      <el-button class="filter-item" type="primary" icon="document" @click="handleDownload">导出</el-button>
    </div>

    <el-col :span="5" style="width: 160px;text-align: left;">已选择{{ activeNum }}个需求</el-col>
        
    <!--Pagination-->
    <!--div v-show="!listLoading" class="pagination-container"-->
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page"
        :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    <!--/div-->

    <!--默认ID降序-->
    <el-table :key='tableKey' :data="list" :default-sort="{prop:'id', order:'descending'}" 
      stripe v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row 
      style="width: 100%" @selection-change="handleSelectionChange">
    
      <!--多选框-->
      <el-table-column type="selection" width="40px"></el-table-column>

	  <!--ID的两种写法-->
      <el-table-column sortable align="center" width="90px" prop="id" label="编码">
        <!--template scope="scope">
          <span>{{scope.row.id}}</span>
        </template-->
      </el-table-column>

      <el-table-column width="150px" prop="name" label="需求名称">
        <!--template scope="scope">
          <span class="link-type" @click="handleUpdate(scope.row)"> {{scope.row.name}} </span>
        </template-->
      </el-table-column>

      <el-table-column width="250px" show-overflow-tooltip="true" prop="intro" label="需求描述">
        <!--template scope="scope">
          <span  class="link-type" @click="handleUpdate(scope.row)"> {{scope.row.intro}} </span>
        </template-->
      </el-table-column>

      <!--过滤方法一定要定义prop--> 
      <el-table-column align="center" width="100px" prop="importance" label="重要性"
        :filters="[{ text: 'mandatory', value: 'mandatory' }, { text: 'important', value: 'important' }, { text: 'proposal', value: 'proposal' }]"
        :filter-method="filterImportance" filter-placement="bottom-end">

        <!--template scope="scope">
          <el-tag :type="scope.row.importance | statusFilter">{{scope.row.importance}}</el-tag>
          <!-- icon-svg v-for="n in +scope.row.importance" icon-class="wujiaoxing" class="meta-item__icon" :key="n"></icon-svg-->
        </template-->
      </el-table-column>

      <el-table-column class-name="status-col"  width="100px" prop="type" label="类型"
        :filters="[{ text: 'functional', value: 'functional' }, { text: 'unfunctional', value: 'unfunctional' }]"
        :filter-method="filterType" filter-placement="bottom-end">

        <!--template scope="scope">
          <el-tag :type="scope.row.type | statusFilter">{{scope.row.type}}</el-tag>
        </template-->
      </el-table-column>

      <el-table-column class-name="status-col" width="90px" prop="status" label="状态" 
        :filters="[{ text: 'draft', value: 'draft' }, { text: 'published', value: 'published' }, { text: 'deleted', value: 'deleted' }]"
        :filter-method="filterStatus" filter-placement="bottom-end">

        <!--template scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{scope.row.status}}</el-tag>
        </template-->
      </el-table-column>

      <el-table-column align="center" width="100px" prop="creator" label="创建者">
        <!--template scope="scope">
          <span>{{scope.row.creator}}</span>
        </template-->
      </el-table-column>

      <el-table-column align="center" width="170px" sortable prop="created_date" label="创建日期">
        <!--template scope="scope">
          <span>{{scope.row.created_date | parseTime('{y}-{m}-{d} {h}:{i}:{s}')}}</span>
        </template-->
      </el-table-column>

      <el-table-column align="center" width="150px" label="操作" >
        <template scope="scope">
          <el-button v-if="scope.row.status!='published'" size="small" type="success" @click="handleModifyStatus(scope.row,'published')">编辑
          </el-button>
          <el-button v-if="scope.row.status!='draft'" size="small" @click="handleModifyStatus(scope.row,'draft')">评审
          </el-button>
          <el-button v-if="scope.row.status!='deleted'" size="small" type="danger" @click="handleModifyStatus(scope.row,'deleted')">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--两种显示方法-->
    <!--div v-show="!listLoading" class="pagination-container"-->
    <el-row type="flex" justify="start" style="padding:20px 0; ">    
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page"
        :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </el-row>  
    <!--/div-->
  </div>
</template>

<script>
import { fetchList } from '@/api/requirement/requirement'
import waves from '@/directive/waves/waves.js'
import { parseTime } from '@/utils'

const calendarTypeOptions = [
      { key: 'CN', display_name: '中国' },
      { key: 'US', display_name: '美国' },
      { key: 'JP', display_name: '日本' },
      { key: 'EU', display_name: '欧元区' }
]

// arr to obj
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

export default {
  name: 'table_requirement',
  directives: {
    waves
  },
  data() {
    return {
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        id: undefined,
        intro: undefined,
        creator: undefined,
        daterang: undefined,
        sort: '+id'
      },
      temp: {
        id: undefined,
        importance: 0,
        remark: '',
        timestamp: 0,
        title: '',
        type: '',
        status: 'published'
      },
      // 选择的需求数目
      activeNum: 0,
      importanceOptions: [1, 2, 3],
      calendarTypeOptions,
      sortOptions: [{ label: '按ID升序列', key: '+id' }, { label: '按ID降序', key: '-id' }],
      statusOptions: ['published', 'draft', 'deleted'],
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: '编辑',
        create: '创建'
      },
      dialogPvVisible: false,
      pvData: [],
      showAuditor: false,
      tableKey: 0,
      value6: ''
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    // 多选处理函数
    handleSelectionChange(val) {
      // 以前的多选语句
      this.multipleSelection = val
      // 新函数的多选语句
      var arr = []
      val.forEach(function(item) {
        arr.push(item.id)
      })
      this.selectItems = arr
      this.activeNum = this.selectItems.length
    },
    // importance过滤处理函数
    filterImportance(value, row) {
      return row.importance === value
    },
    // type过滤处理函数
    filterType(value, row) {
      return row.type === value
    },
    // status过滤处理函数
    filterStatus(value, row) {
      return row.status === value
    },
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.list
        this.total = response.data.total
        this.listLoading = false
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    timeFilter(time) {
      if (!time[0]) {
        this.listQuery.start = undefined
        this.listQuery.end = undefined
        return
      }
      this.listQuery.start = parseInt(+time[0] / 1000)
      this.listQuery.end = parseInt((+time[1] + 3600 * 1000 * 24) / 1000)
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作成功',
        type: 'success'
      })
      row.status = status
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
    },
    handleDelete(row) {
      this.$notify({
        title: '成功',
        message: '删除成功',
        type: 'success',
        duration: 2000
      })
      const index = this.list.indexOf(row)
      this.list.splice(index, 1)
    },
    create() {
      this.temp.id = parseInt(Math.random() * 100) + 1024
      this.temp.timestamp = +new Date()
      this.temp.author = '原创作者'
      this.list.unshift(this.temp)
      this.dialogFormVisible = false
      this.$notify({
        title: '成功',
        message: '创建成功',
        type: 'success',
        duration: 2000
      })
    },
    update() {
      this.temp.timestamp = +this.temp.timestamp
      for (const v of this.list) {
        if (v.id === this.temp.id) {
          const index = this.list.indexOf(v)
          this.list.splice(index, 1, this.temp)
          break
        }
      }
      this.dialogFormVisible = false
      this.$notify({
        title: '成功',
        message: '更新成功',
        type: 'success',
        duration: 2000
      })
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 0,
        remark: '',
        timestamp: 0,
        title: '',
        status: 'published',
        type: ''
      }
    },
    handleDownload() {
      require.ensure([], () => {
        const { export_json_to_excel } = require('vendor/Export2Excel')
        const tHeader = ['时间', '地区', '类型', '标题', '重要性']
        const filterVal = ['timestamp', 'province', 'type', 'title', 'importance']
        const data = this.formatJson(filterVal, this.list)
        export_json_to_excel(tHeader, data, 'table数据')
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>
