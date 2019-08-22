module.exports = {
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          function (css, result) {
              var oldCssText = css.toString();
              var px2remIns = new Px2rem(options);
              var newCssText = px2remIns.generateRem(oldCssText);
              var newCssObj = postcss.parse(newCssText);
              result.root = newCssObj;
            }
        ]
      },
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },



  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },

  devServer: {
    proxy: {
      '/api': { // 匹配所有以 '/api'开头的请求路径
        target: 'http://m.you.163.com', 
        changeOrigin: true, // 支持跨域
        pathRewrite: { // 重写路径: 去掉路径中开头的'/api'
          '^/api': ''
        }
      },
      '/apib': { // 匹配所有以 '/api'开头的请求路径
        target: 'http://localhost:4000', // 代理目标的基础路径
        changeOrigin: true, // 支持跨域
        pathRewrite: { // 重写路径: 去掉路径中开头的'/api'
          '^/apib': ''
        }
      }
    }
  }
}
