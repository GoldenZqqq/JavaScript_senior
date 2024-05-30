// 父类：公共属性和方法
function Person (name, age, friends) {
  // this = stu
  this.name = name
  this.age = age
  this.friends = friends
}

Person.prototype.eating = function () {
  console.log(this.name + "eating~")
}

// 子类：特有属性和方法
function Student (name, age, friends, sno) {
  Person.call(this, name, age, friends)
  this.sno = 111
}

// 直接将父类的原型赋值给子类，作为子类的原型
// 不要这么说，因为这么做意味着以后修改了子类原型对象的某个引用时，父类原型对象的引用类型也会被修改
Student.prototype = Person.prototype

Student.prototype.studying = function () {
  console.log(this.name + "studying~")
}

// name/sno
var stu = new Student("why", 18, ["kobe", 111])
console.log(stu)
stu.eating()
