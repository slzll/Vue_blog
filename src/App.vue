<template>
  <div id="app">
	<AmbientCanvasBackground class="ambient-canvas-bg"/>
	<Header class="app-header"/>
	<router-view class="app-view"/>
	<custom-cursor/>
  </div>
</template>
<script>
  import Header from '@/components/Header';
  import AmbientCanvasBackground from '@/components/AmbientCanvasBackground';
  import CustomCursor from '@/components/CustomCursor';

  export default {
    components: {
      AmbientCanvasBackground,
      Header,
      CustomCursor
    }
  };
</script>

<style lang="scss">
  @import "./styles/mixin";

  #app {
	cursor: none !important;

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
