// 当遇到 yield 的时候 生成器暂停执行
// 当遇到 return 的时候 生成器就停止执行
function* foo () {
  console.log("函数开始执行~")

  const value1 = 100
  console.log("第一段代码：", value1)
  yield value1

  const value2 = 200
  console.log("第二段代码：", value2)
  yield value2

  const value3 = 300
  console.log("第三段代码：", value3)
  yield value3

  console.log("函数执行结束~")
  return "123"
}

// generator本质上是一个特殊的iterator
const generator = foo()
console.log("返回值1：", generator.next())
console.log("返回值2：", generator.next())
console.log("返回值3：", generator.next())
console.log("返回值4：", generator.next())