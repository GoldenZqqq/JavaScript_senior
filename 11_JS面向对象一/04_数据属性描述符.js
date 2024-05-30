// name和age虽然没有使用属性描述符来定义，但是他们也是具备对应的特性的
// value: 赋值的value
// configurable: true
// enumerable: true
// writable: true
var obj = {
  name: 'why',
  age: 18
}

// 数据属性描述符
// 用了属性描述符，那么就会有默认的特性
Object.defineProperty(obj, "address", {
  // 很多配置
  value: '北京市', // 默认值为undefined
  // 该特性不可删除/也不可重新定义属性描述符
  configurable: false, // 默认值为false
  // 该特性配置对应的属性(address)是否可以被枚举
  enumerable: true, // 默认值为false
  // 该特性是否是可以赋值(写入值)
  writable: false // 默认值为false
})

// 测试configurable特性的作用
// delete obj.name
// console.log(obj.name)
// delete obj.address
// console.log(obj.address)

// 测试enumerable特性的作用
// console.log(obj)
// for (var key in obj) {
//   console.log(key)
// }
// console.log(Object.keys(obj))

// 测试writable特性的作用
// obj.address = "上海市"
// console.log(obj.address)