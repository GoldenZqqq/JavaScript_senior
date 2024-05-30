// ES12：WeakRef类 
// WeakRef.prototype.deref:
// >如果原对象没有销毁，那么可以获取到元对象
// >如果原对象已经销毁，那么获取到的是undefined
const finalRegistry = new FinalizationRegistry((value) => {
  console.log(`注册在finalRegistry的对象，${value}对象被销毁了`)
})

let obj = { name: "why" }
let info = new WeakRef(obj)

finalRegistry.register(obj, "obj")

// console.log(info.deref().name)

obj = null

setTimeout(() => {
  console.log(info.deref()?.name)
}, 10000)