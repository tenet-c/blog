class MyTransformCode{
  constructor(){
    // 申请16个字节 前八个放编号 后八个放body长度
    this.packageHeaderLen = 4
    this.serialNum = 1 // 消息编号
    this.serialLen = 2 // 存放body长度的位置
  }

  // 封包
  encode(data,serialNum){
    // 目的是将头信息和数据用二进制 拼接到一起
    const dataBuf = Buffer.from(data)
    const headerBuf = Buffer.alloc(this.packageHeaderLen)
    headerBuf.writeInt16BE(serialNum || this.serialNum)
    if(!serialNum){
      this.serialNum++
    }
    headerBuf.writeUInt16BE(dataBuf.length,this.serialLen)
    return Buffer.concat([headerBuf,dataBuf])
  }

  // decode
  decode(buffer){
    const serialNum = buffer.slice(0,this.packageHeaderLen)
    const body = buffer.slice(this.packageHeaderLen)
    // 要返回包的编号 body的长度 body的内容
    return {
      serialNum:serialNum.readUInt16BE(),
      dataLength:serialNum.readInt16BE(this.serialLen),
      body:body.toString()
    }
  }

  // 获取包长度
  getPackageLeng(buffer){
    if(buffer.length < this.packageHeaderLen){
      return 0
    }else {
      return this.packageHeaderLen + buffer.readInt16BE(this.serialLen)
    }
  }
}

module.exports = MyTransformCode