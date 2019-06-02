<template>
  <header class="page_header" :class="{header_clear_bg: isTransparent}">
	<div class="container">
	  <span class="logo">SLZLL</span>
	  <div class="nav">
		<router-link to="/">Home</router-link>
		|
		<router-link to="/category">Category</router-link>
		|
		<router-link to="/about">About</router-link>
	  </div>
	</div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        isTransparent: true
      };
    }
  };
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../styles/mixin";

  .page_header {
	display: flex;
	align-items: center;
	height: $headerHeight;
	background-color: $white;
	border-bottom: 1px solid $border-color;
	box-shadow: 0 0 20px 0 #333;

	&.header_clear_bg {
	  background-color: transparent;
	  border-bottom: none;
	  box-shadow: none;

	  .container {
		.logo {
		  color: $white;
		}

		.nav {
		  a {
			color: $white;
		  }
		}
	  }
	}

	.container {
	  display: flex;
	  align-items: center;
	  margin: 0 auto;
	  width: $bodyWidth;

	  .logo {
		flex: 1;
		font-family: 'Kumar One Outline', cursive;
		font-size: 24px;
		font-weight: bold;
		color: #000;
	  }

	  .nav {
		flex: 5;
		text-align: center;

		a {
		  margin: 0 10px;
		  font-weight: bold;
		  color: #2c3e50;

		  &.router-link-exact-active {
			color: #42b983;
		  }
		}
	  }
	}

  }
</style>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
