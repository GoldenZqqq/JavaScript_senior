class Person {

}

function mixinRunner (BaseClass) {
  class NewClass extends BaseClass {
    running () {
      console.log("running~")
    }
  }
  return NewClass
}

function mixinEater (BaseClass) {
  class NewClass extends BaseClass {
    eating () {
      console.log("eating~")
    }
  }
  return NewClass
}

// 在JS中只能有一个父类：单继承
class Student extends Person { }

var NewStudent = mixinEater(mixinRunner(Student))
var ns = new NewStudent()
ns.running()
ns.eating()