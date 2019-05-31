<template>
  <div id="app">
    <AmbientCanvasBackground class="ambient-canvas-bg"/>
    <Header class="app-header"/>
    <router-view class="app-view"/>
  </div>
</template>
<script>
  import Header from '@/components/Header.vue';
  import AmbientCanvasBackground from '@/components/AmbientCanvasBackground';

  export default {
    components: {
      AmbientCanvasBackground,
      Header
    }
  };
</script>

<style lang="scss">
  @import "./styles/mixin";

  #app {
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
  }
</style>
