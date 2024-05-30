var name = "why"

foo(123)
function foo (num) {
  console.log(m)
  var m = 10
  var n = 20

  console.log(name);
}

/*
  1.代码被解析时，v8引擎内部会帮助我们创建一个对象(GolbalObject)
  2.运行代码
    2.1. v8引擎为了执行代码，v8引擎内部会有一个执行上下文栈(Execution Context Stack,ECS)(函数调用栈)
    2.2. 因为我们执行的是全局代码，为了全局代码能够正常的执行，需要创建 全局执行上下文(Global Execution Context)(全局代码需要被执行时才会创建)
*/
// var GlobalObject = {
//   String: '类',
//   window: GlobalObject,
//   name: undefined,
//   foo: 0xa00  // 内存地址
// }