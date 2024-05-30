
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