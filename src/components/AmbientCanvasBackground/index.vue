<template>
  <div class="content--canvas"></div>
</template>

<script>
  import * as aurora from './aurora';
  import * as coalesce from './coalesce';
  import * as pipeline from './pipeline';
  import * as shift from './shift';
  import * as swirl from './swirl';

  export default {
    name: 'AmbientCanvasBackground',
    mounted() {
      const ambients = [aurora, coalesce, pipeline, shift, swirl];
      const randomIndex = Math.floor(Math.random() * 5);
      const { setup, resize } = ambients[randomIndex];
      window.addEventListener('load', setup);
      window.addEventListener('resize', resize);
    }
  };
</script>

<style scoped>

</style>
