function Person (name, age, height, address) {
  this.name = name
  this.age = age
  this.height = height
  this.address = address
}

Person.prototype.eating = function () {
  console.log(this.name + "吃饭")
}

Person.prototype.running = function () {
  console.log(this.name + "在跑步")
}

var p1 = new Person("why", 18, 1.88, "北京")
var p2 = new Person("kobe", 20, 1.98, "洛杉矶")

p1.eating()
p2.eating()