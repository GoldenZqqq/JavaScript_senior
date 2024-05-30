var obj = {
  name: "why",
  age: 18
}

// [[get]]操作
// 1.在当前对象中查找属性
// 2.如果没有找到，这个时候会去(__proto__)对象上查找

obj.__proto__ = {
  // address: '广州'
}

// 原型链
obj.__proto__.__proto__ = {
  // address: "北京"
}
obj.__proto__.__proto__.__proto__ = {
  address: '上海'
}

console.log(obj.address)