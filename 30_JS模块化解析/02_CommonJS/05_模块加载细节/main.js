console.log("main.js代码开始运行")
// 结论一：模块在第一次被引入时，模块中的js代码会被运行一次
// 结论二：模块被多次引入时，会缓存，最终只加载(运行)一次
// 结论三：如果有循环引入，那么加载顺序是什么？
require("./foo")
require("./foo")
require("./foo")

console.log("main.js代码后续运行")
