// split()⽅法是对字符串的操作；splice()和slice()是对数组的操作。slice()也可⽤于字符串。
// 1.split(separator, limit)
// 第一个参数：分隔符，可以是字符串，也可以是正则表达式，必填。
// 第二个参数：表示分割后的数组最大长度，可选。
// split主要用于字符串的分割，可以根据某个字符把字符串拆分成多个数组
var str = "Front-end-bully"
strArr = str.split("-")
console.log(strArr)

// 2.splice(index,num,item1,item2,item3...)   
// 第一个参数：必选，从第几个索引值开始删除    
// 第二个参数：删除几个元素    
// 第三个参数：添加的元素 
// splice可根据坐标位置进行删除数组并返回长度，原有的数组改变，返回截取的内容
var a = [9, 10, 11, 12]
console.log(a.splice(1, 1))
console.log(a)


// 3.slice(start,end)
// slice可以创建一个由当前数组中的一项或多项组成的新数组，原有的数组不变
// 2个参数，如果只有一个参数，则会截取从start开始的到原数组最后的部分，2个参数的话是截取start到end之间
var b = [9, 10, 11, 12]
console.log(b.slice(1))
console.log(b)

// 返回值：
// 1、split()  返回⼀个字符串数组。
// 2、splice() 返回被删除的元素组成的数组 即 如果使⽤arr = arr.splice()的⽅法将会返回⼀个被截取的部分，⽽arr.splice()后再调⽤arr将会返回⼀个截取后的
// 新数组。
// 3、slice() 返回⼀个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。

// 注意：
// 1、splice() ⽅法与 slice() ⽅法的作⽤是不同的，splice() ⽅法会直接对数组进⾏修改，也就说使⽤了 demo.slice()⽅法之后demo还是demo，⽽使⽤了
// demo.splice()之后demo将发⽣改变。
// 2、split()和slice()⽅法⼀样，不会对原数组进⾏改变，想要获取改变后的数组需要进⾏赋值操作。即、demo = demo.slice(start,end

