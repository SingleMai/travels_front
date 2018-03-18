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
        prop="name"
        label="用户"
        width="180">
      </el-table-column>
      <el-table-column
        prop="img"
        label="证件照">
        <template slot-scope="scope">
          <img style="height: 200px;width:200px;" :src="scope.row.img" alt="">
        </template>
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
            type="success"
            size="mini"
            @click="checkPass(scope.$index, scope.row)">审核通过</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="checkUnPass(scope.$index, scope.row)">审核不通过</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import imgSrc from 'img/timg.jpeg'

export default {
  name: '',
  data () {
    return {
      data: [{
        id: 1,
        name: '小可爱',
        img: imgSrc
      }]
    }
  },
  methods: {
    checkPass (index) {
      this.data.splice(index, 1)
      this.$message.success('审核通过！')
    },
    checkUnPass (index) {
      this.data.splice(index, 1)
      this.$message.error('审核不通过！')
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
</style>
