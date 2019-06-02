<template>
  <div ref="wrapper" class="cursor-wrapper">
	<div ref="outer" class="custom-cursor custom-cursor__outer"></div>
	<div ref="inner" class="custom-cursor custom-cursor__inner"></div>
  </div>
</template>

<script>
  import TweenMax from 'gsap/TweenMax';

  export default {
    name: 'CustomCursor',
    mounted() {
      this.initCursor();
    },
    methods: {
      initCursor() {
        let outerCursor = document.querySelector('.custom-cursor__outer');
        let innerCursor = document.querySelector('.custom-cursor__inner');
        let outerCursorBox = outerCursor.getBoundingClientRect();
        let outerCursorSpeed = 0;
        let clientX = -100;
        let clientY = -100;
        let isStuck = false;
        let showCursor = false;

        const unveilCursor = (e) => {
          clientX = e.clientX;
          clientY = e.clientY;
          TweenMax.set(innerCursor, {
            x: clientX,
            y: clientY
          });
          TweenMax.set(outerCursor, {
            x: clientX - outerCursorBox.width / 2,
            y: clientY - outerCursorBox.height / 2
          });
          setTimeout(() => {
            outerCursorSpeed = 0.2;
          }, 100);
          showCursor = true;
        };
        document.addEventListener('mousemove', unveilCursor);

        const render = () => {
          TweenMax.set(innerCursor, {
            x: clientX,
            y: clientY
          });
          if (!isStuck) {
            TweenMax.to(outerCursor, outerCursorSpeed, {
              x: clientX - outerCursorBox.width / 2,
              y: clientY - outerCursorBox.height / 2
            });
          }
          if (showCursor) {
            document.removeEventListener('mousemove', unveilCursor);
          }
          requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .cursor-wrapper {
	position: fixed;
	opacity: 1;
	width: 100px;
	height: 100px;
	left: -50px;
	top: -50px;
	transform: translate(-100%, -100%);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1600000;
	pointer-events: none;

	&.has-blend-mode {
	  mix-blend-mode: exclusion;
	}
  }

  // Blend mode fix for Microsoft Edge
  @supports (-ms-ime-align: auto) {
	.cursor-wrapper {
	  &.has-blend-mode.is-outside {
		.custom-cursor {
		  &__outer {
			border-color: black;
		  }

		  &__inner {
			&:before,
			&:after {
			  background: black;
			}
		  }
		}
	  }
	}
  }

  .custom-cursor {
	position: fixed;
	left: 0;
	top: 0;
	pointer-events: none;
	border-radius: 50%;

	&__outer {
	  width: 30px;
	  height: 30px;
	  border: 1px solid white;
	  z-index: 12000;
	  opacity: 0.2;
	}

	&__inner {
	  width: 5px;
	  height: 5px;
	  left: -2.5px;
	  top: -2.5px;
	  z-index: 11000;
	  background: white;

	  &:before,
	  &:after {
		content: "";
		position: absolute;
		width: 40%;
		height: 1px;
		background: white;
		transition: transform 0.1s linear;
	  }

	  &:before {
		left: 50%;
		top: 50%;
		transform: translateX(-50%);
	  }

	  &:after {
		left: 50%;
		top: 50%;
		transform: translateX(-50%) rotate(-90deg);
	  }

	  &.is-closing:after {
		transform: translateX(-50%) rotate(0deg);
	  }
	}
  }
</style>
