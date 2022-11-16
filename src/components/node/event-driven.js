
// 引入node内置的event模块
const EventsEmitter = require('events')

const myEvent = new EventsEmitter()

// on订阅事件 
myEvent.on('事件1',()=>{
  // 回调函数属于监听事件
  console.log('事件1触发')
})
// 发布
myEvent.emit('事件1')