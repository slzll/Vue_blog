<template>
  <Row class="tag-page">
    <Col class="tag-page__container" :md="{span: 18, offset: 3}">
      <ul class="tag_list">
        <a class="tag" v-for="item in tagList"
           @click="getArticles(item._id)"
           :key="item._id">
          {{item.name}}
        </a>
      </ul>
      <ul>
        <li v-for="article in articles" :key="article._id">
          <router-link :to="{name: 'article', query: {Id: article._id}}">{{article.title}}</router-link>
        </li>
      </ul>
    </Col>
  </Row>
</template>

<script>
  import { GetTagList } from '@/api/tag';
  import { GetArticleList } from '@/api/article';

  export default {
    name: 'Tag',
    data() {
      return {
        tagList: [],
        articles: []
      };
    },
    created() {
      this.getTagList();
    },
    methods: {
      async getTagList() {
        let res = await GetTagList();
        if (res.success) {
          this.tagList = res.data;
        }
      },
      async getArticles(tagId) {
        let res = await GetArticleList({ tags: [tagId] });
        if (res.success) {
          console.log(res);
          this.articles = res.data;
          this.$Message.success("请求成功")
        }
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../styles/mixin";

  .tag-page {
    &__container {
      margin-top: 30px;
      padding: 20px;
      background-color: $white;
    }
  }
</style>
