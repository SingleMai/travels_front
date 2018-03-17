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
        prop="title"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="headImg"
        label="首图">
        <template slot-scope="scope">
          <img style="height: 100px;width:100px;" :src="scope.row.headImg" alt="">
        </template>
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- <el-button
            size="mini"
            @click="handleEdit(key, scope.$index, scope.row)">编辑</el-button> -->
          <el-button
            size="mini"
            @click="getDetail(scope.$index, scope.row)">详情</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <slide-dialog v-if="detailDialogVisable" @close="detailDialogVisable=false">
      <header class='header-dialog-title'>
        <h2 class='header-dialog-content'>{{ currentItem.desc }}服务详情</h2>
      </header>
      <servers-detail :data="currentItem"></servers-detail>
    </slide-dialog>
  </div>
</template>
<script>
import { ServersApi } from 'api'
import SlideDialog from 'base/SlideDialog'
import ServersDetail from './ServersDetail'

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
      detailDialogVisable: false,
      limit: 100,
      offset: 0,
      data: null,
      currentItem: null
    }
  },
  methods: {
    getDetail (index, row) {
      this.currentItem = row
      this.detailDialogVisable = true
    },
    handleEdit (index, row) {

    },
    handleDelete (index, row) {

    },
    async $_getData () {
      const data = await ServersApi.getServers({
        limit: this.limit,
        offset: this.offset
      })
      this.data = data
    }
  },
  components: {
    SlideDialog,
    ServersDetail
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
.header-dialog-title{
  border-bottom: 1px solid #DCE1E6;
  padding: 20px 20px 10px 20px;
}
.header-dialog-content{
  font-family: 'PingFangSC-Regular';
  font-weight: normal;
  font-size: 14px;
  color: #333333;
  letter-spacing: 0.35px;
}
</style>
