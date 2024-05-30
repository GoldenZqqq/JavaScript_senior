// Node中的事件循环通过libuv来实现
// Node的事件循环更复杂
// 宏任务：setTimeout - setInterval - IO事件 - setImmediate - close事件
// 微任务：Promise的then回调 - process.nextTick - queueMicrotask

// 但是Node中的事件循环不只是 宏任务队列和微任务队列
// 微任务队列：
//    1.next tick queue: process.nextTick
//    2.other queue: Promise的then回调、queueMicrotask
// 宏任务队列：
//    1.timer queue: setTimeout、setInterval
//    2.poll queue: IO事件
//    3.check queue: setImmediate
//    4.close queue: close事件

async function async1 () {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}

async function async2 () {
  console.log('async2')
}

console.log('script start')

setTimeout(function () {
  console.log('setTimeout0')
}, 0)

setTimeout(function () {
  console.log('setTimeout2')
}, 300)

setImmediate(() => console.log('setImmediate'))

process.nextTick(() => console.log('nextTick1'))

async1()

process.nextTick(() => console.log('nextTick2'))

new Promise(function (resolve) {
  console.log('promise1')
  resolve()
  console.log('promise2')
}).then(function () {
  console.log('promise3')
})

console.log('script end')

// script start
// async1 start
// async2  
// promise1
// promise2
// script end
// nextTick1
// nextTick2
// async1 end
// promise3
// setTimeout0
// setImmediate
// setTimeout2