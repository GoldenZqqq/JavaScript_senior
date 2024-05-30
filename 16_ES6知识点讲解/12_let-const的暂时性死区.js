// 在一个代码块中，使用let/const声明的变量在声明之前，变量都是不可以访问的
// 这种现象称为 temporal dead zone(TDZ，暂时性死区)
var foo = "foo"

// if (true) {
//   console.log(foo)

//   let foo = "abc"
// }

function bar () {
  console.log(foo)

  let foo = "abc"
}

bar()


var name1 = "abc"
let name2 = "cba"
const name3 = "nba"

// 构建工具的基础上创建项目\开发项目 webpack/vite/rollup
// babel
// ES6 -> ES5

const info = { name: "why" }

info = { name: "kobe" }