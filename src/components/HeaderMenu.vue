<template>
  <Menu :mode="mode" theme="dark" active-name="home">
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
      }
    }
  };
</script>

<style scoped>

</style>
