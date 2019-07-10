<template>
  <Row class="article-page">
    <Col class="article-page__container" span="18" offset="3">
      <h2 class="article-page__title">{{detail.title}}</h2>
      <article class="article-content">
        <Layout>
          <Content class="markdown-container">
            <vue-markdown class="markdown-content"
                          ref="markdown"
                          :toc="true"
                          :source="detail.content"
                          :postrender="postRender"
                          @toc-rendered="tocRendered"
            ></vue-markdown>
          </Content>
          <Sider class="sider_container" width="250">
            <div v-html="toc"></div>
          </Sider>
        </Layout>
      </article>
    </Col>
  </Row>
</template>

<script>
  import Vue from 'vue';
  import VueMarkdown from 'vue-markdown';
  import { GetArticleDetail } from '@/api/article';
  import HighLight from '../plugins/highlightjs';

  Vue.use(HighLight);
  export default {
    name: 'Article',
    components: {
      'vue-markdown': VueMarkdown
    },
    data() {
      return {
        Id: '',
        detail: {},
        toc: ''
      };
    },
    created() {
      this.Id = this.$route.query.Id;
      this.getDetail();
    },
    methods: {
      async getDetail() {
        let res = await GetArticleDetail({ _id: this.Id });
        if (res.success) {
          this.detail = res.data;
        }
      },
      postRender(html) {
        const fragment = document.createElement('div');
        fragment.innerHTML = html;
        fragment.querySelectorAll('pre code')
          .forEach((block) => {
            this.$hljs.highlightBlock(block);
          });
        const hljsDOM = fragment.querySelectorAll('.hljs');
        for (let i = 0, l = hljsDOM.length; i < l; i += 1) {
          hljsDOM[i].innerHTML = `<ol class="rounded-list"><li class="hljs-ln-line">${hljsDOM[i]
            .innerHTML.replace(
              /\n/g,
              '\n</li><li class="hljs-ln-line">'
            )}\n</li></ol>`;
        }
        return fragment.innerHTML;
      },
      tocRendered(str) {
        this.toc = str;
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../styles/mixin";

  .article-page {
    &__container {
      margin-top: 30px;
      background-color: #fff;
      box-shadow: 0 0 20px 0 #ddd;
    }

    &__title {
      text-align: center;
      padding: 20px;
    }

    .markdown-container {
      background-color: #fff;
      padding: 10px 20px;
    }

    .markdown-content {
      /deep/ {
        img {
          max-width: 100%;
        }

        .hljs {
          padding: 0;
        }

        .rounded-list {
          counter-reset: li;
          margin-bottom: 0;
          padding: 0.5em 0;
        }

        .hljs-ln-line {
          padding: 0 0.5em 0 0;
        }

        .rounded-list li:before {
          content: counter(li);
          display: inline-block;
          counter-increment: li;
          padding: 0 0.5em;
          text-align: center;
          width: 2em;
          margin-right: 10px;
          border-right: 1px solid #eee;
        }

        code:not(.hljs) {
          padding: 0 5px;
          border-radius: 3px;
          background-color: #1e1e1e;
          color: #dcdcdc;
        }
      }
    }

    .sider_container {
      padding: 20px;
    }
  }
</style>
