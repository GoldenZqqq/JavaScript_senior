function foo () {
  var name = "foo"
  var age = 18

  function bar () {
    console.log(name)
    console.log(age)
  }
  return bar
}

var fn = foo()
fn()

// 防止内存泄漏
fn = null
foo = null

// fn()
// fn()
// fn()
// fn()
// fn()
