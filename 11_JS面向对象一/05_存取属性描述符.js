var obj = {
  name: 'why',
  age: 18,
  _address: '北京市'
}

// 存取属性描述符
// 1.隐藏某一个私有属性不，希望直接被外界使用和赋值
// 2.如果我们希望截获某一个属性它访问和设置值的过程时，也会使用存取属性描述符
// Vue2中响应式原理：Object.defineProperty拿到data中的值，使用如下
// Object.keys(obj).forEach((key) => {
//   Object.defineProperty(obj, key, {
//     get: function () {},
//     set: function () {}
//   })
// })

Object.defineProperty(obj, "address", {
  enumerable: true,
  configurable: true,
  get: function () {
    foo()
    return this._address
  },
  set: function (value) {
    bar()
    this._address = value
  }
})

console.log(obj.address)

obj.address = "上海市"
console.log(obj.address)

function foo () {
  console.log("获取了address的值")
}

function bar () {
  console.log("设置了address的值")
}