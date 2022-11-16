const http = require('http')

const options = {
  host:'localhost',
  port:'1234',
  path:'/',
  method: 'POST',
  headers : {
    'Content-type': 'application/json' 
  }
}
// 代理服务器
const server = http.createServer((request,response) => {
  // 向真正后端代理发送
  const req = http.request(options, (res) => {
    const arr = []
    res.on('data',(chunk) => {
    arr.push(chunk)
  })
    res.on('end',() => {
      // 外部服务返回数据结束 返回给客户端
      response.setHeader('Content-type','text/http;charset=utf-8')
      response.end(Buffer.concat(arr).toString())
    })
  })
  req.end('// 代理发送数据123')
})


server.listen('2345',() => {
  console.log('本地的代理服务启动了')
})





