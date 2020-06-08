const inquirer = require('inquirer');
const Log = require('../utils/log');
const switchVersion = require('../utils/switchVersion');

const versionQuestions = [
  {
    type: 'list',
    name: 'mode',
    message: '请选择预览环境',
    choices: ['测试环境', '正式环境']
  }
];

async function versionChoice() {
  let answer = await inquirer.prompt(versionQuestions);

  switch (answer.mode) {
    case '正式环境':
      switchVersion(true);
      break;
    case '测试环境':
      switchVersion(false);
      break;
    default:
      break;
  }
};

module.exports = async function (env) {
  if (env === 'pro') {
    switchVersion(true);
  } else if (env === 'dev') {
    switchVersion(false);
  } else {
    await versionChoice();
  }
  //success
  Log.success('预览成功, 在微信开发者工具获取体验版二维码吧!');
};






