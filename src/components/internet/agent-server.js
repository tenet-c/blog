const http = require('http')
const queryString = require('querystring') // form表单的
const server = http.createServer((req,res) => {
  // post 请求
  let arr =[]
  req.on('data',(chunk) => {
    arr.push(chunk)
  })
  req.on('end', () => {
    let obj = Buffer.concat(arr).toString()
    if(req.headers['content-type'] === 'application/json'){
      obj = JSON.parse(obj)
      obj.add = '123123123'
      res.end(JSON.stringify(obj))
    }
    // form 表单提交
    if(req.headers['content-type'] === 'application/X-www-form-unlencoded'){
      obj = queryString.parse(obj)
      res.end(JSON.stringify(obj))
    }
  })
})

server.listen('1234',() => {
  console.log('服务开启')
})