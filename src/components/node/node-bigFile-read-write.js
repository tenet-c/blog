// 首先有个缓存区
// 然后打开文件
const fs = require('fs')
const path = require('path')
const buf = Buffer.alloc(10)
console.log(buf.length)
fs.open(path.resolve('data.txt'),'r',(err,rfd) => {
    fs.read(rfd,buf,0,buf.length,0,(err,readBytes,data) => {
      console.log(readBytes) // 操作了几个字节
      console.log(data.toString())
    })
})

fs.open(path.resolve('dataCopy.txt'),'w',(err,wfd) => {
  fs.write(wfd,buf,0,buf.length,0,(err,writeBytes,data) => {
    console.log(writeBytes) // 写入了几个字节
    console.log(data.toString())
  })
})