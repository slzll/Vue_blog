<template>
  <div id="app">
	<Header/>
	<main class="page_main">
	  <router-view/>
	</main>
	<Footer/>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';

  export default {
    components: {
      Header,
      Footer
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "./styles/mixin";

  #app {
	background-image: url("./assets/images/home_bg.jpeg");
	background-size: 100% auto;
	background-attachment: fixed;
  }

  .page_main {
	width: 100vw;
	min-height: calc(100% - #{$headerHeight} - #{$footerHeight});
	overflow: auto;
  }
</style>
