//将所有的mock文件导入
require('./overview')
require('./research')
require('./people')
require('./photoGallery')
require('./publications')
require('./news')
require('./funding')
require('./login')
// 在这里可以做一些通用的配置
const Mock = require("mockjs")
// 设置所有ajax请求的超时时间，模拟网络传输耗时
Mock.setup({
    timeout: 0-300
})
