<template>
  <ul class="article_list">
    <article-item v-for="item in articleData" :item-data="item" :key="item._id"/>
  </ul>
</template>

<script>
  import ArticleItem from '@/components/ArticleItem.vue';

  export default {
    name: 'ArticleList',
    components: {
      ArticleItem
    },
    props: {
      articleData: {
        type: Array,
        default: () => []
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../styles/mixin";

  .article_list {
  }
</style>
