const inquirer = require('inquirer');
const Log = require('../utils/log');
const jsonFormat = require("json-format"); // json格式化
const fsPromises = require('fs').promises;
const Config = require('../config/filePathConfig'); // 配置项

function versionQuestions(cli_path) {
  return [
    {
      type: 'input',
      name: 'cli_path',
      message: '请设置命令行工具安装位置',
      default: cli_path,
    }
  ];
}
const setting = async () => {
  // 配置文件路径
  const package_conf_path = `${Config.dir_root}/package.json`;

  // 配置文件内容
  const package_conf = require(package_conf_path);

  // 微信开发者工具命令行工具路径
  let cli_path = '';

  // 当前操作系统平台
  const current_platform = process.platform;

  // 根据当前操作系统平台，判断命令行工具cli路径
  switch (current_platform) {
    // Windows
    case 'win32':
      cli_path = Config.win_cli_path;
      break;

    // masOS
    case 'darwin':
      cli_path = Config.mac_cli_path;
      break;

    default:
      return Log.error('当前工具不支持本系统，请联系开发者 @ QQ：502215957');
  }

  // 开始执行，确认用户命令行工具安装位置
  let answer = await inquirer.prompt(versionQuestions(cli_path));

  let cli_config = {
    cliPath: answer.cli_path,
  }
  // 修改本地package.json文件
  // 使用fsPromises写文件
  try {
    fsPromises.writeFile(package_conf_path, jsonFormat({ ...package_conf, ...cli_config })).then(res => {
      Log.success('微信开发者工具命令行安装地址设置成功！！！');
    });
  } catch (error) {
    Log.error('出错了...', error);
  }

}
module.exports = setting;






