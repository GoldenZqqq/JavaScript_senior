function double (num) {
  return num * 2
}

function square (num) {
  return num ** 2
}

var count = 10
var result = square(double(count))
console.log(result)

// 实现最简单的组合函数
function composeFn (m, n) {
  return function (num) {
    return n(m(num))
  }
}

var newFn = composeFn(double, square)
console.log(newFn(count))