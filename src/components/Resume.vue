<template>
	<section id="resume">
		<h1 class="section-title wow fadeInDown">简历详情 / Resume</h1>
		<!-- Work -->
		<div class="row work">
			<div class="three columns header-col">
				<h2>
					<span>工作经验</span>
				</h2>
			</div>
	
			<div class="nine columns main-col">
				<div class="work-timeline">
					<ul class="timeline">
						<li v-for="(item, index) in experience" :key="index" class="timeline-event">
							<label class="timeline-event-icon"></label>
							<div class="timeline-event-copy">
								<p class="timeline-event-thumbnail">{{ item.workTime }}</p>
								<h3>{{ item.company }}</h3>
								<h4>{{ item.job }}</h4>
								<p v-for="(vo, i) in item.jobContent" :key="i">{{ (i + 1) +'.'+ vo }}</p>
							</div>
						</li>
					</ul>
				</div>
				<!-- Work Timeline End -->
			</div>
			<!-- main-col end -->
		</div>
		<!-- End Work -->
	
		<!-- Skills -->
		<div class="row skill">
			<div class="three columns header-col">
				<h2>
					<span>技能熟练度</span>
				</h2>
			</div>
	
			<div class="nine columns main-col">
				<p>能独立完成一个小型项目开发，包括但不限于PC页面、WebApp、企业CMS等开发。</p>
				<div class="bars">
					<ul class="skills">
						<li>
							<span class="bar-expand css wow fadeInLeft"></span>
							<em>CSS</em>
						</li>
						<li>
							<span class="bar-expand html5 wow fadeInLeft"></span>
							<em>HTML5</em>
						</li>
						<li>
							<span class="bar-expand jquery wow fadeInLeft"></span>
							<em>JavaScript / jQuery</em>
						</li>
						<li>
							<span class="bar-expand vuejs wow fadeInLeft"></span>
							<em>Vue</em>
						</li>
						<li>
							<span class="bar-expand eggjs wow fadeInLeft"></span>
							<em>Egg</em>
						</li>
						<li>
							<span class="bar-expand illustrator wow fadeInLeft"></span>
							<em>Illustrator</em>
						</li>
					</ul>
				</div>
				<!-- end skill-bars -->
			</div>
			<!-- main-col end -->
		</div>
		<!-- End skills -->

		<!-- Education -->
		<div class="row education">
			<div class="three columns header-col">
				<h2>
					<span>教育</span>
				</h2>
			</div>
	
			<div class="nine columns main-col">
				<p>
					2014年毕业于 国立华侨大学 计算机科学与技术（数字媒体技术方向） 本科专业
				</p>
			</div>
			<!-- main-col end -->
		</div>
	
		<!-- Awards -->
		<div class="row awards">
			<div class="three columns header-col">
				<h2>
					<span>其他</span>
				</h2>
			</div>
	
			<div class="nine columns main-col">	
				<div class="award-list">
					<ul>
						<li class="wow fadeIn">
							<span>
								<i class="iconfont ic-certificate pull-left"></i>
							</span>
							<h3>证书</h3>
							<h4>英语专业六级</h4>
							<h4>计算机助理工程师</h4>
						</li>
						<li class="wow fadeIn">
							<span>
								<i class="iconfont ic-bisai pull-left"></i>
							</span>
							<h3>赛事</h3>
							<h4>曾参与《乱入！Sonkwo形象补全计划 - 杉果吉祥物征集大赛》</h4>
							<h4>曾参与《逸想天开 － 天逸笔记本卡通形象设计大赛》</h4>
						</li>
						<li class="wow fadeIn">
							<span>
								<i class="iconfont ic-love pull-left"></i>
							</span>
							<h3>公益</h3>
							<h4>参与设计免费公益字体——站酷文艺体</h4>
						</li>
					</ul>
				</div>
				<!-- end awards list -->
			</div>
			<!-- main-col end -->
		</div>
		<!-- End skills -->
	</section>
</template>

<script>	
	export default {
		data() {
			return {
				experience: [
					{
						company: '广西华建信息科技股份公司',
						workTime: '2017/05 - 至今',
						job: 'Web前端开发工程师',
						jobContent: [
							'负责研发建筑材料智能选材平台（PC及Mobile端）、项目申报平台（爬取项目信息，仅供内部员工使用）',
							'自主创新：基于Egg + Vue + Webpack 开发多页面和单页面服务端客户端渲染的企业CMS系统，可用于企业网站，微信微网站的实现。前台页面可响应式匹配各种移动设备',
							'负责设计吉祥物和表情包'
						]
					},
					{
						company: '南宁云海风网络科技有限公司',
						workTime: '2016/07 - 2017/03',
						job: 'Web前端项目经理',
						jobContent: [
							'负责公司官网项目的开发和日常维护',
							'负责教授实习生web前端技术，并指导实习生如期完成公司安排的项目',
							'参与web课程研发和后期优化，完成教学相关文档编写工作'
						]
					},
					{
						company: '广西昇泰安电子商务发展有限公司',
						workTime: '2015/03 - 2016/06',
						job: 'web前端/GUI设计师',
						jobContent: [
							'负责公司门下各网站页面调优、维护工作、相关框架拓展开发',
							'参与app产品原型讨论和产品设计，负责APP开发及游戏宣传海报设计'
						]
					},
					{
						company: '福建康众畅想信息科技有限公司',
						workTime: '2014/02 - 2015/01',
						job: '开发部团队组长',
						jobContent: [
							'分配团队开发人员日常任务',
							'负责公司项目开发，包括但不限于企业站、商城、微信网页等项目',
							'独立构思制作H5场景应用模版',
							'负责网站设计和海报设计'
						]
					}
				]
			}
		}
	};
</script>

<style scoped lang="less">
	// 引入通用配置文件
	@import "../assets/less/color";
	
	#resume {
		background: #fff;
		overflow: hidden;
		padding-bottom: 72px;
		padding-top: 90px;
		a {
			color: @base_color;
			&:visited {
				color: @base_color;
			}
			&:hover,
			&:focus {
				color: #313131;
			}
		}
		h1 {
			color: #666;
			margin-bottom: 60px;
			letter-spacing: 1px;
			border-color: @base_color;
			width: 400px;
			&:hover {
				border-color: @assist_color;
			}
		}
		h2 {
			font: 700 18px/24px "Open Sans", sans-serif;
			letter-spacing: 1px;
			text-transform: uppercase;
			span {
				border-bottom: 3px solid @base_color;
				padding-bottom: 6px;
			}
		}
		h3 {
			font: 25px/30px "Open Sans", sans-serif;
			font-weight: 700;
			text-transform: uppercase;
			color: #666;
		}
		.header-col {
			padding-top: 9px;
		}
		.main-col {
			padding-right: 10%;
		}
		.info {
			font: 16px/24px "Raleway", serif;
			font-style: italic;
			color: #6e7881;
			margin-bottom: 18px;
			margin-top: 9px;
			span {
				margin-right: 5px;
				margin-left: 5px;
			}
		}
		.date {
			font: 15px/24px "opensans-regular", sans-serif;
			margin-top: 6px;
		}
	}
	
	.work,
	.skill,
	.education {
		margin-bottom: 48px;
		padding-bottom: 24px;
		border-bottom: 1px solid #e8e8e8;
	}
	
	// timeline
	.timeline {
		margin: 15px auto;
		position: relative;
		max-width: 100%;
		&:before {
			background: @base_color;
			content: '';
			margin-left: -1px;
			position: absolute;
			top: 0;
			left: 32px;
			width: 2px;
			height: 100%;
		}
	}
	
	.timeline-event {
		position: relative;
		&:hover {
			.timeline-event-icon {
				-moz-transform: rotate(-45deg);
				-ms-transform: rotate(-45deg);
				-webkit-transform: rotate(-45deg);
				transform: rotate(-45deg);
				background-color: #ffb039;
			}
			.timeline-event-thumbnail {
				-moz-box-shadow: inset 40em 0 0 0 #ffb039;
				-webkit-box-shadow: inset 40em 0 0 0 #ffb039;
				box-shadow: inset 40em 0 0 0 #ffb039;
			}
			h3 {
				color: #ffb039;
			}
		}
		h3 {
			transition: all .3s;
			-webkit-transition: all .3s;
			-moz-transition: all .3s;
			-ms-transition: all .3s;
			-o-transition: all .3s;
		}
	}
	
	.timeline-event-copy {
		left: 50px;
		padding: 32px 32px 0;
		position: relative;
		top: -32px;
		width: 80%;
		h3 {
			font-size: 28px;
		}
		h4 {
			font-size: 20px;
			margin-bottom: 15px;
		}
		strong {
			font-weight: 700;
		}
		p:not(.timeline-event-thumbnail) {
			font-size: 14px;
			line-height: 24px;
			margin-bottom: 10px;
		}
	}
	
	.timeline-event-icon {
		-moz-transition: -moz-transform 0.2s ease-in;
		-o-transition: -o-transform 0.2s ease-in;
		-webkit-transition: -webkit-transform 0.2s ease-in;
		transition: transform 0.2s ease-in;
		-moz-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
		background-color: black;
		outline: 10px solid white;
		display: block;
		margin: 8px 8px 8px -8px;
		position: absolute;
		top: 0;
		left: 32px;
		width: 16px;
		height: 16px;
	}
	
	.timeline-event-thumbnail {
		-moz-transition: box-shadow 0.5s ease-in 0.1s;
		-o-transition: box-shadow 0.5s ease-in 0.1s;
		-webkit-transition: box-shadow 0.5s ease-in;
		-webkit-transition-delay: 0.1s;
		transition: box-shadow 0.5s ease-in 0.1s;
		-moz-box-shadow: inset 0 0 0 0em @base_color;
		-webkit-box-shadow: inset 0 0 0 0em @base_color;
		box-shadow: inset 0 0 0 0em @base_color;
		background: none repeat scroll 0 0 #ffb039;
		box-shadow: 0 0 0 0 @base_color inset;
		color: #fff;
		display: inline-block;
		font-size: 14px;
		font-weight: bold;
		text-transform: uppercase;
		margin-bottom: 20px;
		padding: 8px 15px;
		transition: box-shadow 0.5s ease-in 0.1s;
	}
	
	// skill
	.bars {
		width: 95%;
		float: left;
		padding: 0;
		text-align: left;
		.skills {
			margin-top: 36px;
			list-style: none;
		}
		li {
			position: relative;
			margin-bottom: 60px;
			background: #bdc3c7;
			height: 42px;
			border-radius: 3px;
			overflow: hidden;
			em {
				color: #fff;
				font: 15px/42px "Open Sans", sans-serif;
				letter-spacing: 2px;
				padding-left: 20px;
				position: relative;
				// text-transform: uppercase;
			}
		}
	}
	
	.bar-expand {
		position: absolute;
		left: 0;
		top: 0;
		margin: 0;
		padding-right: 24px;
		background: #34495e;
		display: inline-block;
		height: 42px;
		line-height: 42px;
		border-radius: 3px 0 0 3px;
	}
	
	.vuejs {
		background: #41b8f0;
		width: 85%;
		-moz-animation: vuejs 2s ease;
		-webkit-animation: vuejs 2s ease;
	}
	
	.eggjs {
		background: #c089e2;
		width: 75%;
		-moz-animation: eggjs 2s ease;
		-webkit-animation: eggjs 2s ease;
	}
	
	.illustrator {
		background: #34495e;
		width: 80%;
		-moz-animation: illustrator 2s ease;
		-webkit-animation: illustrator 2s ease;
	}
	
	.css {		
		background: #56AD48;
		width: 95%;
		-moz-animation: css 2s ease;
		-webkit-animation: css 2s ease;
	}
	
	.html5 {
		background: #f26f3d;
		width: 95%;
		-moz-animation: html5 2s ease;
		-webkit-animation: html5 2s ease;
	}
	
	.jquery {
		background: #ffb039;
		width: 90%;
		-moz-animation: jquery 2s ease;
		-webkit-animation: jquery 2s ease;
	}
	
	@-moz-keyframes vuejs {
		0% {
			width: 0px;
		}
		100% {
			width: 85%;
		}
	}

	@-webkit-keyframes vuejs {
		0% {
			width: 0px;
		}
		100% {
			width: 85%;
		}
	}
	
	@-moz-keyframes eggjs {
		0% {
			width: 0px;
		}
		100% {
			width: 75%;
		}
	}

	@-webkit-keyframes eggjs {
		0% {
			width: 0px;
		}
		100% {
			width: 75%;
		}
	}
	
	@-moz-keyframes illustrator {
		0% {
			width: 0px;
		}
		100% {
			width: 80%;
		}
	}

	@-webkit-keyframes illustrator {
		0% {
			width: 0px;
		}
		100% {
			width: 80%;
		}
	}
	
	@-moz-keyframes css {
		0% {
			width: 0px;
		}
		100% {
			width: 95%;
		}
	}

	@-webkit-keyframes css {
		0% {
			width: 0px;
		}
		100% {
			width: 95%;
		}
	}
	
	@-moz-keyframes html5 {
		0% {
			width: 0px;
		}
		100% {
			width: 95%;
		}
	}

	@-webkit-keyframes html5 {
		0% {
			width: 0px;
		}
		100% {
			width: 95%;
		}
	}
	
	@-moz-keyframes jquery {
		0% {
			width: 0px;
		}
		100% {
			width: 90%;
		}
	}	
	
	@-webkit-keyframes jquery {
		0% {
			width: 0px;
		}
		100% {
			width: 90%;
		}
	}
	
	// award
	.award-list{
		ul li {
			margin-bottom: 30px;
			display: block;
			h3 {
				font-size: 18px !important;
				margin-bottom: 5px;
			}
			h4 {
				color: #666;
				font-size: 16px !important;
			}
			h5 {
				color: #888;
				font-family: "Raleway", sans-serif;
				font-size: 14px !important;
				line-height: 20px;
			}
		}

		.pull-left{
			display: inline;
			text-align: center;
			font-size: 5em;
			line-height: 85px;
			margin-right: 20px;
		}
	}
</style>
