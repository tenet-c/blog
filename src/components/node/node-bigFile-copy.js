// 操作
// 1.打开文件a
// 2.用read将数据保存到buffer中
// 3.打开文件b
// 4.用write将buffer写入b中

const fs = require('fs')
const path = require('path')
const buf = Buffer.alloc(20)
const BUFFER_SIZE = buf.length
let readOffset = 0
fs.open(path.resolve('node.md'),'r',(err,rfd) => {
  fs.open(path.resolve('node-copy.md'),'w',(err,wfd) => {
    console.log('开始拷贝')
    const date1 = new Date()
    function next (){
      fs.read(rfd,buf,0,BUFFER_SIZE,readOffset,(err,readBytes) => {
        if(!readBytes){
          fs.close(rfd,()=>{})
          fs.close(wfd,()=>{})
          const data2 = new Date()
          console.log('拷贝完成,用时',data2-date1)
          return
        }
        readOffset += readBytes
        fs.write(wfd,buf,0,readBytes,() => {
           next()
        })
      })
    }
    next()
    // console.log('开始拷贝')
    // const date1 = new Date()
    // function next(){
    //   fs.read(rfd,buf,0,BUFFER_SIZE,readOffset,(err,readBytes,data)=>{
    //     if(!readBytes){
    //       fs.close(rfd,()=>{})
    //       fs.close(wfd,()=>{})
    //       const data2 = new Date()
    //       console.log('拷贝完成,用时',data2-date1)
    //       return
    //     }
    //     readOffset += readBytes
    //     console.log(data.toString())
    //     // 写入
    //     fs.write(wfd,buf,0,BUFFER_SIZE,readOffset,(err,writeBytes) => {
    //       next()
    //     })
    //   })
    // }
    // next()
  })
})

// fs.open(path.resolve('node.md'),'r',(err,rfd) => {
//   fs.read(rfd,buf,0,buf.length,0,(err,readBytes) => {
//     fs.open(path.resolve('node-code.md'),'w',(err,wfd) => {
//       fs.write(wfd,buf,0,buf.length,0,(err,writeBytes) => {
//         console.log('写入成功')
//       })
//     })
//   })
// })