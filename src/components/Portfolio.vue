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
					<li class="filter" data-filter=".development">开发</li>
					<li class="filter" data-filter=".design">设计</li>
				</ul>
			</div>
			<div class="row">
				<div class="work-inner">
					<div v-for="(item, index) in work" :key="index" :class="'four columns mix ' + item.tag">
						<div class="item wow fadeInUp" :data-wow-delay="item.wowDelay + 's'">
							<a :href="item.url" target="_blank">
								<img :src="item.imgUrl" :alt="item.title">
								<div class="portfolio-caption">
									<h4>{{ item.title }}</h4>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<a href="https://xlong.zcool.com.cn" target="_blank" class="more-work wow fadeInUp">
					更多作品<span class="iconfont ic-arrowrightl arrow"></span>
				</a>
			</div>			
		</div>
	</section>
</template>

<script>	
	export default {
		data() {
			return {
				work: [
					{
						tag: 'development',
						wowDelay: '0.3',
						url: 'https://github.com/xLong1029/xlong-website-cms',
						imgUrl: require("@/assets/picture/8.jpg"),
						title: '企业一站式解决方案'
					},
					{
						tag: 'design',
						wowDelay: '0.1',
						url: 'https://mp.weixin.qq.com/s/RUEZG9__2FW8u9-v2Sgt2g',
						imgUrl: require("@/assets/picture/7.jpg"),
						title: '2018年度字体设计'
					},
					{
						tag: 'development',
						wowDelay: '0.2',
						url: 'https://www.zhujia100.com',
						imgUrl: require("@/assets/picture/1.jpg"),
						title: '建筑综合信息服务平台——筑加网'
					},
					{
						tag: 'development design',
						wowDelay: '0.4',
						url: 'http://www.geese.com.cn/',
						imgUrl: require("@/assets/picture/2.jpg"),
						title: '纺织行业企业信息化解决方案'
					},
					{
						tag: 'development',
						wowDelay: '0.5',
						url: 'https://xmxx.zhujia100.com/#/ProjectNews',
						imgUrl: require("@/assets/picture/9.jpg"),
						title: '项目申报资讯平台'
					},
					{
						tag: 'design',
						wowDelay: '0.7',
						url: 'https://www.zcool.com.cn/work/ZMTg0NTY0ODA=.html',
						imgUrl: require("@/assets/picture/3.jpg"),
						title: '人工智能分析计算平台——天知心，大数智'
					}
					
				]
			}
		}
	};
</script>

<style scoped lang="less">
	// 引入通用配置文件
	@import "../assets/less/color";
	#portfolio {
		background: url(../assets/images/cover.jpg) no-repeat fixed center center / cover;
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
					margin-top: 150px;
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

	.more-work{
		display: block;
		position: relative;
		color: #EBEEEE;
		border: 1px solid #666;
		margin-bottom: 60px;
		font-family: "Open Sans", sans-serif;
		font-size: 18px;
		letter-spacing: 3px;
		margin: 0px auto;
		margin-top: 50px;
		max-width: 200px;
		padding: 10px;
		text-align: center;
		transition: all 0.3s;
		-webkit-transition: all 0.3s;
		-moz-transition: all 0.3s;
		-ms-transition: all 0.3s;
		-o-transition: all 0.3s;

		&:hover{
			border-color: @base_color; 
		}

		.arrow{
			position: absolute;
			right: 10px;
		}
	}

	@media only screen and (max-width: 480px) {
		.more-work{
			font-size: 14px;
			width: 150px;
		}
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

