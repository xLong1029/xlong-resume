<template>
	<footer>
		<div class="row">
			<div class="twelve columns">
				<ul class="social-links">
					<li>
						<a href="http://wpa.qq.com/msgrd?v=3&uin=381612175&site=qq&menu=yes">
							<i class="iconfont ic-qq"></i>
						</a>
					</li>
					<li>
						<a href="https://github.com/xLong1029" target="_blank">
							<i class="iconfont ic-githubb"></i>
						</a>
					</li>
					<li>
						<a href="http://xlong.zcool.com.cn" target="_blank">
							<i class="iconfont ic-zcool"></i>
						</a>
					</li>
					<li>
						<a href="https://i.ui.cn/ucenter/358591.html" target="_blank">
							<i class="iconfont ic-uicn"></i>
						</a>
					</li>
				</ul>
	
				<ul class="copyright">
					<li>xLong &copy; Copyright 2019, All Rights Reserved</li>
				</ul>
			</div>
	
			<div id="go-top">
				<a class="smoothscroll" title="Back to Top" href="#about">
					<i class="iconfont ic-arrowup"></i>
				</a>
			</div>
		</div>
	</footer>
</template>

<style scoped lang="less">
	// 引入通用配置文件
	@import "../assets/less/color";
	footer {
		padding-top: 25px;
		margin-bottom: 48px;
		color: #303030;
		font-size: 14px;
		text-align: center;
		position: relative;

		a{
			color: #525252;
			&:hover {
				color: @base_color;
			}
		}

		.copyright {
			margin: 0;
			padding: 0;

			li {
				display: inline-block;
				margin: 0;
				padding: 0;
				line-height: 24px;

				&:before {
					content: "\2022";
					padding-left: 10px;
					padding-right: 10px;
					color: #095153;
				}

				&:first-child:before {
					display: none;
				}
			}
		}

		.social-links {
			margin: 18px 0 30px 0;
			padding: 0;
			font-size: 30px;

			li {
				display: inline-block;
				margin: 0;
				padding: 0;
				margin-left: 42px;
				color: #F06000;

				&:first-child {
					margin-left: 0;
				}
			}
		}
	}
	
	.ie footer .copyright li {
		display: inline;
	}
	
	
	/* Go To Top Button */
	
	#go-top {
		position: absolute;
		top: -30px;
		left: 50%;
		margin-left: -30px;

		a {
			text-decoration: none;
			border: 0 none;
			display: block;
			width: 60px;
			height: 60px;
			background-color: #525252;
			-webkit-transition: all 0.2s ease-in-out;
			-moz-transition: all 0.2s ease-in-out;
			-o-transition: all 0.2s ease-in-out;
			-ms-transition: all 0.2s ease-in-out;
			transition: all 0.2s ease-in-out;
			color: #fff;
			font-size: 24px;
			line-height: 60px;
			border-radius: 100%;

			&:hover {
				background-color: @base_color;
			}
		}
	}
</style>
