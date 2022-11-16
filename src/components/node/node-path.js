const path = require('path')

/* 
* 一、basename
* 1. 返回路径中最后的部分 一般来说就是文件名
* 2. 第二个参数可设置可不设置 不设置会返回完整文件名
* 3. 设置的时候 如果找到相应后缀 就省略后缀 没找到也返回完整文件名
* 4. 处理目录路径的时候 结尾有分隔符 分隔符被忽略
*/
console.log(path.basename(__filename,'.css'))
/**
 * 二、 dirname
 * 1. 返回url的绝对路径
 */

console.log(path.dirname(__filename))

/**
 * 三、 扩展名  extname
 * 1. .js .css等后缀
 * 2. 没有后缀返回空
 */

console.log(path.extname(__filename))


/**
 * 四、 解析路径
 * root: 哪个盘
 * dir: 绝对路径
 * base: 文件名+后缀
 * ext: 后缀名
 * name: 文件名
 */
console.log(path.parse(__filename))

/**
 * 五、序列化路径
 * 1. 将解析的路径对象 序列化成路径
 */
console.log(path.format(path.parse(__filename)))

/**
 * 六、是否为绝对路径
 * 一般以/开头都会判断为绝对路径
 */
console.log(path.isAbsolute('/b/v.js'))

/**
 * 七、拼接路径
 * 其实是将字符串用/来拼接 /只存在一个
 */

console.log(path.join('a','/b','//c','jindex')) 

/**
 * 八、规范化路径
 * 就是将不规范的路径 规范化
 */
console.log(path.normalize('///a////v///as/d/as/d/asd//asd/asd/'))

/**
 * 九、绝对路径
 * 将参数和工作目录拼接上
 * 出现/ 就代表是自定义路径
 */
console.log(path.resolve('/a','../b'))