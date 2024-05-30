// 可迭代对象-一个对象，符合可迭代协议(iterable protocol)
// 可迭代协议：
// 1. 必须有一个方法：[Symbol.iterator]方法
// 2. 该方法返回一个迭代器对象

// iterableObj对象就是一个可迭代对象
const iterableObj = {
  names: ["abc", "cba", "nba"],
  [Symbol.iterator]: function () {
    let index = 0
    return {
      next: () => {
        if (index < this.names.length) {
          return { done: false, value: this.names[index++] }
        } else {
          return { done: true, value: undefined }
        }
      }
    }
  }
}

// console.log(iterableObj[Symbol.iterator])

// 1.第一次调用iterableObj[Symbol.iterator]函数
// const iterator = iterableObj[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// // 2.第二次调用iterableObj[Symbol.iterator]函数
// const iterator1 = iterableObj[Symbol.iterator]()
// console.log(iterator1.next())
// console.log(iterator1.next())
// console.log(iterator1.next())
// console.log(iterator1.next())

// 3.for...of可以遍历的东西必须是一个可迭代对象
const obj = {
  name: "why",
  age: 18
}

// for...of就是迭代器不断执行next()方法的语法糖，直到返回的done为true结束遍历
for (const item of iterableObj) {
  console.log(item)
}