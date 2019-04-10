// vue.config.js相关配置请参考 https://github.com/vuejs/vue-cli/tree/dev/docs/config
const webpack = require("webpack");
const debug = process.env.NODE_ENV !== 'production';
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
	// 部署应用程序的基本URL
    // 默认情况下，将部署在域的根目录下。如果部署在子路径上，则需要使用此选项指定子路径。例如，部署在https://www.foobar.com/my-app/，则publicPath到'/my-app/'
    publicPath: debug ? '/' : '/',
    // 构建输出目录，在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）
    outputDir: 'dist',
    // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
    assetsDir: "static",
    // 是否开启eslint保存检测，有效值：ture | false | 'error'
    lintOnSave: true,
    // 运行时版本是否需要编译，原来的 Compiler 换成了 runtimeCompiler
    runtimeCompiler: false,
    //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
    filenameHashing: false,
    // 生产环境是否生成 sourceMap 文件，将此设置为false不输出map文件可以加速生产构建
    productionSourceMap: true,
    // css相关配置
    css: {
        // 是否使用 css 分离插件，采用独立样式文件载入，不采用<style>方式内联至html文件中
        extract: true,
        // 是否在构建样式地图，设置false将提高构建速度
        sourceMap: false,
        // 是否启用 CSS modules 将所有*.(css|scss|sass|less|styl(us)?)文件视为CSS模块，设置为true会导致import css 模块时样式无法加载
        modules: false
    },
	// 代理服务
	devServer: {
		port: 8086,
		// 自动启动浏览器
		open: true,
		// 热更新
		hotOnly: true,
		// 设置代理
		proxy: null
	}
};
