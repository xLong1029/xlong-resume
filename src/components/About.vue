<template>
	<section id="about">
		<div class="row bio-container">
			<div class="twelve columns bio-inner">
				<div class="six columns bio-left">
					<div class="pp-container">
						<img class="profile-pic wow zoomIn" :src="avatar">
						<h2>罗永梅</h2>
						<p>前端开发工程师 / 设计爱好者</p>
					</div>
					<!-- Social Section -->
					<div id="social">
						<div class="row social-container">
							<ul class="social">
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
						</div>
					</div>
					<!-- Social End -->
				</div>
	
				<div class="six columns main-col wow fadeIn">
					<div class="arrow-left"></div>
	
					<p>
						Hi，我是罗永梅，网络别名：xLong / xLong1029。
					</p>
					<p>
						我是一个Web前端开发工程师，业余爱好字体设计。我学习能力强，喜欢挑战，工作负责，善于分析总结，善于沟通，对新技术有前瞻性。
					</p>
					<p>
						我精通HTML、CSS、JavasScript/jQuery等前端技术；
					</p>
					<p>
						熟悉但不限于Bootstrap、Vue.、Egg等前端框架；
					</p>
					<p>
						擅长使用Element、Vant、iView、Mint等UI框架；
					</p>
					<p>
						熟悉MVVM、MVC模式开发，倾向于前后端分离的开发模式；
					</p>
					<p>
						熟练运用Svn、Git进行版本控制；
					</p>
					<p>
						了解Sql Server、SQLite等数据库，了解微信小程序开发；
					</p>
	
					<div class="row">
						<div class="six columns download">
							<a href="#contact" class="button">
								<i class="iconfont ic-phone"></i>与我联系
							</a>
							<a href="https://github.com/xLong1029/xlong-resume/blob/gh-pages/file/罗永梅_简历（2019）.doc?raw=true" class="button" target="_blank">
								<i class="iconfont ic-download-f"></i>下载简历
							</a>
						</div>
						<!-- Download Buttons -->
					</div>
				</div>
				<!-- end .main-col -->
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			avatar: {
                type: String,
				default: require("@/assets/images/default.jpg")
			}
        }
	};
</script>

<style lang="less">
	// 引入通用配置文件
	@import "../assets/less/color";
	
	#about {
		background: url(../assets/images/cover.jpg) no-repeat fixed center center / cover;
		overflow: hidden;

		a {
			color: #fff;
			&:visited {
				color: #fff;
			}
		}

		h1 {
			color: #fff;
			border-color: #dedede;
			margin-bottom: 60px;
			width: 400px;
			&:hover {
				border-color: #fff;
			}
		}

		h2 {
			font: 22px/30px 'Open Sans', sans-serif;
			font-weight: 700;
			color: #fff;
			margin-bottom: 12px;
			text-align: center;
		}

		h3 {
			border-bottom: 3px solid #fff;
			color: #fff;
			font: 400 18px/24px "Raleway", sans-serif;
			margin-bottom: 15px;
			padding-bottom: 10px;
			text-align: center;
		}

		p {
			// text-align: center;
			line-height: 30px;
			color: #fff;
			margin-bottom: 15px;
		}

		.profile-pic {
			border-radius: 100%;
			box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.2);
			height: auto;
			margin: 15px auto;
			position: relative;
			width: 100%;
			z-index: 2;
		}

		.download {
			margin-top: 25px;
			width: 90%;
			float: none;

			.button {
				margin-top: 6px;
				background: @base_color;

				&:hover {
					background: #fff;
					color: #2B2B2B;
				}
			}
		}

		.button {
			background: none repeat scroll 0 0 @base_color;
			display: inline;
			margin-right: 10px;
			margin-top: 6px;

			i {
				margin-right: 15px;
				font-size: 20px;
			}
		}

		.bio-container {
			width: 100%;
			max-width: 100%;
			padding: 0;
		}

		.bio-inner {
			padding: 0;
		}

		.bio-left {
			background: rgba(0, 0, 0, 0.2);
			height: 580px;
			padding: 60px 30px;
		}

		.main-col {
			background: none repeat scroll 0 0 rgba(0, 0, 0, 0.7);
			height: 580px;
			padding: 50px;
		}
	}
	
	.pp-container {
		display: block;
		margin: 5px auto;
		padding: 10px;
		width: 225px;
	}
	
	.arrow-left {
		border-bottom: 25px solid transparent;
		border-right: 25px solid rgba(0, 0, 0, 0.7);
		border-top: 25px solid transparent;
		height: 0;
		left: -25px;
		position: absolute;
		top: 40%;
		width: 0;
		z-index: 10;
	}
	
	#social {
		// background: rgba(0, 0, 0, 1);
		// position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		display: block;
		z-index: 2;
	}
	
	.social-container {
		display: block;
		vertical-align: middle;
		margin: 0 auto;
		width: 85%;
		text-align: center;
		.social {
			margin: 0;
			padding: 0;
			font-size: 30px;
			text-shadow: 0px 1px 2px rgba(0, 0, 0, .8);
			li {
				display: inline-block;
				margin: 0 15px;
				padding: 0;
				a {
					color: #fff;
					&:hover {
						color: @base_color;
					}
				}
			}
		}
	}
</style>

