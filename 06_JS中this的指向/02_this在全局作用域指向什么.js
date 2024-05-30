// 在大多数情况下，this都是出现在函数中
// 在全局作用域下
// 浏览器：window(GlobalObject)
// node环境： {}   node环境下执行将本js文件当做一个模块module -> 加载 -> 编译 -> 放到一个函数中 -> 执行这个函数.apply
console.log(this)
// console.log(window);