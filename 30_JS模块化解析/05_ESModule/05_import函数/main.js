// import { name, age, foo } from './foo.js'

// console.log(name)

// import函数返回的结果是一个Promise，异步，不会阻塞后续代码执行
import("./foo.js").then(res => {
  console.log("res:", res.name)
})

console.log("后续的代码都是不会运行的~")

// ES11新增的特性
// meta属性本身也是一个对象: { url: "当前模块所在的路径" }
console.log(import.meta)
