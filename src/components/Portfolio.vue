<template>
	<section id="portfolio">
		<div class="work-area">
			<div class="row">
				<div class="twelve columns">
					<h1 class="section-title wow fadeInDown">作品集 / Portfolio</h1>
				</div>
			</div>
			<div class="row">
				<ul class="work">
					<li class="filter" data-filter="all">全部</li>
					<li class="filter" data-filter=".development">WEB开发</li>
					<li class="filter" data-filter=".webdesign">网页设计</li>
					<li class="filter" data-filter=".photography">教程</li>
				</ul>
			</div>
			<div class="row">
				<div class="work-inner">	
					<!-- START SINGLE WORK DESIGN AREA -->
					<div class="four columns mix webdesign">
						<div class="item wow fadeInUp" data-wow-delay="0.2s">
							<a href="assets/images/portfolio/1.jpg">
								<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554961965115&di=4e97d531fa8cd47b58753ee44165eef8&imgtype=0&src=http%3A%2F%2Fpic41.nipic.com%2F20140601%2F18681759_143805185000_2.jpg" alt="">
								<div class="portfolio-caption">
									<h4>web design</h4>
								</div>
							</a>
						</div>
					</div>
					<!-- END SINGLE WORK DESIGN AREA -->
					<!-- START SINGLE WORK DESIGN AREA -->
					<div class="four columns mix development">
						<div class="item wow fadeInUp" data-wow-delay="0.4s">
							<a href="assets/images/portfolio/2.jpg">
								<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554961965115&di=862a06c4ef33c50b07d0a0a807729863&imgtype=0&src=http%3A%2F%2Fwww.wallcoo.com%2Fhuman%2FSydney%2520Australia%2Fwallpapers%2F1024x768%2FAustralia_Sydney_photo_picture_Choices.jpg"
								    alt="">
								<div class="portfolio-caption">
									<h4>web development</h4>
								</div>
							</a>
						</div>
					</div>
					<!-- END SINGLE WORK DESIGN AREA -->
					<!-- START SINGLE WORK DESIGN AREA -->
					<div class="four columns mix web">
						<div class="item wow fadeInUp" data-wow-delay="0.6s">
							<a href="assets/images/portfolio/3.jpg">
								<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554961965115&di=44313e5f067484516a698ea9324b1c64&imgtype=0&src=http%3A%2F%2Fpic5.nipic.com%2F20100120%2F3641224_180653657501_2.jpg" alt="">
								<div class="portfolio-caption">
									<h4>web design</h4>
								</div>
							</a>
						</div>
					</div>
					<!-- END SINGLE WORK DESIGN AREA -->
					<!-- START SINGLE WORK DESIGN AREA -->
					<div class="four columns mix development photography">
						<div class="item wow fadeInUp" data-wow-delay="0.8s">
							<a href="assets/images/portfolio/4.jpg">
								<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554961965114&di=2eec4b19d7f955cb800b048ea0b3635d&imgtype=0&src=http%3A%2F%2Fpic3.40017.cn%2Fscenery%2Fdestination%2F2015%2F05%2F12%2F15%2F5u12Wh.jpg" alt="">
								<div class="portfolio-caption">
									<h4>web design</h4>
								</div>
							</a>
						</div>
					</div>
					<!-- END SINGLE WORK DESIGN AREA -->
					<!-- START SINGLE WORK DESIGN AREA -->
					<div class="four columns mix typography web">
						<div class="item wow fadeInUp" data-wow-delay="1s">
							<a href="assets/images/portfolio/5.jpg">
								<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554961965115&di=9112dd070d0a4e1b029a0b84d3cc045e&imgtype=0&src=http%3A%2F%2Fpic67.nipic.com%2Ffile%2F20150515%2F9448607_221818217002_2.jpg" alt="">
								<div class="portfolio-caption">
									<h4>web design</h4>
								</div>
							</a>
						</div>
					</div>
					<!-- END SINGLE WORK DESIGN AREA -->
					<!-- START SINGLE WORK DESIGN AREA -->
					<div class="four columns mix webdesign development photography">
						<div class="item wow fadeInUp" data-wow-delay="1.2s">
							<a href="assets/images/portfolio/6.jpg">
								<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554961965115&di=38fac7b6d1e75f357f6c967b6840e935&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F369%2F480%2F749%2Ffb6e6b1f88154a838a9197531ac1deb9.jpg" alt="">
								<div class="portfolio-caption">
									<h4>web design</h4>
								</div>
							</a>
						</div>
					</div>
					<!-- END SINGLE WORK DESIGN AREA -->
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped lang="less">
	// 引入通用配置文件
	@import "../assets/less/color";
	#portfolio {
		background: url(../assets/images/1.jpg) no-repeat fixed center center / cover;
		h1 {
			letter-spacing: 1px;
			margin-bottom: 60px;
			color: #fff;
			border-color: #fff;
			&:hover {
				border-color: @base_color;
			}
		}
	}
	
	.work-area {
		background: rgba(0, 0, 0, 0.2);
		padding-top: 90px;
		padding-bottom: 60px;
		.item {
			margin-top: 30px;
			position: relative;
			&:hover .portfolio-caption {
				opacity: 1;
				-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
				filter: alpha(opacity=100);
				-webkit-transition: all 0.4s ease-out;
				transition: all 0.4s ease-out;
				h4 {
					margin-top: 100px;
					-webkit-transition: .3s;
					transition: .3s;
				}
			}
			img {
				width: 100%;
				z-index: 9999;
				display: block;
			}
		}
	}
	
	.work-inner .mix {
		display: none;
	}
	
	ul.work {
		padding: 0;
		list-style: none;
		margin-left: 8px;
		text-align: center;
		li {
			display: inline-block;
			padding: 8px 12px;
			margin: 0 8px;
			text-transform: uppercase;
			font-size: 14px;
			font-weight: 400;
			color: #fff;
			border: none;
			cursor: pointer;
			&:hover,
			&.active {
				color: @base_color;
				border: none;
			}
		}
	}
	
	.portfolio-caption {
		color: #333333;
		position: absolute;
		left: 0;
		top: 0;
		text-align: center;
		height: 100%;
		width: 100%;
		background: rgba(255, 255, 255, .8);
		opacity: 0;
		-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
		filter: alpha(opacity=0);
		-webkit-transition: all 0.4s ease-out;
		transition: all 0.4s ease-out;
		h4 {
			font-size: 12px;
			text-transform: uppercase;
			font-weight: 900;
			color: #333;
			-webkit-transition: .3s;
			transition: .3s;
			border: 1px solid #000;
			padding: 10px 10px;
			display: inline-block;
		}
	}
</style>

