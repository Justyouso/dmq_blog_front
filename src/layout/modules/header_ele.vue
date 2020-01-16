<template>
  <nav class="navber-defualt">
    <div class="navber">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <div class="logo">
              <router-link
                  to="/monitorCenter"
                  :class="$route.meta.nav==='dashboard' ? 'active-class' : ''"
                >
                  简书
                </router-link>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <ul class="menu-bar">
              <li>
                <router-link
                  to="/monitorCenter"
                  :class="$route.meta.nav==='dashboard' ? 'active-class' : ''"
                >
                  发现
                </router-link>
              </li>
              <li>
                <router-link
                  :to="`/infoCenter/topic${defaultPlanPath}`"
                  :class="$route.meta.nav==='info' ? 'active-class' : ''"
                >
                  关注
                </router-link>
              </li>
              <li>
                <router-link
                  to="/reportCenter"
                  :class="$route.meta.nav==='report' ? 'active-class' : ''"
                >
                  消息
                </router-link>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple el_search">
            <el-input  v-model="inputValue" placeholder="搜索">
              <svg-icon
                slot="suffix"
                icon-class="search"
                :style="{ color: searchBtnColor, cursor: 'pointer' }"
                @click="handleSearch"
              />
            </el-input>
          </div>
        </el-col>
        <!-- 判断是否登录 -->
        <el-col :span="8" v-if="isAdmin===1">
          <div class="grid-content bg-purple">
            <ul class="logo-bar">
              <li>
                <router-link
                  to="/monitorCenter"
                  :class="$route.meta.nav==='dashboard' ? 'active-class' : ''"
                >
                  登录
                </router-link>
              </li>
              <li>
                <router-link
                  :to="`/infoCenter/topic${defaultPlanPath}`"
                  :class="$route.meta.nav==='info' ? 'active-class' : ''"
                >
                  注册
                </router-link>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="8" v-else>
          <div class="grid-content bg-purple">
            <div class="article">
               <router-link
                  :to="`/infoCenter/topic${defaultPlanPath}`"
                  :class="$route.meta.nav==='info' ? 'active-class' : ''"
                >
                  写文章
                </router-link>
            </div>
            <div class="user-bar fr">
              <div class="user-name">
                <span class="name">{{ username }}</span>
                <i class="el-icon-arrow-down" />
              </div>
              <ul class="user-sub">
                <li v-if="isAdmin">
                  <router-link to="/accountCenter">
                    账号设置
                  </router-link>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    @click="logOut"
                  >退出登录</a>
                </li>
              </ul>
          </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </nav>
</template>
<script>
// import { mapGetters } from 'vuex'
export default {
    name: 'Header',
    data () {
        return {
            listQuery: {
                query: ''
            },
            username:"呆萌晴"
        }
    },
    computed: {
        // ... mapGetters([
        //     'plans',
        //     'defaultPlanPath',
        //     'username',
        //     'isAdmin'
        // ])
        isAdmin:function(){
          return 1
        },
        defaultPlanPath:function(){
          return 1
        }
    },
    created () {
        const { query } = this.$route.query
        this.listQuery.query = query
    },
    methods: {
        // 退出
        async logOut () {
            // try {
            //     await this.$api.logout()
            //     await this.$store.dispatch('user/Logout')
            //     this.$router.push({
            //         path: '/'
            //     })
            // } catch (error) {
            //     console.log(error)
            // }
        },
        // 全局文章搜索
        handleSarch () {
            // if (this.listQuery.query) {
            //     this.$router.push({
            //         path: '/search',
            //         query: this.listQuery
            //     })
            // } else {
            //     this.$message({
            //         message: '请输入关键词查询！',
            //         type: 'warning',
            //         duration: '600'
            //     })
            // }
        }
    }
}
</script>
 
