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
						<li class="timeline-event">
							<label class="timeline-event-icon"></label>
							<div class="timeline-event-copy">
								<p class="timeline-event-thumbnail">January 2013 - Present</p>
								<h3>Fantasy IT Kingdom</h3>
								<h4>Lead Developer</h4>
								<p>Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. Vestibulum gravida nulla nec justo congue, vitae sodales massa
									ullamcorper.
								</p>
							</div>
						</li>
						<li class="timeline-event">
							<label class="timeline-event-icon"></label>
							<div class="timeline-event-copy">
								<p class="timeline-event-thumbnail">January 2006 - December 208</p>
								<h3>Awesome Softwares</h3>
								<h4>UI/UX Engineer</h4>
								<p>Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. Vestibulum gravida nulla nec justo congue, vitae sodales massa
									ullamcorper.
								</p>
							</div>
						</li>
						<li class="timeline-event">
							<label class="timeline-event-icon"></label>
							<div class="timeline-event-copy">
								<p class="timeline-event-thumbnail">January 2000 - December 2006</p>
								<h3>Amazing Developers</h3>
								<h4>Front-End Developer</h4>
								<p>Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. Vestibulum gravida nulla nec justo congue, vitae sodales massa
									ullamcorper.
								</p>
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
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
				</p>
	
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
						<!-- <li>
							<span class="bar-expand wordpress wow fadeInLeft"></span>
							<em>Wordpress</em>
						</li> -->
					</ul>
				</div>
				<!-- end skill-bars -->
			</div>
			<!-- main-col end -->
		</div>
		<!-- End skills -->
	
		<!-- Awards -->
		<div class="row awards">
			<div class="three columns header-col">
				<h2>
					<span>Recognition</span>
				</h2>
			</div>
	
			<div class="nine columns main-col">
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
				</p>
	
				<div class="award-list">
					<ul>
						<li class="wow fadeIn">
							<span>
							<i class="fa fa-trophy fa-5x pull-left fa-fw"></i>
							</span>
							<h3>App Development Contest</h3>
							<h5>Winner</h5>
							<h4>Dhaka, Bangladesh</h4>
						</li>
						<li class="wow fadeIn">
							<span>
							<i class="fa fa-trophy fa-5x pull-left fa-fw"></i>
							</span>
							<h3>Best Front-End Developers Award</h3>
							<h5>Top Front-End Developer</h5>
							<h4>San Fransisco, USA</h4>
						</li>
						<li class="wow fadeIn">
							<span>
							<i class="fa fa-trophy fa-5x pull-left fa-fw"></i>
							</span>
							<h3>Awesome UI/UX Designers Award</h3>
							<h5>Best UI/UX Designer</h5>
							<h4>New York, USA</h4>
						</li>
						<li class="wow fadeIn">
							<span>
							<i class="fa fa-microphone fa-5x pull-left fa-fw"></i>
							</span>
							<h3>UX Conference</h3>
							<h5>Speaker</h5>
							<h4>Dhaka, Bangladesh</h4>
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
	
	.education,
	.work,
	.skill,
	.awards {
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
			font-family: 'Raleway', sans-serif;
		}
		strong {
			font-weight: 700;
		}
		p:not(.timeline-event-thumbnail) {
			font-size: 14px;
			font-weight: 300;
			line-height: 24px;
			padding-bottom: 20px;
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
	
	.wordpress {
		background: #34495e;
		width: 50%;
		-moz-animation: wordpress 2s ease;
		-webkit-animation: wordpress 2s ease;
	}
	
	.css {		
		background: #56AD48;
		width: 95%;
		-moz-animation: css 2s ease;
		-webkit-animation: css 2s ease;
	}
	
	.html5 {
		background: #e74c3c;
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
	
	@-moz-keyframes wordpress {
		0% {
			width: 0px;
		}
		100% {
			width: 50%;
		}
	}

	@-webkit-keyframes wordpress {
		0% {
			width: 0px;
		}
		100% {
			width: 50%;
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
	.award-list ul li {
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
</style>
