<template>
  <header class="page-header">
    <Row class="page-header__row" type="flex" justify="space-between">
      <Col class="page-header__logo" :sm="{span: 18}" :md="{span: 8}">SLZLL</Col>
      <Col class="page-header__nav" :sm="{span: 6}" :md="{span: 10}">
        <header-menu v-if="!showDrawer"></header-menu>
        <Icon v-else type="md-menu" size="24" @click.native="openDrawer = !openDrawer"/>
        <Drawer class="menu-drawer__container" class-name="menu-drawer" :closable="false" v-model="openDrawer"
                width="240">
          <header-menu mode="vertical" theme="dark"></header-menu>
        </Drawer>
      </Col>
    </Row>
  </header>
</template>

<script>
  import HeaderMenu from './HeaderMenu';

  export default {
    name: 'BlogHeader',
    components: {
      HeaderMenu
    },
    data() {
      return {
        mode: 'horizontal',
        showDrawer: false,
        openDrawer: false
      };
    },
    mounted() {
      this.checkWidth();
      window.addEventListener('resize', this.checkWidth, false);
    },
    methods: {
      checkWidth() {
        const width = window.innerWidth;
        this.showDrawer = width < 900;
      }
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.checkWidth, false);
    }
  };
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../styles/mixin";

  .page-header {
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
    }

    &__nav {
      color: #fff;
      text-align: center;
    }

    /deep/ &__nl {
      color: #fff;
      font-size: 20px;

      &:hover, &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .menu-drawer__container {

    /deep/ {
      .menu-drawer .ivu-drawer-body {
        padding: 0;
        background-color: #515a6e;
      }
    }
  }
</style>
