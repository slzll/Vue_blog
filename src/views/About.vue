<template>
  <Row class="about-page">
    <Col class="about-page__container" :span="18" offset="3">
      <h1>This is an about page</h1>
    </Col>
  </Row>
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../styles/mixin";

  .about-page {
    margin-top: 30px;

    &__container {
      padding: 20px;
      background-color: $white;
    }
  }
</style>
