<template>
  <div class="userlist-container">
    <div class="app-container">
      <div class="filter-container">
        <el-input placeholder="用户ID" style="width: 200px;" class="filter-item" ></el-input>
        <el-input placeholder="用户ID" style="width: 200px;" class="filter-item" ></el-input>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: '用户列表',
  computed: {
    //获取了用户的权限信息
    ...mapGetters(['name'])
  }
}
</script>

<style lang="scss" scoped>
</style>
