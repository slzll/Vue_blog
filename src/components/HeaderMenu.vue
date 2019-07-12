<template>
  <Menu :mode="mode" :theme="theme" active-name="home" class="header-menu">
    <MenuItem name="home">
      <router-link class="page-header__nl" to="/">Home</router-link>
    </MenuItem>
    <MenuItem name="category">
      <router-link class="page-header__nl" to="/category">Category</router-link>
    </MenuItem>
    <MenuItem name="tag">
      <router-link class="page-header__nl" to="/tag">Tag</router-link>
    </MenuItem>
    <MenuItem name="about">
      <router-link class="page-header__nl" to="/about">About</router-link>
    </MenuItem>
  </Menu>
</template>

<script>
  export default {
    name: 'HeaderMenu',
    props: {
      mode: {
        type: String,
        default: 'horizontal'
      },
      theme: {
        type: String,
        default: 'primary'
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../styles/mixin";

  .header-menu {
    &.ivu-menu-primary {
      background: transparent;
    }
  }
</style>
