var p1 = {
  name: '张三',
  age: 18,
  height: 1.88,
  address: '上海',
  eating: function () {
    console.log(this.name + "在吃饭")
  },
  running: function () {
    console.log(this.name + "在跑步")
  }
}

var p2 = {
  name: '李四',
  age: 20,
  height: 1.68,
  address: '北京',
  eating: function () {
    console.log(this.name + "在吃饭")
  },
  running: function () {
    console.log(this.name + "在跑步")
  }
}

var p3 = {
  name: '王五',
  age: 23,
  height: 1.98,
  address: '广州',
  eating: function () {
    console.log(this.name + "在吃饭")
  },
  running: function () {
    console.log(this.name + "在跑步")
  }
}