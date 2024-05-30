// js线程、其他线程、事件队列形成了事件循环
console.log("script start")

// 业务代码
setTimeout(() => {

}, 1000)

console.log("后续代码~")


console.log("script end")