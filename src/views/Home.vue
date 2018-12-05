<template>
  <div class="page_home container_24">
	<main class="home_main grid_17">
	  <article-list/>
	</main>
	<aside class="home_aside grid_6 push_1">
	  <div class="tags_container">
		<h2 class="container_title">标签</h2>
		<div class="tag_list">
		  <a class="tag">Vue</a>
		  <a class="tag">前端</a>
		  <a class="tag">标签</a>
		  <a class="tag">react</a>
		  <a class="tag">js</a>
		  <a class="tag">angular</a>
		</div>
	  </div>
	</aside>
  </div>
</template>

<script>
  import ArticleList from '@/components/ArticleList.vue';

  export default {
    name: 'home',
    components: {
      ArticleList
    }
  };
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../styles/mixin";

  .page_home {

	.tags_container {
	  position: fixed;
	  top: $headerHeight+20px;
	  padding: 20px;
	  background-color: $white;
	  border-radius: 5px;

	  .tag_list {
		margin-top: 15px;
	  }
	}
  }
</style>
