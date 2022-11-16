const http = require('http')

const server = http.createServer((req,res) => {
  const arr =[]
  req.on('data',(chunk) => {
    arr.push(chunk)
  })
  req.on('end',() => {
    const requestData = Buffer.concat(arr).toString()
    res.end('拿到了' + requestData)
  })
})

server.listen('1234',() => {
  console.log('外部服务已开启')
})