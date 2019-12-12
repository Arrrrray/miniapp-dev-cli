import inquirer from 'inquirer';
import Log from '../utils/log';
import switchVersion from '../utils/switchVersion';

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
}

async function preview(env) {
  if (env === 'pro') {
    switchVersion(false);
  } else if (env === 'dev') {
    switchVersion(true);
  } else {
    await versionChoice();
  }
}

export default preview;






