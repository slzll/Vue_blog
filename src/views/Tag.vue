<template>
  <Row class="tag-page">
    <Col :span="18" :offset="3" class="tag-page__container">
      This is the tag page
    </Col>
  </Row>
</template>

<script>
  export default {
    name: 'Tag'
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../styles/mixin";

  .tag-page {
    &__container {
      margin-top: 30px;
      padding: 20px;
      background-color: $white;
    }
  }
</style>
