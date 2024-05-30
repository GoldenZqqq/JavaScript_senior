const s1 = Symbol()
const s2 = Symbol()

const obj = {
  name: "why",
  friend: {
    name: "kobe"
  },
  foo: function () {
    console.log("foo function")
  },
  [s1]: "abc",
  s2: s2
}

// 弊端2：当对象中有循环引用，无法对其进行拷贝
// obj.inner = obj

// 弊端1：当对象中有函数或 Symbol键值对，无法对其进行拷贝
const info = JSON.parse(JSON.stringify(obj))
console.log(info === obj)
obj.friend.name = "james"
console.log(info)