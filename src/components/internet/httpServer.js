const net = require('net')

const server = net.createServer()
server.listen('1234',()=>{
  console.log('服务开启了 ==================================')
})

server.on('connection',(socket) => {
  socket.on('data',chunk => {
    console.log(chunk.toString())
  })
  socket.end('test http request')
})