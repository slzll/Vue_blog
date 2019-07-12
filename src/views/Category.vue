<template>
  <Row class="category-page">
    <Col class="category-page__container" :md="{span: 18, offset: 3}">
      <ul class="category-list">
        <li v-for="item in categories" :key="item._id">
          <h1>{{item.name}}</h1>
          <ul>
            <li v-for="article in item.articles" :key="article._id">
              <router-link :to="{name: 'article', query: {Id: article._id}}">{{article.title}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </Col>
  </Row>
</template>

<script>
  import { GetCategoryList } from '@/api/category';
  import { GetArticleList } from '@/api/article';

  export default {
    name: 'Category',
    data() {
      return {
        categories: []
      };
    },
    created() {
      this.getCategories();
    },
    methods: {
      async getCategories() {
        let res = await GetCategoryList();
        if (res.success) {
          this.categories = res.data;
          for (let i = 0; i < this.categories.length; i++) {
            let item = this.categories[i];
            let articleData = await GetArticleList({ category: item._id });
            if (articleData.success) {
              this.categories[i] = {
                ...this.categories[i],
                articles: articleData.data
              };
              this.$forceUpdate();
            }
          }
        }
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../styles/mixin";

  .category-page {
    .category-list {
      margin-top: 20px;
      background-color: $white;
      padding: 20px;
    }
  }
</style>
