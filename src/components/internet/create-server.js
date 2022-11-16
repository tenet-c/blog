const http = require('http')

let server = http.createServer(() => {
  console.log('请求进来了')
})

server.listen('1234',()=>{
  console.log('服务开启了')
})