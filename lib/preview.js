"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inquirer = _interopRequireDefault(require("inquirer"));

var _log = _interopRequireDefault(require("./utils/log"));

var _switchVersion = _interopRequireDefault(require("./utils/switchVersion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const versionQuestions = [{
  type: 'list',
  name: 'mode',
  message: '请选择预览环境',
  choices: ['默认上次环境', '正式环境', '测试环境']
}];

async function versionChoice() {
  let answer = await _inquirer.default.prompt(versionQuestions);

  switch (answer.mode) {
    case '正式环境':
      (0, _switchVersion.default)(false);
      break;

    case '测试环境':
      (0, _switchVersion.default)(true);
      break;

    case '默认上次环境':
      break;

    default:
      break;
  }
}

async function preview(env) {
  if (env === 'pro') {
    (0, _switchVersion.default)(false);
  } else if (env === 'dev') {
    (0, _switchVersion.default)(true);
  } else {
    await versionChoice();
  }
}

var _default = preview;
exports.default = _default;