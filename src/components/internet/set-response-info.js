const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer((res,req) => {
  req.setHeader('Content-type','text/md;charset=utf-8')
  req.statusCode = 302
  // 将md返回给前端
  fs.readFile(path.resolve('./internet.md'),'utf-8',(err,data)=>{
    req.end(data)
  })
  
})

server.listen('1234',() => {
  console.log('服务开启')
})