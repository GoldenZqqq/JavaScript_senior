const obj = {
  name: "why",
  age: 18,
  friends: {
    name: "kobe"
  },
  hobbies: ["篮球", "足球"],
  foo: function () {
    console.log("foo function")
  }
}

// 将obj对象的内容放到info变量中
// 1.引用赋值
const info = obj
obj.age = 100
console.log(info.age)

// 2.浅拷贝
const info2 = { ...obj }
obj.age = 1000
console.log(info2.age)

obj.friends.name = "james"
console.log(info2.friends.name)

// 深拷贝：stringify和parse来实现(原对象中有函数时不可用)
const jsonString = JSON.stringify(obj)
const info3 = JSON.parse(jsonString)
obj.friends.name = "curry"
console.log(info3.friends.name)