<template>
  <div>
    <el-table
      :cell-style="textAlignCenter"
      :header-cell-style="textAlignCenter"
      :data="data"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        width="90">
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容"
        width="180">
      </el-table-column>
      <el-table-column
        prop="time"
        label="时间">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- <el-button
            size="mini"
            @click="handleEdit(key, scope.$index, scope.row)">编辑</el-button> -->
          <!-- <el-button
            size="mini"
            @click="getDetail(scope.$index, scope.row)">详情</el-button> -->
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { TravelsApi } from 'api'
import SlideDialog from 'base/SlideDialog'
import TravelsDetail from './TravelsDetail'

export default {
  name: '',
  mounted () {
    this.$_getData()
  },
  data () {
    return {
      textAlignCenter: {
        textAlign: 'center'
      },
      limit: 100,
      offset: 0,
      data: null
    }
  },
  methods: {
    async handleDelete (index) {
      await this.$confirm('删除的内容将无法再恢复，请确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      this.data.splice(index, 1)
      this.$message.success('删除成功！')
    },
    async $_getData () {
      const data = await TravelsApi.getTravels({
        limit: this.limit,
        offset: this.offset
      })
      this.data = data
    }
  },
  components: {
    TravelsDetail,
    SlideDialog
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
</style>
