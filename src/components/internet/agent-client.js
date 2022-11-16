const http = require('http')

let option = {
  host : 'localhost',
  port : '1234',
  path : '/?a=1',
  method: 'POST',
  headers : {
    // 'Content-type': 'application/json' 
    'Content-type': 'application/X-www-form-unlencoded' 
  }
}

let req = http.request(option ,(res) => {
  let arr = []
  res.on('data',(data) => {
    arr.push(data)
  })
  res.on('end' ,() => {
    console.log(Buffer.concat(arr).toString())
  })
})

//json
//req.end('{"a":"123"}')
//form
req.end('a=1&b=2')
