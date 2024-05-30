var names = ["cba", "acb", "ncb", "张三", "李四", "王五", "kobe", "why", "losery", "jack"]

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this._address = "北京"
  }

  // 普通的实例方法
  // 通常通过创建出来的对象进行访问
  // var p = new Person()
  // p.eating()
  eating () {
    console.log(this.name + "eating~")
  }

  running () {
    console.log(this.name + "running~")
  }

  // 类的访问器方法
  get address () {
    console.log("拦截访问操作")
    return this._address
  }

  set address (newAddress) {
    console.log("拦截设置操作")
    this._address = newAddress
  }

  // 类的静态方法(类方法)
  // 可以直接通过类名进行访问 Person.createPerson()
  static randomPerson () {
    // Math.floor() 向下取整     Math.random() 随机取一个0-1之间的数
    var nameIndex = Math.floor(Math.random() * names.length)
    var name = names[nameIndex]
    var age = Math.floor(Math.random() * 100)
    return new Person(name, age)
  }
}

var p = new Person("why", 18)
p.eating()
p.running()

console.log(p.address)
p.address = "上海"
console.log(p.address)

// console.log(Object.getOwnPropertyDescriptors(Person.prototype))

for (var i = 0; i < 50; i++) {
  console.log(Person.randomPerson())
}
