function add1 (x, y, z) {
  return x + y + z
}

function add2 (x, y, z) {
  x = x + 2
  y = y * 2
  z = z * z
  return x + y + z
}

function makeAdder (count) {
  count = count * count
  return function (num) {
    return count + num
  }
}

function log (date, type, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}]: [${message}]`);
}

// 柯里化函数的实现zqCurrying
function zqCurrying (fn) {
  function curried (...args) {
    // 判断当前已经接收的参数个数和参数本身需要接受的参数是否已经一致了
    // 1.当已经传入的参数 大于等于 需要的参数时，就执行函数
    if (args.length >= fn.length) {
      // fn(...args)
      // fn.call(this,...args)
      return fn.apply(this, args)
    } else {
      // 当已经传入的参数 小于 需要的参数时，需要返回一个新的函数，继续来接收参数
      function curried2 (...args2) {
        // 接收到参数后，需要递归调用curried来检查参数的个数是否达到
        return curried.apply(this, [...args, ...args2])
      }
      return curried2
    }
  }
  return curried
}

var curryAdd = zqCurrying(add1)

console.log(curryAdd(10, 20, 30))
console.log(curryAdd(10, 20)(30))
console.log(curryAdd(10)(20)(30))

// function foo (x, y, z, m, n) {

// }
// console.log(foo.length);


// this绑定
// function foo (x, y, z) {
//   return x + y + z
// }

// foo.call({}, 1, 2, 3)

// var curryFoo = zqCurrying(foo)
// curryFoo.call({}, 1)