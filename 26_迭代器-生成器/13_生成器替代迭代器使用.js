// 1.生成器来替代迭代器
// function* createArrayIterator (arr) {
//   // 1.3 第三种写法
//   // yield* 可迭代对象
//   yield* arr

//   // 1.2 第二种写法
//   // for (const item of arr) {
//   //   yield item
//   // }

//   // 1.1 第一种写法
//   // yield "abc" // { done: false, value: "abc"}
//   // yield "cba" // { done: false, value: "abc"}
//   // yield "nba" // { done: false, value: "abc"}
// }

// const names = ["abc", "cba", "nba"]
// const namesIterator = createArrayIterator(names)

// console.log(namesIterator.next())
// console.log(namesIterator.next())
// console.log(namesIterator.next())
// console.log(namesIterator.next())


// 2.创建一个函数，这个函数可以迭代一个范围内的数字
// 10 20
function* createRangeIterator (start, end) {
  let index = start
  while (index < end) {
    yield index++
  }

  // let index = start
  // return {
  //   next: function () {
  //     if (start < end) {
  //       return { done: false, value: index++ }
  //     } else {
  //       return { done: true, value: undefined }
  //     }
  //   }
  // }
}

const rangeIterator = createRangeIterator(10, 20)
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())


// 3.classroom案例
class Classroom {
  constructor(address, name, students) {
    this.address = address
    this.name = name
    this.students = students
  }

  entry (newStudent) {
    this.students.push(newStudent)
  }

  foo = () => {
    console.log("foo function")
  }

  // [Symbol.iterator] = function* () {
  //   yield* this.students
  // }

  *[Symbol.iterator] () {
    yield* this.students
  }
}

const classroom = new Classroom("3幢5楼200", "计算机教室", ["james", "kobe", "curry", "kobe"])
for (const item of classroom) {
  console.log(item)
}