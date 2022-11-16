const b1 = Buffer.alloc(10)
const b2 = Buffer.allocUnsafe(10)
const b3 = Buffer.from('脉动','utf-8')
console.log(b1,b2,b3)
// 传入数组时 如果是汉字  需要先转成16进制 再传进Buffer
// toString方法默认也是utf-8 

let buf = Buffer.alloc(5)
/**
 * fill
 * 将空间填满 空间不够就截取
 * 第二各参数为从哪里开始写入
 * 第三个参数为写入的结束位置
 */
 buf.fill('12' ,2,4)
// console.log(buf.toString())

/**
 * write
 * 写入空间并不填满
 * 第二各参数为从哪里开始写入
 * 第三个参数为写入的结束位置
 */
buf.write('123')


/**
 * toString
 * 将buffer 按照指定编码输出
 * 第一个参数指定编码 默认utf-8
 * 第二各参数为从哪里开始写入
 * 第三个参数为写入的结束位置
 */

console.log(buf.toString())

/**
 * slice()
 * 将buffer截取
 * 第一个各参数为从哪里开始写入 负数是从后开始
 * 第二个参数为写入的结束位置
 */
buf = Buffer.from('脉动东鹏')
const a =buf.slice(3)
console.log(a.toString(),buf.toString())

/**
 * indexOf()
 * 传入目标Buffer 查找是否存在
 * 第二个各参数为从哪里开始写入 负数是从后开始
 * 第三个参数为写入的结束位置
 * 存在找到下标位置 不存在返回-1
 */
buf = Buffer.from('脉动东鹏 脉动东鹏 东方树叶 特饮')
console.log(buf.indexOf('东方阿萨德'))

/**
 * copy() 
 * 核心是将被复制的 写入到复制目标中
 * 第二个各参数为从哪里开始写入 负数是从后开始
 * 第三个参数为写入的结束位置
 */

// buf.copy()
/**
 * concat()
 */
let aa1 = Buffer.from('aaa')
let bb1 = Buffer.from('bbb')
let c1 = Buffer.concat([aa1,bb1])
console.log(c1.toString())
/**
 * isBuffer()
 */
console.log(Buffer.isBuffer(buf))
