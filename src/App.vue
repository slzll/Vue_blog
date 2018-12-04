<template>
  <div id="app">
	<Header/>
	<main class="page_main">
	  <router-view/>
	</main>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';

  export default {
    components: { Header }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "./styles/mixin";

  .page_main {
	padding-top: $headerHeight;
	width: 100vw;
	height: 100vh;
	background-image: url("./assets/images/home_bg.jpeg");
	background-size: 100% auto;
	background-attachment: fixed;
  }
</style>
