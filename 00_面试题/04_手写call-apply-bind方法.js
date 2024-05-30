// 手写call方法
Function.prototype.zqCall = function (thisArg, ...args) {
  var fn = this

  thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : window

  thisArg.fn = fn
  var result = thisArg.fn(...args)
  delete thisArg.fn
  return result
}


// 手写apply方法
Function.prototype.zqApply = function (thisArg, argArray) {
  var fn = this

  thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : window

  thisArg.fn = fn
  argArray = argArray || []
  var result = thisArg.fn(...argArray)
  delete thisArg.fn

  return result
}


// 手写bind方法
Function.prototype.zqBind = function (thisArg, ...argArray) {
  var fn = this

  thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : window

  function proxy (...args) {
    thisArg.fn = fn

    var finalArgs = [...argArray, ...args]
    var result = thisArg.fn(...finalArgs)
    delete thisArg.fn

    return result
  }

  return proxy
}





/* 代码测试区域 */
function foo () {
  console.log("foo函数被调用", this)
}

function sum1 (num1, num2) {
  console.log('sum1函数被执行', this, num1, num2)
  return num1 + num2
}

function sum2 (num1, num2, num3, num4) {
  console.log("sum2函数被执行", this)
  console.log(num1, num2, num3, num4)
}

foo.zqCall("abc")
console.log(sum1.zqCall("abc", 20, 30))
console.log(sum1.zqApply("cba", [20, 30]))

var newSum = sum2.zqBind("abc", 10, 20)
newSum(30, 40)