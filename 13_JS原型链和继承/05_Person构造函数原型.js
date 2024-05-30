function Person () {

}

// console.log(Person.prototype)
// console.log(Object.getOwnPropertyDescriptors(Person.prototype))

console.log(Person.prototype.__proto__) // 顶层原型
console.log(Person.prototype.__proto__.__proto__) // 顶层原型的__proto__属性为null
