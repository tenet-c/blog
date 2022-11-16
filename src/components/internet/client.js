const net = require('net')
const MyTransFromCode = require('./myTransFromCode.js')
const myTransFromCode = new MyTransFromCode()
const client = net.createConnection({
  port:1235,
  host:'localhost'
})

client.on('connect',()=> {
 
})

client.write(myTransFromCode.encode('测试发送1'))
client.write(myTransFromCode.encode('测试发送2'))
client.write(myTransFromCode.encode('测试发送3'))
client.write(myTransFromCode.encode('测试发送4'))
let overageBuffer = null // 用来做没处理完数据的缓存
client.on('data', chunk=>{
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
  }
  overageBuffer = chunk
})

client.on('error',(err)=>{
  console.log(err)
})
client.on('close',()=>{
  console.log('客户端端口连接关闭')
})
// let n = 0
// setInterval(() => {
//   n++
//   client.write('测试发送'+n)
// }, 1000);
