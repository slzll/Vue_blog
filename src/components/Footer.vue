<template>
  <footer class="page_footer">
    <Row type="flex" justify="center" align="middle">
      <Col>Copyright © 2018 - {{thisYear}} SLZLL. All Rights Reserved.</Col>
      <Col>
        <a href="http://beian.miit.gov.cn" target="_blank">浙ICP备18052301号</a>
      </Col>
    </Row>
  </footer>
</template>

<script>
  export default {
    name: 'BlogFooter',
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
