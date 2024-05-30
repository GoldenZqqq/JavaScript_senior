function foo () {
  // Promise
  return new Promise((resolve, reject) => {
    resolve("success message")
    // reject("failure message")
  })
}

// main.js
const fooPromise = foo()
// then方法传入的回调函数，会在Promise执行resolve函数时被回调
fooPromise.then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})

// // catch方法传入的回调函数，会在Promise执行reject函数时被回调
// fooPromise.catch(() => {})


// 传入的这个函数被称之为 executor
// > resolve: 回调函数，在成功时回调resolve函数
// > reject: 回调函数，再失败时回调reject函数
// const promise = new Promise((resolve, reject) => {
//   // console.log("promise传入的函数被执行了")
//   // resolve()
//   reject()
// })

// promise.then(() => {

// })

// promise.catch(() => {

// })