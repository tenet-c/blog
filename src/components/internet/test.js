const MyTransformCode = require('./myTransFromCode')

const ts = new MyTransformCode()


const demo = ts.encode('chm123123123123',123)
const demo2 = ts.decode(demo)
console.log(ts.getPackageLeng(demo))
console.log(demo2)