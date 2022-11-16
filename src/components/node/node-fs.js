const fs = require('fs')
const path = require('path')


// fs.readFile(path.resolve('data.txt'),'utf-8',(err,data)=>{
//   if(err){
//     console.warn(err)
//   }
//   console.log(data)
// })

// /**
//  * writeFile
//  * 第一个参数 文件位置
//  * 第二个参数为要写入的数据 默认覆盖
//  * 第三个参数为配置项
//  */
// fs.writeFile(path.resolve('data.txt'),'123123123',{
//   mode:438, // 可读可写
//   flag:'w+', // r+ 从头部开始写入 w+ 默认覆盖
//   encoding:'utf-8'
// },(err)=>{
//   console.log(err)
// })

// /**
//  * appendFile 在文件最后写入
//  * 
//  */
//  fs.appendFile(path.resolve('data.txt'),'1111',(err)=>{
//   console.log(err)
// })

// /**
//  * copyFile
//  */
// fs.copyFile(path.resolve('data.txt'),path.resolve('text.txt'),(err)=>{})

fs.watchFile(path.resolve('data.txt'),{
  interval:20
},(curr,prev)=>{
  if(curr.mtime !== prev.mtime){
    console.log('文件被修改',curr.mtime,prev.mtime)
    fs.unwatchFile(path.resolve('data.txt'))
  }
})