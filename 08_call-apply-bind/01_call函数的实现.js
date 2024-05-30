// 给所有的函数添加一个zqcall的方法
Function.prototype.zqcall = function (thisArg, ...args) {
  // 在这里可以去执行被调用的那个函数(foo)
  // 问题：需要获取到是哪一个函数执行了zqcall
  // 1.获取需要被执行的函数
  var fn = this

  // 2.对thisArg转成对象类型(防止它传入的是非对象类型，即使原本就是对象类型也没问题) edge case边界判断
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

  // 3.调用需要被执行的函数
  thisArg.fn = fn
  var result = thisArg.fn(...args)
  delete thisArg.fn

  // 4.将最终的结果返回出去
  return result
}

function foo () {
  console.log('foo函数被执行', this);
}

function sum (num1, num2) {
  console.log('sum函数被执行', this, num1, num2);
  return num1 + num2
}

// 系统的函数的call方法
// foo.call(undefined)
// var result = sum.call({}, 20, 30)
// console.log("系统调用的结果：", result)

// 自己实现的函数的zqcall方法
// 默认进行隐式绑定
// foo.zqcall({ name: "why" })
foo.zqcall(undefined)
var result = sum.zqcall("abc", 20, 30)
console.log("zqcall调用的结果：", result)
