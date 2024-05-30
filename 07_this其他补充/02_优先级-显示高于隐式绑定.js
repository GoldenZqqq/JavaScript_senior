// var obj = {
//   name: 'obj',
//   foo: function () {
//     console.log(this)
//   }
// }

// obj.foo()

// 1.call/apply的显示绑定优先级高于隐式绑定
// obj.foo.call('abc')
// obj.foo.apply('abc')

// 2.bind的优先级高级隐式绑定
// var bar = obj.foo.bind('cba')
// bar()

// 3.bind更明显的比较
function foo () {
  console.log(this);
}

var obj = {
  name: 'obj',
  foo: foo.bind('aaa')
}

obj.foo()