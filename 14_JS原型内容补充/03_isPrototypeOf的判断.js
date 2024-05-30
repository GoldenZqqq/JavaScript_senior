function Person () {

}

var p = new Person()

console.log(p instanceof Person)
// 判断 p 有没有出现在 Person.prototype 对象的原型链上
console.log(Person.prototype.isPrototypeOf(p))

var obj = {
  name: "why",
  age: 18
}

var info = Object.create(obj)

// console.log(info instanceof obj)
console.log(obj.isPrototypeOf(info))