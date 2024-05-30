// 迭代器是帮助我们对某个数据结构进行遍历的对象
// 在JS中，迭代器也是一个具体的对象，这个对象需要符合迭代器协议(iterator protocol)
// 迭代器协议：
// 1. 迭代器必须有一个方法：next()
// 2. 迭代器的next()方法返回一个对象，这个对象有两个属性：
//   a. done: 表示迭代是否结束
//   b. value: 表示迭代的当前值

// 编写的一个迭代器对象
// const iterator = {
//   next: function () {
//     return {
//       done: true,
//       value: 123
//     }
//   }
// }

// 数组
const names = ["abc", "cba", "nba"]

// 创建一个迭代器对象来访问数组
let index = 0
const namesIterator = {
  next: function () {
    if (index < names.length) {
      return { done: false, value: names[index++] }
    } else {
      return { done: true, value: undefined }
    }
  }
}

console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())