<template>
  <div id="app">
    <!--<AmbientCanvasBackground class="ambient-canvas-bg"/>-->
    <!--<custom-cursor/>-->
    <Layout>
      <Header class="app-header">
        <blog-header/>
      </Header>
      <Content class="app-view">
        <router-view/>
      </Content>
      <Footer>
        <blog-footer/>
      </Footer>
    </Layout>
  </div>
</template>
<script>
  import BlogHeader from '@/components/Header';
  import BlogFooter from '@/components/Footer';

  export default {
    components: {
      BlogFooter,
      BlogHeader
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
      box-shadow: 0 0 20px 0 #333;
    }

    .app-view {
      position: relative;
      z-index: 2;
    }

    .ivu-layout-footer {
      padding: 0;
    }
  }
</style>
