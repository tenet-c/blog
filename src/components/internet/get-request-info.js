const http = require('http')
const url = require('url')

const server = http.createServer((req) => {
  console.log(req)
  /**
   * httpVersion 是http的版本 
   */
  console.log(req.httpVersion)

  /**
   * method 请求方式 GET POST
   */
  console.log(req.method)

  /**
   * url pathname与query
   */
  console.log(req.url)
  let {pathname,query} = url.parse(req.url,true)
  console.log(pathname)
  console.log(query)

  /**
   * headers
   */
  console.log(req.headers)

  /**
   * post 
   * req 其实是个可读流 类似socket 所有有data事件 与end事件
   * 模拟post请求curl -v -X POST -d "'name':'chm'" http://localhost:1234/
   */
  let arr = []
  req.on('data',(chunk) => {
    arr.push(chunk)
  })
  req.on('end' ,() => {
    console.log(Buffer.concat(arr).toString())
  })
})

server.listen('1234', () => {
  console.log('服务开启了')
})