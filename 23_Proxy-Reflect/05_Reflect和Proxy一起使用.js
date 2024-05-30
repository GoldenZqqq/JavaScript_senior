const obj = {
  name: "why",
  age: 18
}

const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    console.log("get----------")
    return Reflect.get(target, key)
  },
  set: function (target, key, newValue, receiver) {
    console.log("set----------")
    // 会返回一个boolean值，表示是否设置成功
    const result = Reflect.set(target, key, newValue)
    if (result) { } else { }
  }
})

objProxy.name = "kobe"
console.log(objProxy.name)
