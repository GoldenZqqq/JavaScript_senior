/**
 *  面试题一
 */
function eventloop1 () {
  setTimeout(function () {
    console.log("setTimeout1")
    new Promise(function (resolve) {
      resolve()
    }).then(function () {
      new Promise(function (resolve) {
        resolve()
      }).then(function () {
        console.log("then4")
      })
      console.log("then2")
    })
  })

  new Promise(function (resolve) {
    console.log("promise1")
    resolve()
  }).then(function () {
    console.log("then1")
  })

  setTimeout(function () {
    console.log("setTimeout2")
  })

  console.log(2)

  queueMicrotask(() => {
    console.log("queueMicrotask1")
  })

  new Promise(function (resolve) {
    resolve()
  }).then(function () {
    console.log("then3")
  })

  // promise1
  // 2
  // then1
  // queueMicrotask1
  // then3
  // setTimeout1
  // then2
  // then4
  // setTimeout2
}

eventloop1()

/**
 *  面试题二
 */
function eventloop2 () {
  async function async1 () {
    console.log('async1 start')
    await async2()
    console.log('async1 end') // 加入微任务队列
  }

  async function async2 () {
    console.log('async2')
  }

  console.log('script start')

  setTimeout(function () {
    console.log('setTimeout')
  }, 0)

  async1()

  new Promise(function (resolve) {
    console.log('promise1')
    resolve()
  }).then(function () {
    console.log('promise2')
  })

  console.log('script end')

  // script start
  // async1 start
  // async2
  // promise1
  // script end
  // async1 end
  // promise2
  // setTimeout
}

eventloop2()

/**
 *  面试题三
 */
function eventloop3 () {
  Promise.resolve().then(() => {
    console.log(0)
    // 1.直接return一个值 相当于resolve(4)
    // return 4

    // 2.return thenable的值
    return {
      then: function (resolve) {
        // 大量的计算
        resolve(4)
      }
    }

    // 3.return Promise
    // 不是普通的值, 多加一次微任务
    // Promise.resolve(4), 多加一次微任务
    // 一共多加两次微任务
    return Promise.resolve(4)
  }).then((res) => {
    console.log(res)
  })

  Promise.resolve().then(() => {
    console.log(1)
  }).then(() => {
    console.log(2)
  }).then(() => {
    console.log(3)
  }).then(() => {
    console.log(5)
  }).then(() => {
    console.log(6)
  })

  // 1.return 4
  // 0
  // 1
  // 4
  // 2
  // 3
  // 5
  // 6

  // 2.return thenable
  // 0
  // 1
  // 2
  // 4
  // 3
  // 5
  // 6

  // 3.return promise
  // 0
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
}

eventloop3()

/**
 *  面试题四
 */
function eventloop4 () {
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
  // nexttick1
  // nexttick2
  // async1 end
  // promise3
  // settimetout0
  // setImmediate
  // setTimeout2
}

eventloop4()


