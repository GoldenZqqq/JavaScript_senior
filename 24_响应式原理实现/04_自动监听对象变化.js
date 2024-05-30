class Depend {
  constructor() {
    this.reactiveFns = []
  }

  addDepend (reactiveFn) {
    this.reactiveFns.push(reactiveFn)
  }

  notify () {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

// 封装一个响应式的函数
const depend = new Depend()
function watchFn (fn) {
  depend.addDepend(fn)
}

// 对象的响应式
const obj = {
  // 每个属性对应一个depend对象
  name: "why",
  age: 18,
}

// 监听对象的属性变化：Proxy(Vue3)/Object.defineProperty(Vue2)
const objProxy = new Proxy(obj, {
  get: function (target, key, recevier) {
    return Reflect.get(target, key, recevier)
  },
  set: function (target, key, newValue, receiver) {
    // 自动监听对象变化
    Reflect.set(target, key, newValue, receiver)
    depend.notify()
  }
})

watchFn(function () {
  const newName = objProxy.name
  console.log("你好啊，李银河")
  console.log("Hello World")
  console.log(objProxy.name)
})

watchFn(function () {
  console.log(objProxy.name, "demo function ------")
})



watchFn(function () {
  console.log(objProxy.age, "age 发生变化时需要执行的函数1")
})

watchFn(function () {
  console.log(objProxy.age, "age 发生变化时需要执行的函数2")
})

objProxy.name = "kobe"
objProxy.name = "james"
objProxy.name = "hurry"

objProxy.age = 100