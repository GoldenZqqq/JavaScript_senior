// Promise有哪些对象方法
// console.log(Object.getOwnPropertyDescriptors(Promise.prototype))

const promise = new Promise((resolve, reject) => {
  resolve("哈哈哈哈哈哈")
})

// 1.同一个Promise可以被多次调用then方法
// 当resolve方法被回调时，所有的then方法传入的回调函数都会被调用
// promise.then(res => {
//   console.log("res1:", res)
// })
// promise.then(res => {
//   console.log("res2:", res)
// })
// promise.then(res => {
//   console.log("res3:", res)
// })


// 2.then方法传入的回调函数是可以有返回值的
//  then方法本身也是有返回值的，它的返回值是Promise

//  2.1 如果返回的是一个普通值(数值/字符串/普通对象/undefined)，那么这个值会被当作一个新的Promise的resolve值
// promise.then(res => {
//   // return "aaaaa"
// }).then(res => {
//   console.log("res:", res)
//   return "bbbbb"
// })

//  2.2 如果返回的是一个Promise
// promise.then(res => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(111111)
//     }, 3000)
//   })
// }).then(res => {
//   console.log("res:", res)
// })

//  2.3 如果返回的是一个对象，并且该对象实现了thenable
promise.then(res => {
  return {
    then: function (resolve, reject) {
      resolve(22222)
    }
  }
}).then(res => {
  console.log("res:", res)
})
