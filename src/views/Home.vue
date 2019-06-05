<template>
  <a-layout class="home">
    <a-layout-content>
      <article-list :article-data="articleData"></article-list>
    </a-layout-content>
  </a-layout>
</template>

<script>
  import ArticleList from '@/components/ArticleList';
  import { GetArticleList } from '@/api/article';

  export default {
    name: 'home',
    components: { ArticleList },
    data() {
      return {
        articleData: []
      };
    },
    created() {
      this.getArticles();
    },
    methods: {
      async getArticles() {
        try {
          let res = await GetArticleList();
          if (res.success) {
            this.articleData = res.data;
          }
        } catch (e) {
          console.log(e);
        }
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../styles/mixin";

  .home {

  }
</style>
