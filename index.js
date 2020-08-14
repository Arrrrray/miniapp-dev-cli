#!/usr/bin/env node

const version = require('./package').version; // cli版本号
/* = package import
-------------------------------------------------------------- */

const program = require('commander'); // 命令行解析

/* = task events
-------------------------------------------------------------- */
const createProgramFs = require('./src/createComponent'); // 创建项目文件
const setting = require('./src/setting'); // 创建项目文件
const uploadApp = require('./src/upload'); // 创建项目文件
const previewApp = require('./src/preview'); // 创建项目文件


/* = config
-------------------------------------------------------------- */

// 设置版本号
program.version(version, '-v, --version');

/* = deal receive command
-------------------------------------------------------------- */

program
  .command('setting')
  .description('设置命令行工具安装位置')
  .action((cmd) => setting(cmd));

  program
  .command('create')
  .description('创建页面或组件')
  .action((cmd) => createProgramFs(cmd));

program
  .command('upload')
  .description('发布体验版')
  .action((cmd) => uploadApp(cmd));

program
  .command('preview [env]')
  .description('预览')
  .action((env) => previewApp(env));

/* 后续可以根据不同的命令进行不同的处理，可以简单的理解为路由 */
// program
//     .command('build [cli]')
//     .description('执行打包构建')
//     .action((cmd, env) => callback);

/* = main entrance
-------------------------------------------------------------- */
program.parse(process.argv)