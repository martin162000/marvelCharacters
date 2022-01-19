// vue.config.js

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/marvelCharacters/' : '/',
	chainWebpack: (config) => {
		config.module.rule('eslint').use('eslint-loader').options({
			fix: true,
		})
	},
}
