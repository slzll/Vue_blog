<template>
  <div id="app">
    <!--<AmbientCanvasBackground class="ambient-canvas-bg"/>-->
    <!--<custom-cursor/>-->
    <a-layout>
      <a-layout-header>
        <Header class="app-header"/>
      </a-layout-header>
      <a-layout-content>
        <router-view class="app-view"/>
      </a-layout-content>
      <a-layout-footer>
        <Footer/>
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
  import Header from '@/components/Header';
  import Footer from '@/components/Footer';

  export default {
    components: {
      Footer,
      Header
    }
  };
</script>

<style lang="scss" scoped>
  @import "./styles/mixin";

  #app {
    /*cursor: none !important;*/

    .ambient-canvas-bg {
      position: relative;
      z-index: 1;
    }

    .app-header {
      position: relative;
      z-index: 2;
    }

    .app-view {
      position: relative;
      z-index: 2;
    }

    .ant-layout-footer {
      padding: 0;
    }
  }
</style>
