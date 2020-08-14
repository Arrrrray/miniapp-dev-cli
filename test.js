const spawn = require("cross-spawn");
const cli = '/Applications/wechatwebdevtools.app/Contents/MacOS/cli'
console.log(cli);
spawn.sync(cli, ['upload', '--project', '~/Documents/Code/junchao/miniapp_shop_guide', '-v', '2.18.200812.2', '-d', 'testt12132231321est'], { stdio: 'inherit' })
// spawn.sync('npm', ['-v'],{ stdio: 'inherit' })










