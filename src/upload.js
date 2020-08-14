const inquirer = require('inquirer'); // 启动交互命令行
const spawn = require('cross-spawn'); // 开启子进程
const Config = require('../config/filePathConfig'); // 配置项
const Log = require("../utils/log"); // 控制台输出
const jsonFormat = require("json-format"); // json格式化
const fsPromises = require('fs').promises;
const switchVersion = require('../utils/switchVersion');

function getQuestion({
  version,
  versionDesc,
  cliPath,
} = {}) {
  return [
    {
      type: 'list',
      name: 'cli_path',
      message: '请选择命令行工具安装位置',
      choices: ['默认安装位置', '自定义安装位置']
    },
    {
      type: 'confirm',
      name: 'isRelease',
      message: '是否为正式发布版本?',
      default: true
    },
    // 设置版本号
    {
      type: 'input',
      name: 'version',
      message: `请输入版本号(当前版本号:${version}):`,
      default: version
    },
    // 设置上传描述
    {
      type: 'input',
      name: 'versionDesc',
      message: `请写一个简单的介绍来描述这个版本的改动:`,
      default: versionDesc
    }];
}
// exec('"C:\Program Files (x86)\Tencent\微信web开发者?工具\微信开发者工具.exe"');
const upload = async () => {
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

  const versionConfig = {
    version: package_conf.version,
    versionDesc: package_conf.versionDesc,
  }

  // 开始执行，需要用户确认上传正式环境/测试环境，输入版本号，版本描述等信息
  let answer = await inquirer.prompt(getQuestion(versionConfig));
  switch (answer.cli_path) {

    case '自定义安装位置':
      // 用户自定义命令行工具位置
      if (package_conf.cliPath) {
        cli_path = package_conf.cliPath;
      } else {
        Log.error('自定义安装位置为空，请通过 miniapp-cli setting 命令配置自定义安装位置')
        return;
      }
      break;

    case '默认安装位置':
      break;

    default:
      break;
  }
  // 不输入版本号会默认使用上次的版本号
  if (answer.version == '') answer.version = versionConfig.version;

  switchVersion(answer.isRelease).then(() => {
    if (answer.isRelease) {
      answer.versionDesc = `正式：${answer.versionDesc}`;
    } else {
      answer.versionDesc = `测试：${answer.versionDesc}`;
    }
    versionConfig.version = answer.version;
    versionConfig.versionDesc = answer.versionDesc;
    //上传体验版v1
    // let res = spawn.sync(cli_path, ['-u', `${versionConfig.version}@${Config.dir_root}`, '--upload-desc', versionConfig.versionDesc], {
    //   stdio: 'inherit'
    // });
    // 上传体验版v2
    try {
      spawn.sync(cli_path, ['upload', '--project', `${Config.dir_root}`, '-v', `${versionConfig.version}`, '-d', versionConfig.versionDesc], {
        stdio: 'inherit'
      });
      Log.success(`上传体验版成功, 登录微信公众平台 https://mp.weixin.qq.com 获取体验版二维码`);
    } catch (error) {
      Log.error('小程序上传出错了...', error);
    }
    // 修改本地package.json文件 (当为发行版时)
    // 使用fsPromises写文件
    try {
      fsPromises.writeFile(package_conf_path, jsonFormat({ ...package_conf, ...versionConfig })).then(res => {
        Log.success('package.json文件修改成功！！！');
      });
    } catch (error) {
      Log.error('package.json文件修改上传出错了...', error);
    }

  });
}
module.exports = upload;