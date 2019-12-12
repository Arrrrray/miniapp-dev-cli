// import fs from 'fs';
const fs = require('fs');
// import path from 'path';
// import filePathConfig from '../config/filePathConfig';
const filePathConfig = require('./config/filePathConfig');
// import Log from './log';

module.exports =  async function (isDev) {
  // 源文件
  const sourceFiles = {
    prefix: '/config/env/',
    dev: 'dev.json',
    prod: 'prod.json'
  }
  // 目标文件
  const targetFiles = [
    {
      prefix: '/config/',
      filename: 'envConfig.js'
    },
    // {
    // prefix: '/utils/growingio',
    // filename: 'gioConfig.js'
    // }
  ]
  const sourceFile = isDev ? sourceFiles.dev : sourceFiles.prod
  const preText = 'module.exports = ';
  return new Promise((resolve, reject) => {
    fs.readFile(__dirname + sourceFiles.prefix + sourceFile, (err, data) => {
      if (err) {
        throw new Error(`Error occurs when reading file ${sourceFile}.\nError detail: ${err}`)
        process.exit(1)
      }
      // 获取源文件中的内容
      const { baseUrl } = JSON.parse(data);

      // 将获取到的内容写入到目标文件中
      targetFiles.forEach((item, index) => {
        if (item.filename === 'envConfig.js') {
          let config = { baseUrl };
          let result = preText + JSON.stringify(config, null, 2);
          // 写入文件(这里只做简单的强制替换整个文件的内容)
          fs.writeFileSync(filePathConfig.dir_root + item.prefix + item.filename, result, 'utf-8', (err) => {
            if (err) {
              throw new Error(`error occurs when reading file ${sourceFile}. Error detail: ${err}`)
              process.exit(1)
            }
          })
          resolve();
        }
      })
    })
  })
}

// export default switchVersion;