const fs = require('fs')
const path = require('path')
/**
 * 1.access
 */

fs.access(path.resolve('data.txt'),(err) => {
  if(err){
    console.log(err)
  }else{
    console.log('有操作权限')
  }
})

/**
 * 2.stat
 */
fs.stat(path.resolve('data.txt'), (err, statObj) => {
  console.log(statObj.size) // 31个字节
  console.log(statObj.isFile()) // 是否是文件
  console.log(statObj.isDirectory()) // 是否是目录
})

/**
 * 3.mkdir
 * 注意:要保证目录存在
 * recursive 递归创建
 */

fs.mkdir('dir/a/c',{ recursive:true } ,err => {
  if(err){
    console.log(err)
  }else{
    console.log('创建目录成功')
  }
})

/**
 * 4.默认删除空目录 有内容删除不了
 * recursive 递归删除
 */
fs.rmdir('dir',{ recursive:true },err=>{
  if(err){
    console.log(err)
  }else{
    console.log('删除成功')
  }
})

/**
 * 5.readdir 看目录里的内容
 */
fs.readdir('dir',(err,files) => {
  console.log(files)
})

/**
 * 6.unlink
 */
fs.unlink('dir/a/c/a.txt',err => {
  if(err){
    console.log(err)
  }else{
    console.log('删除成功')
  }
})