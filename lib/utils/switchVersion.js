"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _filePathConfig = _interopRequireDefault(require("../config/filePathConfig"));

var _log = _interopRequireDefault(require("./log"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function switchVersion(isDev) {
  // 源文件
  const sourceFiles = {
    prefix: '/config/env/',
    dev: 'dev.json',
    prod: 'prod.json'
  }; // 目标文件

  const targetFiles = [{
    prefix: '/config/',
    filename: 'envConfig.js'
  } // {
  // prefix: '/utils/growingio',
  // filename: 'gioConfig.js'
  // }
  ];
  const sourceFile = isDev ? sourceFiles.dev : sourceFiles.prod;
  const preText = 'module.exports = ';
  return new Promise((resolve, reject) => {
    _fs.default.readFile(__dirname + sourceFiles.prefix + sourceFile, (err, data) => {
      if (err) {
        throw new Error("Error occurs when reading file ".concat(sourceFile, ".\nError detail: ").concat(err));
        process.exit(1);
      } // 获取源文件中的内容


      const {
        baseUrl
      } = JSON.parse(data); // 将获取到的内容写入到目标文件中

      targetFiles.forEach((item, index) => {
        if (item.filename === 'envConfig.js') {
          let config = {
            baseUrl
          };
          let result = preText + JSON.stringify(config, null, 2); // 写入文件(这里只做简单的强制替换整个文件的内容)

          _fs.default.writeFileSync(configPath.dir_root + item.prefix + item.filename, result, 'utf-8', err => {
            if (err) {
              throw new Error("error occurs when reading file ".concat(sourceFile, ". Error detail: ").concat(err));
              process.exit(1);
            }
          });

          resolve();
        }
      });
    });
  });
}

var _default = switchVersion;
exports.default = _default;