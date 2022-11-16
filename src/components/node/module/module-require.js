// 1.分析路径
// 2.缓存优化
// 3.分析文件类型
// 4.编译执行
const path = require('path')
const fs = require('fs')

class Module{
  static _extensions = {
    '.js'(){},
    '.json'(){}
  }
  static cache = {}
  constructor(id){
    this.id = id
    this._exports = {}
  }
  static resolveFilename(filename){
    // 返回绝对路径
    const absPath = path.resolve(__dirname, filename)
    // 这里应该 判断各种格式 例如是不是字符串 默认格式正确
    // 判断是路径 
    if(fs.existsSync(absPath)){
      return absPath
    } else {
      // 不存在的话 就去找文件吧
      const suffix = Object.keys(Module._extensions)
      for(let i of suffix){
        let newPath = absPath+i
        if(fs.existsSync(newPath)){
          return newPath
        }
      }
    }
   throw new Error(`${filename} 没找到`)
  }

  get id(){
    return this._id
  }
  set id(id){
   this._id =id
  }

  load(){
    // 文件类型
    const extname = path.extname(this.id)
    console.log(extname)
  }
}

function myRequire(filename){
  // 1.分析路径 获取绝对路径
  let modulePath = Module.resolveFilename(filename)
  // 2.实现缓优先
  const cacheModule = Module.cache[modulePath]
  if (cacheModule) return cacheModule.export
  // 3.创建空对象加载目标模块
  const module = new Module(modulePath)
  // 4.缓存已加载的模块
  Module.cache[modulePath] = module
  // 5.具体的load 编译执行
  module.load()
  // 6.返回
  // return module.export
}
const obj =  myRequire('./requeire-a')
