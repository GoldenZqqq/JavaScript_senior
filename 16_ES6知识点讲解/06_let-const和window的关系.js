// VO/AO/GO -> 早期的标准
// 早期的 ECMA3 及之前  VO就是GO就是window
// 早期说法：
// 每一个执行上下文会被关联到一个变量环境(VO),在源代码中的变量和函数声明会被作为属性添加到VO中。
// 对于函数来说，参数也会被添加到VO中。
// var foo = "foo"
// var message = "Hello World"

// console.log(window.foo)
// console.log(window.message)

// window.message = "哈哈哈"
// console.log(message)


// 现在说法：
// 每一个执行上下文会被关联到一个变量环境(VariableEnvironment)中，在执行代码中变量和函数的声明会作为环境记录(Environment Record)
// 添加到变量环境中。对于函数来说，参数也会被作为环境记录添加到变量环境中。
// v8中是通过VariableMap的一个hashmap来实现变量的存储的。  variable_
// 那么window对象那？而window对象是早期的GO对象，在最新的实现中其实是浏览器添加的全局对象，并且一直保持了window和var之间值的相等性。
let foo = "foo"
