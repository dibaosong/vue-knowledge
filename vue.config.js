// 拷贝文件插件
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')


const isDev = process.env.NODE_ENV === 'development'

let cesiumSource = './node_modules/cesium/Source'
let cesiumWorkers = '../Build/Cesium/Workers'

const config = {
	publicPath: process.env.NODE_ENV === 'development' ? '/' : '/dist/',

  // chainWebpack: config => {
  //   config.resolve.alias
  //     .set("@css", "@/assets/css");
  //   config.resolve.extensions
  //    .prepend('.scss')
  //    .prepend('.css')
  // },

  configureWebpack: {
    output: {
      sourcePrefix: ' '
    },
    amd: {
      toUrlUndefined: true
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
        '@css': path.resolve('src/assets/css'),
        'cesium': path.resolve(__dirname, cesiumSource)
      },
      extensions: ['.scss', '.css']
    },
    plugins: [
      new CopyWebpackPlugin([{from: path.join(cesiumSource, cesiumWorkers), to: 'Cesium/Workers'}]),
      new CopyWebpackPlugin([{from: path.join(cesiumSource, 'Assets'), to: 'Cesium/Assets'}]),
      new CopyWebpackPlugin([{from: path.join(cesiumSource, 'Widgets'), to: 'Cesium/Widgets'}]),
      new CopyWebpackPlugin([{from: path.join(cesiumSource, 'ThirdParty/Workers'), to: 'Cesium/ThirdParty/Workers'}]),
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('./Cesium')
      })
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            name: 'Cesium',
            test: /[\\/]node_modules[\\/]cesium/,
            chunks: 'all'
          }
        }
      }
    },
    module: {
      unknownContextCritical: /^.\/.*$/,
      unknownContextCritical: false

    }
  },
  css: {
    // 启用 CSS modules
    modules: false,
    // 是否使用css分离插件
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {}
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
