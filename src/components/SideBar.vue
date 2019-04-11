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
			<li>
				<a class="smoothscroll" href="#about">
					<i class="iconfont ic-icon35"></i>个人介绍
				</a>
			</li>
			<li>
				<a class="smoothscroll" href="#resume">
					<i class="iconfont ic-file-text"></i>简历详情
				</a>
			</li>
			<li>
				<a class="smoothscroll" href="#portfolio">
					<i class="iconfont ic-gongzuojingyan"></i>作品集
				</a>
			</li>
			<li>
				<a class="smoothscroll" href="#contact">
					<i class="iconfont ic-email1"></i>联系方式
				</a>
			</li>
		</ul>
		<!-- end #nav -->
	</nav>
</template>

<script>
	export default {
		props: {
			avatar:{
                type: String,
				default: require("@/assets/images/default.jpg")
            }
        }
	};
</script>

<style scoped lang="less">
	// 引入通用配置文件
	@import "../assets/less/color";
	.logo {
		width: 100px;
		height: 100px;
		margin: 25px auto;
		img {
			border-radius: 50%;
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
			// height: 42px;
			display: block;
			padding-left: 20px;
			border-left: 2px solid transparent;

			&.current {
				background: #272727;
				border-left: 2px solid @base_color;

				a {
					color: @base_color;

					&:hover {
						color: @base_color;
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
		background: #000;
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
			border-top: 7px solid @base_color;
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
				-webkit-transform: rotate(45deg);
				-ms-transform: rotate(45deg);
				transform: rotate(45deg);
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
				-webkit-transform: rotate(-405deg);
				-ms-transform: rotate(-405deg);
				transform: rotate(-405deg);
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
