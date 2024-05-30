var obj = {
  name: "why",
  age: 18
}

var info = Object.create(obj, {
  address: {
    value: "上海",
    enumerable: true
  }
})

// hasOwnProperty 方法判断属性是否是自己的属性(不包括原型)
console.log(info.hasOwnProperty("address"))
console.log(info.hasOwnProperty("name"))

// in 操作符：不管在当前对象还是原型中返回的都是true
console.log("address" in info)
console.log("name" in info)

// for in
for (var key in info) {
  console.log(key)
}