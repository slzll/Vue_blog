<template>
  <ul class="article_list">
	<article-item/>
	<article-item/>
	<article-item/>
  </ul>
</template>

<script>
import ArticleItem from '@/components/ArticleItem.vue'

export default {
  name: 'ArticleList',
  components: {
    ArticleItem
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../styles/mixin";

  .article_list {
  }
</style>
