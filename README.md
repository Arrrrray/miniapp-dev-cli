# 小程序开发脚手架

## 安装

`npm install miniapp-dev-cli --save-dev`

## 使用说明

本脚手架目前仅试用于微信小程序的开发，包含以下功能：

- 设置小程序命令行工具安装位置

  - `miniapp-cli setting`

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
项目版本控制在项目根目录下package.json文件中，version为版本号，versionDesc为版本描述，cliPath为微信开发者工具命令行安装位置

```
"version": "1.1.6",
"versionDesc": "正式：修复上传bug",
"cliPath": "",
```


> 要使用本脚手架工具，注意首先需要在开发者工具的设置 -> 安全设置中开启服务端口。

> 命令行工具默认安装位置所在位置：
> macOS: <安装路径>/Contents/MacOS/cli 
> 例：/Applications/wechatwebdevtools.app/Contents/MacOS/cli
> Windows: <安装路径>/cli.bat 
> 例：C:/\Program Files (x86)/\Tencent/\微信web开发者工具/\cli.bat

更多功能正在开发，敬请期待，计划包含已下功能

- 2.支付宝小程序的支持

- 3.git 集成
