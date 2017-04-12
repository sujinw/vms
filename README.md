# VMS
Vue Management System

[![Code Climate](https://codeclimate.com/repos/58edfcb0bab24b0265000e3b/badges/be1cc8f745e432cd57ec/gpa.svg)](https://codeclimate.com/repos/58edfcb0bab24b0265000e3b/feed)
[![Test Coverage](https://codeclimate.com/repos/58edfcb0bab24b0265000e3b/badges/be1cc8f745e432cd57ec/coverage.svg)](https://codeclimate.com/repos/58edfcb0bab24b0265000e3b/coverage)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

### 环境
* nodejs 6+
* mongodb 3+

### 特性

* Vue 2+
* Element UI
* 集成 wangEditor 富文本编辑器 (新浪表情包支持)
* 集成七牛云图片上传
* 集成极光推送
* 完整 Node.js 后端
* 后端角色权限控制
* 容易部署

### 如何运行

```bash
git clone https://github.com/ericjjj/vms.git

// 启动后端, 依赖 mongodb
cd backend/utils
// 复制配置文件, 并修改对应配置
cp config.simple.js config.js
cd ..
// 运行
node index.js


// 启动前端
cd backend/utils
// 复制配置文件, 并修改对应配置
cp config.simple.js config.js
cd ..
// 运行
npm run dev
```

### 测试
```bash
cd backend
npm run test
```


### LICENSE
MIT



