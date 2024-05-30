function add (x, y, z) {
  return x + y + z
}

// 柯里化函数的实现zqCurrying
function zqCurrying (fn) {
  function curried (...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      function curried2 (...args2) {
        return curried.apply(this, [...args, ...args2])
      }
      return curried2
    }
  }
  return curried
}

var curryAdd = zqCurrying(add)

console.log(curryAdd(10, 20, 30))
console.log(curryAdd(10, 20)(30))
console.log(curryAdd(10)(20)(30))