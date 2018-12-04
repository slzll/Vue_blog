<template>
  <header class="page_header" :class="isTransparent?'is-transparent':'not-transparent'">
	<div class="container">
	  <span class="logo">SLZLL</span>
	  <div class="nav">
		<router-link to="/">Home</router-link>
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
    },
    mounted() {

    }
  };
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../styles/mixin";

  .page_header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	height: $headerHeight;

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
	  }

	  .nav {
		flex: 5;
		text-align: center;

		a {
		  font-weight: bold;
		}
	  }
	}

	&.is-transparent {
	  background-color: transparent;

	  .logo {
		color: $white;
	  }

	  .nav {
		a {
		  color: $white;

		  &.router-link-exact-active {
			color: $primary-color;
		  }
		}
	  }

	}

	&.not-transparent {
	  border-bottom: 1px solid $border-color;
	  box-shadow: 0 0 10px 5px $shadow-color;

	  .logo {
		color: #000;
	  }

	  .nav {
		a {
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
