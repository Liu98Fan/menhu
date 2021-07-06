const path = require('path')
module.exports = {
    devServer: {
        disableHostCheck: true,
        proxy: {  //配置跨域
            '/api': {
                target: 'https://psav.zarosmm.com/',  //这里后台的地址模拟的;应该填写你们真实的后台接口
                changOrigin: true,  //允许跨域
                pathRewrite: {
                    /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
                      实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
                     */
                    '^/api/login': '/obtain-token',
                }
            },
            '/data/image':{
                target: 'https://psav.zarosmm.com/',  //这里后台的地址模拟的;应该填写你们真实的后台接口
                changOrigin: true,  //允许跨域
            }
        }
    },
    // configureWebpack: (config) => {
    //     if (process.env.NODE_ENV === 'production') {
    //         // 为生产环境修改配置...
    //         config.mode = 'production'
    //     } else {
    //         // 为开发环境修改配置...
    //         config.mode = 'development'
    //     }
    //     Object.assign(config, {
    //         // 开发生产共同配置
    //         resolve: {
    //             alias: {
    //                 '@': path.resolve(__dirname, '/src'),
    //                 '@c': path.resolve(__dirname, '/src/components'),
    //                 '@v': path.resolve(__dirname, '/src/views')
    //             } // 别名配置
    //         }
    //     })
    // },

}
