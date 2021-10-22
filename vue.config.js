'use strict';
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = process.env.port || process.env.npm_config_port || 9528; // dev port

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true,
    },
    // proxy: {
    //   "/ylgj-admin": {
    //     target: "http://nurse.newhit.cn/ylgj-admin", // 测试环境
    //     // target: "http://172.16.113.20:9090/",
    //     changeOrigin: true,
    //     secure: false,
    //     ws: true,
    //     logLevel: "debug",
    //     pathRewrite: {
    //       "^/ylgj-admin": ""
    //     }
    //   }
    // },
  },
  chainWebpack(config) {
    config.resolve.alias.set('@', resolve('src'));

    config.plugins.delete('preload'); // TODO: need test
    config.plugins.delete('prefetch'); // TODO: need test

    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        return options;
      })
      .end();

    config.when(process.env.NODE_ENV === 'development', config => config.devtool('cheap-source-map'));

    config.when(process.env.NODE_ENV !== 'development', config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/,
          },
        ])
        .end();
      config.optimization.splitChunks({
        chunks: 'all',
        minSize: 3000,
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'initial', // only package third parties that are initially dependent
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 2, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
          scripts: {
            name: 'chunk-scripts',
            test: resolve('src/scripts'), // can customize your rules
            minChunks: 2, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
          htmlDocx: {
            name: 'chunk-scripts-html-docx',
            test: resolve('src/scripts/html-docx'), // can customize your rules
            minChunks: 1, //  minimum common number
            priority: 6,
            reuseExistingChunk: true,
          },
        },
      });
      config.optimization.runtimeChunk('single');
    });
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/style/global.scss";`,
      },
    },
  },
};
