// 类的声明
class Person {

}

// 类的表达式
// var Animal = class { }

// 研究类的特点(与构造函数相似)
console.log(Person.prototype)
console.log(Person.prototype.__proto__)
console.log(Person.prototype.constructor)
console.log(typeof Person) // function

var p = new Person()
console.log(p.__proto__ === Person.prototype) // true