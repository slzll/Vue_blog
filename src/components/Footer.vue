<template>
  <footer class="page_footer">
	Copyright © 2018 - {{thisYear}} SLZLL. All Rights Reserved. <a href="">浙ICP备18052301号</a>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        thisYear: new Date().getFullYear()
      };
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../styles/mixin";

  .page_footer {
	margin-top: 30px;
	width: 100%;
	height: $footerHeight;
	background-color: $white;
	display: flex;
	align-items: center;
	justify-content: center;
  }
</style>
