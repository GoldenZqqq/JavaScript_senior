// CommonJS是一个规范，最初提出来是在浏览器以外的地方使用
// 使用另外一个模块导出的对象，就要进行导入 require
const { name, age, sum } = require('./why.js')

// console.log(aaa)
// console.log(bbb)

console.log(name)
console.log(age)
console.log(sum(20, 30))