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
        prop="email"
        label="邮箱">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
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
import { userApi } from 'api/index.js'

let typesOptions = {}

export default {
  mounted () {
    this.$_getPermissionType()
    this.$_getUserList()
  },
  data () {
    return {
      textAlignCenter: {
        textAlign: 'center'
      },
      dialogVisible: false,
      passwordDialog: false,
      typesOptions: {},
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
  filters: {
    formatePermission (val) {
      val = parseInt(val)
      return typesOptions[val]
    }
  },
  methods: {
    handleEdit (index, row) {
      this.currentItem = JSON.parse(JSON.stringify(row))
      this.currentInex = index
      this.dialogVisible = true
    },
    async updatePassword () {
      if (this.passwordItem.password !== this.passwordItem.again) {
        this.$message({
          showClose: true,
          message: '两次密码输入不一致',
          type: 'error'
        })
      } else {
        try {
          await userApi.updatePass(Object.assign({}, {
            old: this.passwordItem.old,
            password: this.passwordItem.password
          }))
          this.passwordDialog = false
          this.$message.success('修改密码成功！')
        } catch (err) {
          this.passwordDialog = false
          this.$message.error(`修改密码失败： ${err.message}`)
        }
      }
      this.passwordItem = {}
    },
    async handleDelete (index, row) {
      await this.$confirm('删除的内容将无法再恢复，请确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      try {
        await userApi.deleteUser(row.id)
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
            await userApi.updateUser(data)
            this.$set(this.data, this.currentInex, data)
            this.resetDate()
            this.$message.success(`更新用户信息成功！`)
          } catch (err) {
            this.$message.error(`更新用户信息失败:  ${err.message}`)
          }
        } else {
          try {
            const result = await userApi.createUser(this.currentItem)
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
        const users = await userApi.getUsers()
        this.data = users
      } catch (err) {
        this.$message.error(`获取用户列表失败<br>${err.message}`)
      }
    }
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
</style>
