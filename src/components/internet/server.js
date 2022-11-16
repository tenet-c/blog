const net = require('net')
const PORT = 1235
const HOST = 'localhost'
const MyTransFromCode = require('./myTransFromCode.js')
const server = net.createServer()
const myTransFromCode = new MyTransFromCode()
server.listen(PORT,HOST)

server.on('listening',() => {
  console.log('服务已开启')
})

let overageBuffer = null // 用来做没处理完数据的缓存
server.on('connection',(socket) => {
  socket.on('data', chunk =>{
    if(overageBuffer){
      chunk = Buffer.concat([overageBuffer,chunk])
    }
    // 循环处理
    let packageLen = 0
    // eslint-disable-next-line no-cond-assign
    while(packageLen = myTransFromCode.getPackageLeng(chunk)){
      const packageCon = chunk.slice(0,packageLen)
      chunk = chunk.slice(packageLen)
      const ret = myTransFromCode.decode(packageCon)
      console.log(ret)
      socket.write(myTransFromCode.encode(ret.body,ret.serialNum))
    }
    overageBuffer = chunk
  })
})

server.on('close', () => {
  console.log('服务已关闭')
})

server.on('error', (err) => {
  if(err==='EADDRINUSE'){
    console.error('服务被占用')
  }else{
    console.error(err)
  }
})