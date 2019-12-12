"use strict";

var _package = require("./package.json");

var _commander = _interopRequireDefault(require("commander"));

var _createComponent = _interopRequireDefault(require("./createComponent"));

var _createPage = _interopRequireDefault(require("./createPage"));

var _preview = _interopRequireDefault(require("./preview"));

var _publish = _interopRequireDefault(require("./publish"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 从package.json读取cliVersion
// 引入commander
// 引入创建项目文件方法
// 引入创建页面方法
// 引入切换预览方法
// 引入发布版本方法

/* 后续可以根据不同的命令进行不同的处理，可以简单的理解为路由 */
// 创建组件命令
_commander.default.command('createComponent').description('创建组件').action(cmd => (0, _createComponent.default)(cmd)); // 创建页面命令


_commander.default.command('createPage').description('创建页面').action(cmd => (0, _createPage.default)(cmd)); // 预览命令


_commander.default.command('preview').description('预览项目').action(cmd => (0, _preview.default)(cmd)); // 发布命令


_commander.default.command('publish').description('发布项目').action(cmd => (0, _publish.default)(cmd)); // 设置版本号


_commander.default.version(_package.version, '-v, --version');

_commander.default.parse(process.argv);