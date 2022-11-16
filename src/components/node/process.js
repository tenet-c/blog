// 1.内存
/**
 *  rss: 19554304,    常驻内存   
    heapTotal: 4931584,  申请的内存
    heapUsed: 4095728,   现在使用的内存
    external: 309830,    扩展的内存
    arrayBuffers: 11158  buffer的使用缓冲区
 */
console.log(process.memoryUsage())

// 2.资源cpu
console.log(process.cpuUsage())
/**
 * user: 46000,  用户占用
 * system: 15000 系统占用
 */

// 3. 当前工作目录 ---2大类运行环境
console.log(process.cwd()) // D:\学习\myBlogView1.0\src\components\node

// 4. node版本
console.log(process.version)

// 5. node版本 内置模块版本 例如libuv版本 v8版本
console.log(process.versions)

// 6.cpu架构
console.log(process.arch) // x64

// 7.环境方向
console.log(process.env)  // Path NODE_ENV os 等等 

// 8.管理员目录
console.log(process.env.USERPROFILE) // C:\Users\Hasee 管理员目录

// 9.系统平台
console.log(process.env.os) // window_nt
console.log(process.platform) // win32

// 10 启动参数   ----3大类运行状态
console.log(process.argv)

// 11 唯一id
console.log(process.pid) //4780

// 12运行时间
console.log(process.uptime()) //0.0572046

// 13退出时执行 (异步 回调不支持异步)   4大类内置事件
process.on('exit',(code)=>{
    console.log('exit',code)
})

// 14退出前执行 (异步 回调异步) 
process.on('beforeExit',(code)=>{
  console.log('beforeExit',code)
})

// 15手动强制退出
//process.exit()

// 16 stdout 输出 类似console 5大类 输入输出
console.log = function(data){
  process.stdout.write('-----' + data + '\n')
}


// 17 输出管道 异步
// const fs = require('fs')
// fs.createReadStream('./node.md')
//   .pipe(process.stdout)

// 18 stdin 输入
// process.stdin.pipe(process.stdout)

// 19 stdin 输入 readable  read() 获取输入
process.stdin.setEncoding('utf-8')
process.stdin.on('readable',()=>{
  let chunk = process.stdin.read()
  process.stdout.write('data'+chunk)
})
