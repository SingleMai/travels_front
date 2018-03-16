<template>
  <div>
    <div class="btn-box">
      <el-button type="primary" icon="el-icon-plus" @click="dialogVisible = true">添加用户</el-button>
    </div>
    <el-table
      :data="data"
      style="width: 100%"
      :cell-style="textAlignCenter"
      :header-cell-style="textAlignCenter">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="head"
        label="头像">
        <template slot-scope="scope">
          <img style="height: 100px;width:100px;" :src="scope.row.head" alt="">
        </template>
      </el-table-column>
      <el-table-column
        label="认证内容">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.hasShop === 1">向导</el-tag>
          <el-tag v-if="scope.row.hasIdCard === 1">实名认证</el-tag>
          <el-tag v-if="scope.row.hasGuideCard === 1">导游认证</el-tag>
          <el-tag v-if="scope.row.hasEduCard === 1">学历认证</el-tag>
          <el-tag v-if="scope.row.hasDriveCard === 1">驾驶证认证</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
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
    <!-- 详情弹窗 -->
    <slide-dialog v-if="detailDialogVisable" @close="detailDialogVisable=false">
      <header class='header-dialog-title'>
        <h2 class='header-dialog-content'>{{ currentItem.desc }}用户详情</h2>
      </header>
      <user-detail-dialog :data="currentItem"></user-detail-dialog>
    </slide-dialog>
    <el-dialog title="添加/修改用户"
               :visible.sync="dialogVisible"
               @before-close='closeDialog'
               @close="resetDate">
      <el-form label-position="top"
               label-width="80px"
               :model="currentItem"
               :rules="rules"
               ref="ruleDialog">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="currentItem.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="currentItem.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="phone">
          <el-input v-model="currentItem.phone"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="confirmDialog('ruleDialog')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { UserApi } from 'api/index.js'
import SlideDialog from 'base/SlideDialog'
import UserDetailDialog from './UserDetailDialog'

export default {
  mounted () {
    this.$_getUserList()
  },
  data () {
    return {
      textAlignCenter: {
        textAlign: 'center'
      },
      dialogVisible: false,
      detailDialogVisable: false,
      passwordDialog: false,
      data: [],
      currentInex: null,
      currentItem: {},
      passwordItem: {},
      rules: {
        name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
        phone: [{ required: true, message: '电话', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // handleEdit (index, row) {
    //   this.currentItem = JSON.parse(JSON.stringify(row))
    //   this.currentInex = index
    //   this.dialogVisible = true
    // },
    getDetail (index, row) {
      this.currentItem = JSON.parse(JSON.stringify(row))
      this.detailDialogVisable = true
    },
    async handleDelete (index, row) {
      await this.$confirm('删除的内容将无法再恢复，请确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      try {
        await UserApi.deleteUser(row.id)
        this.data.splice(index, 1)
        this.$message.success(`删除用户信息成功！`)
      } catch (err) {
        this.$message.error(`删除用户信息失败:  ${err.message}`)
      }
    },
    async closeDialog (done) {
      // 用户并没有编辑过内容，则直接跳过
      this.resetDate()
    },
    async confirmDialog (formName) {
      try {
        await this.$refs[formName].validate()
        // 利用是否存在id来判断是更新/添加操作
        // 有id则为更新操作
        if (this.currentItem.id) {
          try {
            // 由于更新操作有可能导致选填项传一个null，所以进行数据处理
            const origDate = this.currentItem
            const data = {
              id: origDate.id,
              name: origDate.name,
              email: origDate.email,
              permission: origDate.permission
            }
            if (origDate.phone) {
              data.phone = origDate.phone
            }
            await UserApi.updateUser(data)
            this.$set(this.data, this.currentInex, data)
            this.resetDate()
            this.$message.success(`更新用户信息成功！`)
          } catch (err) {
            this.$message.error(`更新用户信息失败:  ${err.message}`)
          }
        } else {
          try {
            const result = await UserApi.createUser(this.currentItem)
            this.data.push({
              id: result.id,
              name: result.name,
              email: result.email,
              phone: result.phone,
              permission: result.permission
            })
            this.resetDate()
            this.$message.success(`添加用户信息成功！`)
          } catch (err) {
            this.$message.error(`添加用户信息失败:  ${err.message}`)
          }
        }
      } catch (err) {
        console.log(err)
      }
    },
    resetDate () {
      this.currentItem = {}
      this.currentInex = null
      this.dialogVisible = false
    },
    async $_getUserList () {
      try {
        const users = await UserApi.getUsers()
        this.data = users
      } catch (err) {
        this.$message.error(`获取用户列表失败<br>${err.message}`)
      }
    }
  },
  components: {
    SlideDialog,
    UserDetailDialog
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
.btn-box {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}
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
