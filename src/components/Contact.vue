<template>
	<section id="contact">
		<div class="row section-head">
			<div class="twelve columns">
				<h1 class="section-title wow fadeInDown">联系方式 / Contact</h1>
				<p class="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
			</div>
		</div>
	</section>
</template>

<style scoped lang="less">
	// 引入通用配置文件
	@import "../assets/less/color";
	#contact {
		background: #191919;
		padding-top: 60px;
		color: #888;
	}
	
	#contact .section-head {
		margin-bottom: 30px;
	}
	
	#contact a,
	#contact a:visited {
		color: #11ABB0;
	}
	
	#contact h1 {
		color: #EBEEEE;
		border-color: #666;
		margin-bottom: 50px;
	}
	
	#contact h1:hover {
		border-color: @base_color
	}
	
	#contact h4 {
		font: 16px/24px 'Open Sans', sans-serif;
		font-weight: 700;
		color: #EBEEEE;
		margin-bottom: 6px;
	}
	
	#contact p.lead {
		font: 18px/36px 'Open Sans', sans-serif;
		font-weight: 300;
		padding-right: 3%;
		text-align: center;
		padding: 10px 10%;
	}
	
	#contact .header-col {
		padding-top: 6px;
	}
</style>

