<template>
	<section id="contact">
		<div class="row section-head">
			<div class="twelve columns">
				<h1 class="section-title wow fadeInDown">联系方式 / Contact</h1>
			</div>
			<div class="three columns contact-details">
				<span class="iconfont ic-map"></span>
				<p>广西壮族自治区 南宁市 西乡塘区 衡阳路 西一里</p>
			</div>
			<div class="three columns contact-details">
				<span class="iconfont ic-phone1"></span>
				<p>18376686974</p>
			</div>
			<div class="three columns contact-details">
				<span class="iconfont ic-email"></span>
				<p>381612175@qq.com</p>
			</div>
			<div class="three columns contact-details" style="text-align: center;">
				<img class="qrcode" :src="qrcode"/>
				<div>扫一扫 关注我</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			qrcode: {
                type: String,
				default: require("@/assets/images/default.jpg")
			}
        }
	};
</script>

<style scoped lang="less">
	// 引入通用配置文件
	@import "../assets/less/color";
	#contact {
		background: #191919;
		padding-top: 60px;
		padding-bottom: 30px;
		color: #fff;

		.section-head {
			margin-bottom: 30px;
		}

		h1 {
			color: #EBEEEE;
			border-color: #666;
			margin-bottom: 60px;

			&:hover {
				border-color: @base_color
			}
		}

		h2{
			color: #fff;
		}

		p{
			font-size: 16px;
			color: #ddd;
			margin-top: 20px;
		}
	}

	.contact-details {
		margin-top: 40px;

		span {
			font-size: 20px;
			margin-bottom: 10px;
		}

		h2 {
			font-size: 12px;
			font-weight: 900;
		}
	}

	.qrcode{}
</style>

