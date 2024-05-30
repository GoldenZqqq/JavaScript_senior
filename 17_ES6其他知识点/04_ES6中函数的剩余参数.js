// 剩余参数只包含那些没有对应形参的实参，而arguments对象包含了传给函数的所有实参
// arguments对象不是一个真正的数组，而rest参数是一个真正的数组，可以进行数组的所有操作
// rest参数是ES6中用来替代arguments的
// function foo(...args, m, n) {
//   console.log(m, n)
//   console.log(args)

//   console.log(arguments)
// }

// foo(20, 30, 40, 50, 60)


// rest parameters必须放到最后
// Rest parameter must be last formal parameter

// function foo(m, n = m + 1) {
//   console.log(m, n)
// }

// foo(10);
