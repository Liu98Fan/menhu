# menhu
**本项目设计的是一个学术型门户网站，主要介绍实验室的学术研究等功能**

## 开发日志

- 2021-5-23
  - 完成overview页面的开发
  - menu菜单的选中存在bug:可以考虑通过vueRouter的路由守卫在跳转页面时候修改vuex中的menuSelect来实现动态修改菜单选中的功能。  
- 2021-5-22
  - 完成项目的基础搭建 引入了vueRouter、vuex、ant-design-vue等支持
  - 完成layout层设计
  - 完成menu菜单的设计
  - 完成Home页面的设计
## 安装步骤
### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
