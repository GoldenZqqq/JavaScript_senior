// 宏任务队列(macrotask queue)和微任务队列(mircrotask queue)
//    宏任务队列：setTimeout - setInterval - ajax - DOM监听 - UI Rendering
//    微任务队列：queueMicrotask() - Promise的then回调 - Mutation Observer API
// 规范：在执行任何的宏任务之前，都需要先保证微任务队列已经被清空了
setTimeout(() => {
  console.log("setTimeout")
}, 1000)

// 微任务队列
queueMicrotask(() => {
  console.log("queueMicrotask")
})

Promise.resolve().then(() => {
  console.log("Promise then")
})


function foo () {
  console.log("foo")
}

function bar () {
  console.log("bar")
  foo()
}

bar()

console.log("其他代码")