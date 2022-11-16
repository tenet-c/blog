const fs = require('fs')
const path = require('path')
fs.open(path.resolve('data.txt'),'r',(err,fd) => {
  console.log(fd)

  // 关闭
  fs.close(() =>{
    console.log('关闭成功')
  })
})