function foo (a, b) {
  console.log(a + b)
}

const fooProxy = new Proxy(foo, {
  // 对apply操作符进行监听
  apply: function (target, thisArg, argArray) {
    console.log("对foo函数进行了apply调用")
    return target.apply(thisArg, argArray)
  },
  // 对new操作符进行监听
  construct: function (target, argArray, newTarget) {
    console.log("对foo函数进行了new调用")
    return new target(...argArray)
  }
})

fooProxy.apply({}, ["abc", "cba"])
new fooProxy("abc", "cba")