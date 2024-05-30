const weakSet = new WeakSet()

// 区别一：只能存放对象类型
// TypeError: Invalid value used in weak set
// weakSet.add(10)

// 强引用和弱引用的概念

// 区别二：对对象是弱引用  对GC(垃圾回收)来说不会因为你引用了就不回收
// 如果没有其他引用引用这个对象，那么GC可以回收该对象
let obj = {
  name: "why"
}

// weakSet.add(obj)

const set = new Set()
// 建立的是强引用
set.add(obj)

// 建立的是弱引用
weakSet.add(obj)

// 3.WeakSet的应用场景
const personSet = new WeakSet()
class Person {
  constructor() {
    personSet.add(this)
  }

  running () {
    if (!personSet.has(this)) {
      throw new Error("不能通过非构造方法创建出来的对象调用running方法")
    }
    console.log('running~', this)
  }
}

const p = new Person()
p.running()

p.running.call({ name: "why" })