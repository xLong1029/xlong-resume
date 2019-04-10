<template>
	<footer>
		<div class="row">
			<div class="twelve columns">
				<ul class="social-links">
					<li>
						<a href="#">
							<i class="fa fa-facebook"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="fa fa-twitter"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="fa fa-google-plus"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="fa fa-linkedin"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="fa fa-instagram"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="fa fa-dribbble"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="fa fa-skype"></i>
						</a>
					</li>
				</ul>
	
				<ul class="copyright">
					<li>John Doe &copy; Copyright 2014, All Rights Reserved</li>
				</ul>
			</div>
	
			<div id="go-top">
				<a class="smoothscroll" title="Back to Top" href="#about">
					<i class="fa fa-chevron-up"></i>
				</a>
			</div>
		</div>
	</footer>
</template>

<style scoped lang="less">
	footer {
		padding-top: 48px;
		margin-bottom: 48px;
		color: #303030;
		font-size: 14px;
		text-align: center;
		position: relative;

		a{
			color: #525252;
			&:visited {
				color: #525252;
			}

			&:hover,
			&:focus {
				color: #fff;
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
		top: -24px;
		left: 50%;
		margin-left: -30px;

		a {
			text-decoration: none;
			border: 0 none;
			display: block;
			width: 60px;
			height: 60px;
			background-color: #525252;
			box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.2);
			-webkit-transition: all 0.2s ease-in-out;
			-moz-transition: all 0.2s ease-in-out;
			-o-transition: all 0.2s ease-in-out;
			-ms-transition: all 0.2s ease-in-out;
			transition: all 0.2s ease-in-out;
			color: #fff;
			font-size: 21px;
			line-height: 60px;
			border-radius: 100%;

			&:hover {
				background-color: #0F9095;
			}
		}
	}
</style>
