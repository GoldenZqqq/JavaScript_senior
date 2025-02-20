function createObject (o) {
  function Fn () { }
  Fn.prototype = o
  return new Fn()
}

function inheritPrototype (SubType, SuperType) {
  SubType.prototype = createObject(SuperType.prototype)
  Object.defineProperty(SubType.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: SubType
  })
}


function Person () {

}

function Student () {

}

inheritPrototype(Student, Person)

console.log(Person.prototype.__proto__)

var stu = new Student()
// instanceof 判断 stu.__proto__ 是否出现在 Student 的原型链中
console.log(stu instanceof Student) // true
console.log(stu instanceof Person) // true
console.log(stu instanceof Object) // true