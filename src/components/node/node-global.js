// console.log(global)

// console.log(__filename)

// console.log(__dirname)

// console.log(this)  // 默认this是空对象 不是global

(function(){
  console.log(this == global) // true
})()