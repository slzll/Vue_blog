<template>
  <Row class="home">
    <Col :span="18" :offset="3">
      <article-list :article-data="articleData"></article-list>
    </Col>
  </Row>
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
