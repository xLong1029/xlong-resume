<template>
	<div id="app" class="wrapper">
		<!-- Loading -->
		<Loading />
		<!-- 侧边栏 -->
		<SideBar />
		<!-- 个人介绍 -->
		<About />
		<!-- 简历内容 -->
		<Resume />
		<!-- 个人作品集 -->
		<Portfolio />
		<!-- 联系方式 -->
		<Contact />
		<!-- 底部 -->
		<Footer />
	</div>
</template>

<script>
	// 组件
	import Loading from "@/components/Loading";
	import SideBar from "@/components/SideBar";
	import About from "@/components/About";
	import Resume from "@/components/Resume";
	import Portfolio from "@/components/Portfolio";
	import Contact from "@/components/Contact";
	import Footer from "@/components/Footer";
	
	export default {
		name: "home",
		components: {
			Loading,
			SideBar,
			About,
			Resume,
			Portfolio,
			Contact,
			Footer
		},
		data() {
			return {}
		},
		created() {
			this.init();
		},
		methods: {
			init() {}
		}
	};
</script>

<style lang="less">
	body {
		background: #0f0f0f;
		overflow-y: hidden;
		-webkit-transition: all .3s;
		-moz-transition: all .3s;
		-ms-transition: all .3s;
		-o-transition: all .3s;
	}
	
	.section-title {
		border: 2px solid;
		font-family: "Open Sans", sans-serif;
		font-size: 28px;
		font-weight: 700;
		letter-spacing: 3px;
		line-height: 36px;
		margin: 0 auto;
		max-width: 420px;
		min-width: 250px;
		padding: 20px;
		text-align: center;
		text-transform: uppercase;
		transition: all .3s;
		-webkit-transition: all .3s;
		-moz-transition: all .3s;
		-ms-transition: all .3s;
		-o-transition: all .3s;
		&:after {
			background: none repeat scroll 0 0 #fff;
			bottom: -15px;
			color: #333;
			left: 45%;
			line-height: 1px;
			padding: 15px 5px;
			position: absolute;
			font-family: "FontAwesome";
		}
	}
</style>
