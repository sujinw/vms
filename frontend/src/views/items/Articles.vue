<template lang="pug">
#admin-article.admin
  vsearch(model='Article', searchKey='title', :start='start')
  router-link(to='/addArticle')
      el-button.add-btn(type="text" @click="") 新建文章
  template
    el-table(:data='items', border='', style='width: 100%')
      el-table-column(type='expand')
        template(scope='props')
          el-form.demo-table-expand(label-position='left', inline='')
            el-form-item(label='点赞列表', style='width: 100%')
               div(v-for='like in props.row.likes') {{like.user.nickname}}

      el-table-column(type="index", width="100")
      el-table-column(prop='_index', label='索引')
      el-table-column(prop='title', label='标题')
      el-table-column(prop='status', label=' 状态', width="200")
      el-table-column(prop='user.nickname', label='用户名', width="150")
      el-table-column(prop='likes.length', label='点赞数', width="100")
      el-table-column(prop='send_at', label='发送时间', width="200")
      el-table-column(label='操作')
        template(scope='scope')
          el-button(size='small',
                    @click='handleEdit(scope.$index, scope.row)') 编辑
          el-button(size='small',
                    type='danger',
                    @click='handleDelete(scope.$index, scope.row)') 删除
  el-pagination(@size-change='handleSizeChange',
                @current-change='handleCurrentChange',
                :current-page="1",
                :page-size='100',
                layout='total, prev, pager, next',
                :total='1000')
</template>

<script>
export default {
  name: 'admin-article',
  computed: {
    items () {
      const articles = this.$store.state.adminItems
      return articles
    }
  },
  data () {
    return {
      start: 0,
      search: ''
    }
  },
  methods: {
    fetch (start = 0) {
      const _this = this
      const cb = function (result) {
        _this.$set(_this, 'start', start)
      }
      this.$store.dispatch('FETCH_ADMIN_ITEMS', {
        cb: cb,
        url: 'articles',
        data: {
          start: start,
        }
      })
    },
    handleEdit (index, row) {
      this.$store.commit('SET_ITEM', {
        key: 'editorStatus',
        val: 'updateArticle'
      })
      this.$store.commit('SET_ITEM', {
        key: 'medium',
        val: row
      })
      this.$router.push(`/addArticle`)
    },
    handleDelete(index, row) {
      const _this = this
      this.$store.dispatch('DELETE_ADMIN_ITEM', {
        url: `article/${row._id}`,
        msg: _this.$message,
        cb: _this.fetch
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.fetch(val - 1)
      console.log(`当前页: ${val}`);
    }
  },
  beforeMount () {
    this.fetch()
  }
}
</script>

<style lang="stylus" scoped>
.el-table, .el-pagination
  margin-top 20px
.el-input
  width 40%
.add-btn
  margin-left 30px
.el-table
  margin-top 30px
</style>
