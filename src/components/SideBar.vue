<template>
	<nav id="left-nav">
		<div class="logo">
			<img :src="avatar">
		</div>
	
		<div class="menu" id="menu">
			<span class="menu-global menu-top"></span>
			<span class="menu-global menu-middle"></span>
			<span class="menu-global menu-bottom"></span>
		</div>
	
		<ul id="nav" class="nav">
			<li class="current">
				<a class="smoothscroll" href="#home">
					<i class="fa fa-home fa-fw"></i>Home
				</a>
			</li>
			<li>
				<a class="smoothscroll" href="#about">
					<i class="fa fa-user fa-fw"></i>About Me
				</a>
			</li>
			<li>
				<a class="smoothscroll" href="#resume">
					<i class="fa fa-file-text fa-fw"></i>Resume
				</a>
			</li>
			<li>
				<a class="smoothscroll" href="#portfolio">
					<i class="fa fa-briefcase fa-fw"></i>Portfolio
				</a>
			</li>
			<li>
				<a class="smoothscroll" href="#testimonials">
					<i class="fa fa-comments fa-fw"></i>Testimonials
				</a>
			</li>
			<li>
				<a class="smoothscroll" href="#contact">
					<i class="fa fa-envelope fa-fw"></i>Contact
				</a>
			</li>
		</ul>
		<!-- end #nav -->
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				avatar: require("@/assets/images/avatar.jpg")
			};
		}
	};
</script>

<style scoped lang="less">
	.logo {
		width: 100px;
		height: 100px;
		margin: 25px auto;
		img {
			border: 5px solid #b1b2b4;
			border-radius: 50%;
			box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.2);
			height: auto;
			width: 100%;
		}
	}
	
	ul#nav {
		min-height: 48px;
		width: auto;
		/* center align the menu */
		text-align: left;

		li {
			position: relative;
			list-style: none;
			height: 42px;
			display: block;
			padding-left: 20px;
			border-left: 2px solid transparent;

			&.current {
				background: #272727;
				border-left: 2px solid #ed5565;

				a {
					color: #ed5565;

					&:hover {
						color: #ed5565;
					}
				}
			}

			i {
				padding-right: 25px;
			}

			a {
				/* 8px padding top + 8px padding bottom + 32px line-height = 48px */
				display: inline-block;
				padding: 6px 13px;
				line-height: 32px;
				text-decoration: none;
				text-align: left;
				text-transform: uppercase;
				color: #fff;
				font-weight: 400;
				-webkit-transition: all .2s ease-in-out;
				-moz-transition: all .2s ease-in-out;
				-o-transition: all .2s ease-in-out;
				-ms-transition: all .2s ease-in-out;
				transition: all .2s ease-in-out;

				&:active {
					background-color: transparent !important;
				}
			}
		}
	}
	
	#left-nav {
		background: #333;
		width: 200px;
		height: 100%;
		position: fixed;
		left: -210px;
		top: 0;
		z-index: 99;
		transition: all .3s;
		-webkit-transition: all .3s;
		-moz-transition: all .3s;
		-ms-transition: all .3s;
		-o-transition: all .3s;
	}
	
	.show-menu {
		padding-left: 200px;
	}
	
	body.show-menu #left-nav {
		left: 0;
		top: 0;
		z-index: 99;
	}
	
	.menu {
		cursor: pointer;
		margin: 0 auto;
		padding-left: 1.25em;
		position: absolute;
		top: 15px;
		left: 225px;
		width: 40px;
		height: 40px;

		&-global {
			-webkit-backface-visibility: hidden;
			backface-visibility: hidden;
			position: absolute;
			left: 0;
			border-top: 7px solid white;
			width: 100%;
			-webkit-transition: 0.25s;
			transition: 0.25s;
		}

		&-top {
			top: 0;

			&-click {
				-webkit-backface-visibility: hidden;
				backface-visibility: hidden;
				top: 15px;
				-webkit-transform: rotate(50deg);
				-ms-transform: rotate(50deg);
				transform: rotate(50deg);
				-webkit-transition: 0.25s 0.2s;
				transition: 0.25s 0.2s;
			}
		}

		&-middle {
			top: 14px;

			&-click {
				opacity: 0;
			}
		}

		&-bottom {
			top: 28px;

			&-click {
				-webkit-backface-visibility: hidden;
				backface-visibility: hidden;
				top: 15px;
				-webkit-transform: rotate(-410deg);
				-ms-transform: rotate(-410deg);
				transform: rotate(-410deg);
				-webkit-transition: 0.25s 0.2s;
				transition: 0.25s 0.2s;
			}
		}
	}
	
	.close-menu {
		left: 205px;
		width: 30px;
		top: 10px;
		opacity: .8;

		&:hover {
			opacity: 1;
		}
	}
</style>
