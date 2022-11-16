const fs = require('fs')
const vm = require('vm')

const context = fs.readFileSync('text.txt', 'utf-8')
let a = 123
//1
// eval(context)
// console.log(a)

// // 2
// const fn = new Function('a' ,'return a++')
// console.log(fn())

// 3
vm.runInThisContext(context)
console.log(a)
