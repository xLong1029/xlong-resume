<template>
	<div id="preloader">
		<div class="loader"></div>
	</div>
</template>

<style scoped lang="less">
	#preloader {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;
		background-color: #57BDDB;
		background: -webkit-linear-gradient(90deg, #4CB8C4 10%, #3CD3AD 90%);
		/* Chrome 10+, Saf5.1+ */
		background: -moz-linear-gradient(90deg, #4CB8C4 10%, #3CD3AD 90%);
		/* FF3.6+ */
		background: -ms-linear-gradient(90deg, #4CB8C4 10%, #3CD3AD 90%);
		/* IE10 */
		background: -o-linear-gradient(90deg, #4CB8C4 10%, #3CD3AD 90%);
		/* Opera 11.10+ */
		background: linear-gradient(90deg, #4CB8C4 10%, #3CD3AD 90%);
		/* W3C */
	}
	
	.loader {
		animation: animate 1.5s linear infinite;
		clip: rect(0, 80px, 80px, 40px);
		height: 80px;
		width: 80px;
		position: absolute;
		left: calc(50% - 40px);
		top: calc(50% - 40px);
		z-index: 999;
	}
	
	@keyframes animate {
		0% {
			transform: rotate(0deg)
		}
		100% {
			transform: rotate(220deg)
		}
	}
	
	.loader:after {
		animation: animate2 1.5s ease-in-out infinite;
		clip: rect(0, 80px, 80px, 40px);
		content: '';
		border-radius: 50%;
		height: 80px;
		width: 80px;
		position: absolute;
	}
	
	@keyframes animate2 {
		0% {
			box-shadow: inset #fff 0 0 0 17px;
			transform: rotate(-140deg);
		}
		50% {
			box-shadow: inset #fff 0 0 0 2px;
		}
		100% {
			box-shadow: inset #fff 0 0 0 17px;
			transform: rotate(140deg);
		}
	}
</style>