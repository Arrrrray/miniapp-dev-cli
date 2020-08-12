const spawn = require("cross-spawn");
const cli = '/Applications/wechatwebdevtools.app/Contents/MacOS/cli'
spawn.sync(cli,['upload', '--project','~/Documents/Code/junchao/miniapp_shop_guide', '-v', '2.18.200812.2', '-d', 'testtest' ])