const version = require('./package').version;
// 引入commander
const program = require('commander');
// 引入创建项目文件方法
const createComponent = require('./src/createComponent');
// 引入创建页面方法
const createPage = require('./src/createPage');
// 引入切换预览方法
const preview = require('./src/preview');
// 引入发布版本方法
const publish = require('./src/publish');

// 设置版本号
program.version(version, '-v, --version');
/* 后续可以根据不同的命令进行不同的处理，可以简单的理解为路由 */

// 创建组件命令
program
  .command('createComponent')
  .description('创建组件')
  .action((cmd) => createComponent(cmd));

// 创建页面命令
program
  .command('createPage')
  .description('创建页面')
  .action((cmd) => createPage(cmd));

// 预览命令
program
  .command('preview [env]')
  .description('预览项目')
  .action((cmd) => preview(cmd));

// 发布命令
program
  .command('publish')
  .description('发布项目')
  .action((cmd) => publish(cmd));



program.parse(process.argv)