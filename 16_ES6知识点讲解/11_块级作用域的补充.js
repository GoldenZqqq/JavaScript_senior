const names = ["abc", "cba", "nba"]

// 不可以使用const 因为有++的操作
for (let i = 0; i < names.length; i++) {
  console.log(names[i])
}


// for...of: ES6新增的遍历数组(对象)的方法
// 可以使用const
for (let item of names) {
  console.log(item)
}

// console.log(item)