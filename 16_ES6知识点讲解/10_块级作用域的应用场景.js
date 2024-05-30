const btns = document.getElementsByTagName('button')

// 以前的解决方案：
// for (var i = 0; i < btns.length; i++) {
//   (function (n) {
//     btns[i].onclick = function () {
//       console.log("第" + parseInt(n + 1) + "个按钮被点击")
//     }
//   })(i)
// }
// console.log(i)


// 现在有块级作用域以后的做法：
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    console.log("第" + parseInt(i + 1) + "个按钮被点击")
  }
}