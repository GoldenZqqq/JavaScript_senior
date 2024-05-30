
// ------------------------------- 测试代码 ----------------------------------------
const promise = new ZQPromise((resolve, reject) => {
  // resolve(1111) // resolved/fulfilled
  reject(2222)
  // throw new Error("Executor error message")
})

promise.then(res => {
  console.log("res:", res)
}).catch(err => {
  console.log("err:", err)
})