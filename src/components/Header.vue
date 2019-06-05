<template>
  <header class="page-header" :class="{header_clear_bg: isTransparent}">
    <a-row class="page-header__row" :gutter="16">
      <a-col class="page-header__logo" :span="8">SLZLL</a-col>
      <a-col class="page-header__nav" :span="16">
        <router-link class="page-header__nl" to="/">Home</router-link>
        <router-link class="page-header__nl" to="/category">Category</router-link>
        <router-link class="page-header__nl" to="/tag">Tag</router-link>
        <router-link class="page-header__nl" to="/about">About</router-link>
      </a-col>
    </a-row>
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

  .page-header {
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

    &__row {
      width: 100%;
    }

    &__logo {
      font-family: 'Kumar One Outline', cursive;
      font-size: 24px;
      font-weight: bold;
      color: #EEE;
      text-align: center;
      transition: all 400ms ease;

      &:before, &:after {
        content: attr(data-value);
        position: absolute;
        top: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0);
        clip: rect(0, 0, 0, 0);
      }

      &:before {
        left: -1px;
        text-shadow: 1px 0 #ff3f1a;
      }

      &:after {
        left: 1px;
        text-shadow: -1px 0 #00a7e0;
      }

      &:hover {
        &:before {
          text-shadow: 4px 0 #ff3f1a;
          animation: logo-loop-1 0.8s infinite ease-in-out alternate-reverse;
        }

        &:after {
          text-shadow: -5px 0 #00a7e0;
          animation: logo-loop-2 0.8s infinite ease-in-out alternate-reverse;
        }
      }
    }

    &__nav {
      font-size: 20px;
      color: #fff;
      text-align: center;
      display: grid;
      grid: 1fr/1fr 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 20px;
    }

    &__nl {
      color: #fff;

      &:hover, &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  @keyframes logo-loop-1 {
    0% {
      clip: rect(36px, 9999px, 9px, 0);
    }

    25% {
      clip: rect(25px, 9999px, 99px, 0);
    }

    50% {
      clip: rect(50px, 9999px, 102px, 0);
    }

    75% {
      clip: rect(30px, 9999px, 92px, 0);
    }

    100% {
      clip: rect(91px, 9999px, 98px, 0);
    }
  }

  @keyframes logo-loop-2 {
    0% {
      top: -1px;
      left: 1px;
      clip: rect(65px, 9999px, 119px, 0);
    }

    25% {
      top: -6px;
      left: 4px;
      clip: rect(79px, 9999px, 19px, 0);
    }

    50% {
      top: -3px;
      left: 2px;
      clip: rect(68px, 9999px, 11px, 0);
    }

    75% {
      top: 0;
      left: -4px;
      clip: rect(95px, 9999px, 53px, 0);
    }

    100% {
      top: -1px;
      left: -1px;
      clip: rect(31px, 9999px, 149px, 0);
    }
  }
</style>
