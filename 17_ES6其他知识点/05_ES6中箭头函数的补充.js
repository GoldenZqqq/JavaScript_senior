// function foo() {

// }

// console.log(foo.prototype)
// const f = new foo()
// f.__proto__ = foo.prototype

var bar = () => {
  console.log(this, arguments)
}

console.log(bar.prototype)

// bar is not a constructor
// 箭头函数不能通过new的方式来调用
const b = new bar()

