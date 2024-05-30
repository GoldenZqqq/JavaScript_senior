// 保存当前需要收集的响应式函数
let activeReactiveFn = null

class Depend {
  constructor() {
    this.reactiveFns = new Set()
  }

  depend () {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn)
    }
  }

  notify () {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

// 封装一个响应式的函数
function watchFn (fn) {
  activeReactiveFn = fn
  fn()
  activeReactiveFn = null
}

// 封装一个获取depend的函数
const targetMap = new WeakMap()
function getDepend (target, key) {
  // 根据target对象获取map的过程
  let map = targetMap.get(target)
  if (!map) {
    map = new Map()
    targetMap.set(target, map)
  }

  // 根据key获取depend对象
  let depend = map.get(key)
  if (!depend) {
    depend = new Depend()
    map.set(key, depend)
  }
  return depend
}

function reactive (obj) {
  return new Proxy(obj, {
    get: function (target, key, recevier) {
      // 根据target.key获取对应的depend
      const depend = getDepend(target, key)
      // 给depend对象中添加响应函数
      // depend.addDepend(activeReactiveFn)
      depend.depend()

      return Reflect.get(target, key, recevier)
    },
    set: function (target, key, newValue, receiver) {
      // 自动监听对象变化
      Reflect.set(target, key, newValue, receiver)
      // depend.notify()
      const depend = getDepend(target, key)
      depend.notify()
    }
  })
}

// 监听对象的属性变化：Proxy(Vue3)/Object.defineProperty(Vue2)
const objProxy = reactive({
  // 每个属性对应一个depend对象
  name: "why",
  age: 18,
})


const infoProxy = reactive({
  address: "广州市",
  height: 1.88
})
watchFn(() => {
  console.log(infoProxy.address)
})
infoProxy.address = "北京市"


const foo = reactive({
  name: 'foo'
})
watchFn(() => {
  console.log(foo.name)
})
foo.name = "bar"

