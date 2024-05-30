// 传统的面向对象的多态必须有三个前提：
// 1> 必须有继承(是多态的前提)
// 2> 必须有重写(子类重写父类的方法)
// 3> 必须有父类引用指向子类对象

class Shape {
	getArea() {
		console.log('getArea')
	}
}

class Rectangle extends Shape {
	getArea() {
		console.log('Rectangle getArea')
	}
}

class Circle extends Shape {
	getArea() {
		console.log('Rectangle getArea')
	}
}

var r = new Rectangle()
var c = new Circle()

// 多态：当对不同的数据类型进行同一个操作时，如果表现出来的行为(形态)不一样，那么就是多态的体现
function calcArea(shape: Shape) {
	console.log(shape.getArea())
}

calcArea(r)
calcArea(c)

export {}
