// ES12：FinalizationRegistry类
const finalRegistry = new FinalizationRegistry((value) => {
  console.log(`注册在finalRegistry的对象，${value}对象被销毁了`)
})

let obj = { name: "why" }
let info = { age: 18 }

finalRegistry.register(obj, "obj")
finalRegistry.register(info, "info")

// GC不会实时的回收被销毁的对象，而是在下一次GC的时候才会清除(不定时)
obj = null
info = null