function foo (num1, num2) {
  // 1.自己遍历
  // var newArr = []
  // for (var i = 0; i < arguments.length; i++) {
  //   newArr.push([arguments[i] * 10])
  // }
  // console.log(newArr)

  // 2.arguments转成array类型
  //  2.1 自己遍历arguments中所有的元素


  //  2.2 将arguments转成array
  // var newArr2 = Array.prototype.slice.call(arguments)
  // console.log(newArr2)

  // var newArr3 = [].slice.call(arguments)
  // console.log(newArr3)

  //  2.3 ES6的语法
  var newArr4 = Array.from(arguments)
  console.log(newArr4);
  var newArr5 = [...arguments]
  console.log(newArr5);
}

foo(10, 20, 30, 40, 50)

// 额外补充：Array中的slice实现
// Array.prototype.zqslice = function (start, end) {
//   var arr = this
//   start = start || 0
//   end = end || arr.length
//   var newArray = []
//   for (var i = start; i < end; i++) {
//     newArray.push(arr[i])
//   }
//   return newArray
// }

// var newArray = Array.prototype.zqslice.call(['aaaa', 'bbb', 'cccc'])
// console.log(newArray);

// var newArray = Array.prototype.zqslice.call(arguments, 1, 3)
// console.log(newArray);