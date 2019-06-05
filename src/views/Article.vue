<template>
  <main class="article-page">
    <div class="container_24 article-page__container">
      <h2 class="article-page__title">{{detail.title}}</h2>
      <article class="article-content">
        <a-layout>
          <a-layout-content>
            <vue-markdown class="markdown-container"
                          ref="markdown"
                          :toc="true"
                          :source="detail.content"
                          :postrender="postRender"
                          @toc-rendered="tocRendered"
            ></vue-markdown>
          </a-layout-content>
          <a-layout-sider width="250">
            <div v-html="toc"></div>
          </a-layout-sider>
        </a-layout>
      </article>
    </div>
  </main>
</template>

<script>
  import Vue from 'vue';
  import VueMarkdown from 'vue-markdown';
  import { Layout } from 'ant-design-vue';
  import { GetArticleDetail } from '@/api/article';
  import HighLight from '../plugins/highlightjs';
  import ALayoutSider from 'ant-design-vue/es/layout/Sider';

  const { Sider, Content } = Layout;
  Vue.component(Layout.name, Layout);
  Vue.component(Sider.name, Sider);
  Vue.component(Content.name, Content);
  Vue.use(HighLight);
  export default {
    name: 'Article',
    components: {
      ALayoutSider,
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
      background-color: $white;
      padding: 20px;
    }

    &__title {
      text-align: center;
    }

    .markdown-container {
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
  }
</style>
