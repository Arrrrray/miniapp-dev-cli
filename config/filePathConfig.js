module.exports = {
    // 根目录
    root: __dirname,

    // 执行命令目录路径
    dir_root: process.cwd(),

    // 小程序项目路径
    entry: './',

    // 项目编译输出文件夹
    output: './',

    // 小程序模版目录
    template: __dirname + '/template',

    // windows系统微信开发者工具命令行工具默认安装路径 Windows: <安装路径>/cli.bat
    win_cli_path:'C:/\Program Files (x86)/\Tencent/\微信web开发者工具/\cli.bat',

    // macOS系统微信开发者工具命令行工具默认安装路径 macOS: <安装路径>/Contents/MacOS/cli
    mac_cli_path:'/Applications/wechatwebdevtools.app/Contents/MacOS/cli',
}