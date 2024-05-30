// 父类：公共属性和方法
function Person () {
  this.name = "why"
  this.friends = []
}

Person.prototype.eating = function () {
  console.log(this.name + "eating~")
}

// 子类：特有属性和方法
function Student () {
  this.sno = 111
}

var p = new Person()
Student.prototype = p

Student.prototype.studying = function () {
  console.log(this.name + "studying~")
}

var stu = new Student()

// console.log(stu.name)
// stu.eating()


// 原型链实现继承的弊端：
// 1.弊端一：打印stu对象，继承的属性是看不到的
console.log(stu)

// 2.弊端二：创建出来两个stu的对象
const stu1 = new Student()
const stu2 = new Student()

// 直接修改对象上的属性，是给本对象添加了一个新属性
stu1.name = "kobe"
console.log(stu2.name)

// 获取引用，修改引用中的值，会互相影响
// stu1.friends.push("kobe")

// console.log(stu1.friends)
// console.log(stu2.friends)

// 3.弊端三：在前面实现类的过程中都没有传递参数
var stu3 = new Student("lilei", 112)