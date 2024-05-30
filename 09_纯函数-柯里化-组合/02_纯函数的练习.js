// foo函数是否是一个纯函数？
// 1.相同的输入一定产生相同的输出
// 2.在执行的过程中不会产生任何的副作用
function foo (num1, num2) {
  return num1 * 2 + num2 * num2
}

// bar不是一个纯函数，因为他修改了外界的变量
var name = "abc"
function bar () {
  console.log("bar的其他代码执行")
  name = "cba"
}

bar()
console.log(name)

// baz也不是一个纯函数，因为修改了传入的参数
function baz (info) {
  info.age = 100
}

var obj = { name: 'why', age: 18 }
baz(obj)
console.log(obj)

// test是否是一个纯函数？ 是一个纯函数
// function test (info) {
//   return {
//     ...info,
//     age: 100
//   }
// }

// test(obj)

// React的函数式组件(类组件)
// function HelloWorld (props) {
//   props.info = {}
//   props.info.name = "why"
// }

// <HelloWorld info="{}" />