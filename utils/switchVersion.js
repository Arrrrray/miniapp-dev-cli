// import fs from 'fs';
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
// import filePathConfig from '../config/filePathConfig';
const filePathConfig = require('../config/filePathConfig');
// import Log from './log';

const switchVersion = async (isRelease) => {
  // 源文件
  const sourceFiles = {
    prefix: `${path.join(__dirname, '../config/env/')}`,
    dev: 'dev.json',
    prod: 'prod.json'
  }
  // 目标文件
  const targetFiles = [
    {
      prefix: '/config/',
      filename: 'envConfig.js'
    },
  ]
  const sourceFile = isRelease ? sourceFiles.prod : sourceFiles.dev
  const preText = 'module.exports = ';

  // 使用fsPromises读文件，首先获取正式环境和测试中配置中的数据
  const file_data = await fsPromises.readFile(sourceFiles.prefix + sourceFile);
  // 获取baseUrl
  const { baseUrl } = JSON.parse(file_data);
  // 将获取到的内容写入到目标文件中
  targetFiles.forEach((item, index) => {
    if (item.filename === 'envConfig.js') {
      let config = { baseUrl };
      let result = preText + JSON.stringify(config, null, 2);

      // 使用fsPromises写文件
      fsPromises.writeFile(filePathConfig.dir_root + item.prefix + item.filename, result);
    }
  })
}

module.exports = switchVersion;
