// 争论：代码规范；

var obj1 = {
  name: 'obj1',
  foo: function () {
    console.log(this);
  }
}

var obj2 = {
  name: 'obj2'
};

// obj2.bar = obj1.foo
// obj2.bar()

// 间接函数引用-独立的函数调用-默认绑定
(obj2.bar = obj1.foo)()