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

watchFn(function () {
  const newName = obj.name
  console.log("你好啊，李银河")
  console.log("Hello World")
  console.log(obj.name)
})

watchFn(function () {
  console.log(obj.name, "demo function ------")
})

obj.name = "kobe"
depend.notify()