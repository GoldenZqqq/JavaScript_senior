// 规范：构造函数的首字母一般大写
function Person (name, age, height, address) {
  this.name = name
  this.age = age
  this.height = height
  this.address = address

  this.eating = function () {
    console.log(this.name + "在吃饭")
  }
  this.running = function () {
    console.log(this.name + "在跑步")
  }
}

var p1 = new Person("张三", 18, 1.88, "上海")
var p2 = new Person("李四", 20, 1.68, "北京")

console.log(p1)
// console.log(p1.__proto__.constructor)
console.log(p2)
