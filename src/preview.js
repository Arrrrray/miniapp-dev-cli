// import inquirer from 'inquirer';
const inquirer = require('inquirer');
// import Log from './utils/log';
const Log = require('../utils/log');
// import switchVersion from './utils/switchVersion';
const switchVersion = require('../switchVersion');

const versionQuestions = [
  {
    type: 'list',
    name: 'mode',
    message: '请选择预览环境',
    choices: ['默认上次环境', '正式环境', '测试环境']
  }
];

async function versionChoice() {
  let answer = await inquirer.prompt(versionQuestions);

  switch (answer.mode) {
    case '正式环境':
      switchVersion(false);
      break;
    case '测试环境':
      switchVersion(true);
      break;
    case '默认上次环境':
      break;
    default:
      break;
  }
};

module.exports = async function (env) {
  if (env === 'pro') {
    switchVersion(false);
  } else if (env === 'dev') {
    switchVersion(true);
  } else {
    await versionChoice();
  }
   //success
   Log.success('预览成功, 在微信开发者工具获取体验版二维码吧!');
};






