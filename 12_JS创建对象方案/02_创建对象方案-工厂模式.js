// 工厂模式：工厂函数(可以解决创建相似对象时大量重复代码的问题)
function createPerson (name, age, height, address) {
  var p = {}
  p.name = name
  p.age = age
  p.height = height
  p.address = address
  p.eating = function () {
    console.log(this.name + "在吃饭")
  }
  p.running = function () {
    console.log(this.name + "在跑步")
  }

  return p
}

var p1 = createPerson("张三", 18, 1.88, "上海")
var p2 = createPerson("李四", 20, 1.68, "北京")
var p3 = createPerson("王五", 23, 1.98, "广州")

// 工厂模式的缺点(获取不到对象最真实的类型)
console.log(p1, p2, p3)