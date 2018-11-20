<template>
  <div>
    <!-- 评论内容开始 -->
    <div class="photo-bottom">
      <ul>
        <li class="photo-comment">
          <div>
            <span>提交评论</span>
            <span><a @click="goback">返回</a></span>
          </div>
        </li>
        <li class="txt-comment">
          <label>
            <textarea v-model="msg"></textarea>
          </label>
        </li>
        <li>
          <mt-button @click="sendComment" size="large" type="primary">发表评论按钮</mt-button>
        </li>
        <li class="photo-comment">
          <div>
            <span>评论列表</span>
            <span>66条评论</span>
          </div>
        </li>
      </ul>
      <ul class="comment-list" style="margin-bottom: 400px">
        <li v-for="(comment,index) in comments" :key="index">
          {{comment.user_name}}：{{comment.content}} {{comment.add_time|convertDate}}
        </li>

      </ul>
      <mt-button type="danger" size="large" plain @click="loadByPage">加载更多按钮</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'comment',
  data () {
    return {
      comments: [], // 存放评论数据
      pageIndex: 1, // 页码
      msg: ''// 发表的评论
    }
  },
  created () {
    // 评论操作 开始
    this.loadFirst()
    // 评论操作 结束
  },
  props: ['cid'],
  methods: {
    // 先调用这个函数
    loadFirst () {
      this.$ajax.get('getcomments/' + this.cid + '?pageindex=1')
        .then(res => {
          this.comments = res.data.message
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 再点击按钮
    loadByPage () {
      this.$ajax.get('getcomments/' + this.cid + '?pageindex=' + (++this.pageIndex))
        .then(res => {
          // 追加
          this.comments = this.comments.concat(res.data.message)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 发表评论
    sendComment () {
      // 发表评论请求后台
      this.$ajax.post('postcomment/' + this.cid, 'content=' + this.msg)
        .then(res => {
          console.log(res)
          // 获取最新的第一页数据
          this.loadFirst()
          // 清空数据
          this.msg = ''
        })
        .catch(err => {
          console.log(err)
        })
    },
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .photo-comment > div span:nth-child(1) {
    float: left;
    font-weight: bold;
    margin-left: 0.05rem;
    font-size: 0.24rem;
  }

  .photo-comment > div span:nth-child(2) {
    float: right;
    font-size: 12px;
  }

  .photo-comment {
    height: 0.30rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    line-height: 0.30rem;
    margin-bottom: 0.05rem;
  }

  .txt-comment {
    padding: 0.05rem;
  }

  .txt-comment textarea {
    margin-bottom: 0.05rem;
  }

  .comment-list li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 0.05rem;
    margin-bottom: 0.05rem;
    padding-left: 0.05rem;
    font-size: 0.16rem;
  }

  li {
    list-style: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }
</style>
