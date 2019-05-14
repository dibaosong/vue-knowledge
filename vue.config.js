const isDev = process.env.NODE_ENV === 'development'

const config = {
	publicPath: process.env.NODE_ENV === 'development' ? '/' : '/dist/',

  chainWebpack: config => {
    config.resolve.alias
      .set("@css", "@/assets/css");
    config.resolve.extensions
     .prepend('.scss')
     .prepend('.css')
  }
};



// 如果是开发环境
if (isDev) {
  config.devServer = {
    port: 8000,
    // host: '0.0.0.0',
    overlay: {
      errors: true
    },
    hot: true,
    open: true // 设置为true当启动 npm run serve 时会自动打开浏览器
  }
}else{
  config.productionSourceMap = false; //去除.map 文件
};

module.exports = config
