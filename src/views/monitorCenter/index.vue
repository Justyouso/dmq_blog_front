<template>
  <div class="index">
    <div class="index_center">
      <div class="article_body">
        <el-table 
            :data="article"
            :stripe=false
            :show-header=false>
            <el-table-column>
              <template  slot-scope="scope">
                <router-link tag='a' class="title" :to="`/infoCenter/detail/${scope.row.id}`">
                  {{scope.row.title}}
                </router-link>
                <p class="summary">
                  {{scope.row.summary}}
                </p>
                <div class="author">
                <router-link tag='a' :to="`/infoCenter/detail/${scope.row.author_id}`">
                  作者: {{scope.row.author}}
                </router-link>
                <router-link tag='a' :to="`/infoCenter/detail/${scope.row.id}`">
                  评论量: {{scope.row.comments}}
                </router-link>
                <router-link tag='a' :to="`/infoCenter/detail/${scope.row.id}`">
                  阅读量: {{scope.row.reader_count}}
                </router-link>
                </div>
              </template>
          
            </el-table-column>
        </el-table>
      
      </div>
      <div class="recommend">
        <el-table 
          :data="recommend_author"
          :stripe=false>
          <el-table-column>
            <template slot="header">
              <div class="table-header">
                <p>
                  推荐作者
                </p>
                <router-link tag='a' :to="`/infoCenter/detail`">
                  换一批
                </router-link>
              </div>
            </template>

            <template  slot-scope="scope">
              <div class="name-flow">
                <router-link tag='a' class="name" :to="`/infoCenter/detail/${scope.row.id}`">
                  {{scope.row.author}}
                </router-link>
                <router-link tag='a' class="flow" :to="`/infoCenter/detail/${scope.row.id}`">
                  关注
                </router-link>
              </div>
              <div class="author">
                <p>
                写了{{scope.row.article_count}}篇文章 ▪ {{scope.row.followed_count}}喜欢
                </p>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
  
  <!-- <div class="index">
    <div class="index_center">
      <div class="article_table">
        <div class="article" v-for="item in article" :key="item.id">
          <div class="article_body">
            <a class="title">
              {{item.title}}
            </a>
            <p class="summary">
              {{item.summary}}
            </p>
            <div class="author">
              <a href="">{{item.author}}</a>
              <a href="">{{item.comments}}</a>
              <a href="">{{item.reader_count}}</a>
            </div>
           </div>
        </div>
     
      </div>
      <div class="recommend">
        222
      </div>
      
    </div>
  </div> -->
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          flow: 10
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          flow: 10
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          flow: 10
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          flow: 10
        }],
        article:[],
        recommend_author:[],
        page: 0,   
        offset: 10
      
      }
    },
    created(){
        var vm =this;
        this.axios
        .get("http://119.3.230.228:9999/v1/articles").then(function(response){
          vm.article = response.data.data
        })
        this.axios
        .get("http://119.3.230.228:9999/v1/recomd/author").then(function(response){
          vm.recommend_author = response.data.data
        })
      
    },
    methods:{
      
      // 获取文章列表
      // getList: function() {
      //     console.log(111)
      //     this.loading = true
      //     // this.checkedAll = false
      //     const {
      //         total,
      //         data
      //     } = this.$api.articleList({
      //     })
      //     this.total = total
      //     this.data = data
      //     this.loading = false
      //     return data
      // },
    }
  }
</script>

<style lang="scss" scoped>

  .index_center {
    display: flex;
    margin-left: 500px;
    // margin-top: -31px;
    width: 900px;
    
    .article_body{
      width: 700px;
      .title {
       font-size: 18px;
       font-weight: 700;
       line-height: 1.5;
       color: #333;
      }
      .summary {
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
      }
      .author{
        a {
          font-weight: 400;
          font-size: 12px;
          margin-right: 20px;
          color: #b4b4b4;
          line-height: 20px;
        }
      }
    }
    .recommend {
      width: 200px;
      margin-left: 10px;
      .table-header{
        p {
          display: inline-block;
          margin-right: 30px;
          font-size: 14px;
        }
        a {
          float: right;
          font-size: 14px;
        }
      }
      .name-flow{
        a.name {
        // margin-right: 60px;
        font-size: 14px;
        }
        a.flow{
          font-size: 14px;
          // margin-right: 10px;
          float: right;
        }
      }
      .author{
        font-size: 12px;
      }
    }

    
    
   
  }


</style>