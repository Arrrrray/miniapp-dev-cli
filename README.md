# 小程序开发脚手架

## 安装

`npm install miniapp-dev-cli --save-dev`

## 使用说明

本脚手架目前仅试用于微信小程序的开发，包含以下两个功能：

- 预览小程序，切换正式/测试环境

  - `miniapp-cli preview`
  - `miniapp-cli preview pro // 预览生产环境`
  - `miniapp-cli preview dev // 预览开发环境`

- 上传小程序

  - `miniapp-cli upload`

本脚手架在使用时会在项目根目录下创建 config/envConfig.js 文件，用来切换正式/测试环境，文件中包含以下内容：

```
// 正式环境
module.exports = {
  "baseUrl": "production"
}

// 测试环境
module.exports = {
  "baseUrl": "development"
}
```
项目版本控制在项目根目录下package.json文件中，version为版本号，versionDesc为版本描述

```
"version": "1.1.6",
"versionDesc": "正式：修复上传bug",
```


> 本插件使用之前，需要确保自己微信开发者工具安装在以下路径
> windows 系统 ide 路径（默认安装路径）：C:\Program Files (x86)\Tencent\微信 web 开发者?工具\微信开发者工具.exe
> mac：/Applications/wechatwebdevtools.app/

更多功能正在开发，敬请期待，计划包含已下功能

- 1.接收用户配置 ide 路径

- 2.支付宝小程序的支持

- 3.git 集成
