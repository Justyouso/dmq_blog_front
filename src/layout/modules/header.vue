<template>
  <header>
    <div class="left-logo">
      <img
        src="../../assets/image/header-logo.png"
      >
      <span>简书</span>
    </div>
    <div class="right-nav">
      <ul
        class="menu-bar"
      >
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
      <div class="handle-bar">
        <!-- <Search  :width="240"/> -->
        <Search
          :width="240"
          @Search="handleSarch"
        />
        <div class="article-write">
          写文章
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
    </div>
  </header>
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
            username:"王超"
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
          return true
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
