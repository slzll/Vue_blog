<template>
  <li class="article_item">
	<h3 class="article_title">文章标题</h3>
	<p class="article_desc">文章简介</p>
	<div class="article_info">
	  <span class="article_time">2018-12-02 13:22</span>
	  <div class="tag_list">
		<a class="tag">JS</a>
		<a class="tag">vue</a>
		<a class="tag">前端</a>
	  </div>
	</div>
  </li>
</template>

<script>
  export default {
    name: 'ArticleItem'
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../styles/mixin";

  .article_item {
	margin-top: 20px;
	background-color: $white;
	border-radius: 10px;
	padding: 20px;

	.article_title {
	  line-height: 2;
	}

	.article_desc {
	  padding: 15px 0;
	  line-height: 1.5;
	}

	.article_info {
	  display: flex;
	  justify-content: flex-start;
	  align-items: center;

	  .article_time {
		color: $gray-999;
	  }

	  .tag_list {
		margin-left: 20px;
	  }
	}
  }
</style>
