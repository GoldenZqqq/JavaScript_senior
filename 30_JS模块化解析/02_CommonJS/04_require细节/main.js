// 情况一：X是核心模块
// const path = reuqire('path')
// const fs = require("fs")

// path.resolve()
// path.extname()

// fs.readFile()


// 情况二：X是路径  X是以./或../或/开头的
// 查找规则第一步：将X当作一个文件在对应的目录下查找
// 1.如果有后缀名，按照后缀名的格式查找对应的文件
// 2.如果没有后缀名，会按照如下顺序查找
//    2.1 直接查找文件X
//    2.2 查找X.js文件
//    2.3 查找X.json文件
//    2.4 查找X.node文件
// 第二步：如果没有找到对应的文件，将X作为一个目录
// 查找目录下面的index文件
//    1> 查找X/index.js
//    2> 查找X/index.json
//    3> 查找X/index.node
// 如果都没有找到，那么就会报错：not found
// const abc = require('./abc')
// console.log(abc.name)


// 情况三：X不是路径也不是核心模块
const axios = require("axoios")

// axios.get()

console.log(module.paths)