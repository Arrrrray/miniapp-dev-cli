"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  // 根目录
  root: __dirname,
  // 执行命令目录路径
  dir_root: process.cwd(),
  // 小程序项目路径
  entry: './',
  // 项目编译输出文件夹
  output: './',
  // 小程序模版目录
  template: __dirname + '/template'
};
exports.default = _default;