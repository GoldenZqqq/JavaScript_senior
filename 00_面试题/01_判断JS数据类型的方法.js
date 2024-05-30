// 1.typeof:只能判断基本数据类型，返回一个字符串 缺点: 判断引用类型不精确
// typeof null => object   typeof array  => object    typeof undefined => undefined


// 2.instanceof 判断左边的对象的__proto__ 能不能找到右边函数的prototype,底层是通过原型链
let arr = [1, 2, 3]
// instanceof 的原理
function myInstanceof (obj, fun) {
  let protoType = fun.prototype
  let objProto = obj.__proto__
  while (true) {
    if (objProto === null) {
      return false
    }
    if (protoType === objProto) {
      return true
    }

    objProto = objProto.__proto__
  }
}
console.log(myInstanceof(new Function(), Array))


//  3. 通过 constructor来进行判断,缺点: 构造函数可以被修改掉
function Test () { }
let test = new Test()
console.log(test.constructor === Test)

let test2 = new Test()
test2.constructor = Array
console.log(test2.constructor === Test)


// 4. 通过Object.prototype.toString.call(对象)
Object.prototype.toString.call({})
// '[object Object]'

Object.prototype.toString.call([])
// '[object Array]'

Object.prototype.toString.call(1)
// '[object Number]'

Object.prototype.toString.call(function () { })
// '[object Function]'

Object.prototype.toString.call(Symbol())
// '[object Symbol]'

Object.prototype.toString.call('')
// '[object String]'

Object.prototype.toString.call(undefined)
// '[object Undefined]'

Object.prototype.toString.call(null)
// '[object Null]'