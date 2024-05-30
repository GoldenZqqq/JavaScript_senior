// js防抖与节流的区别与相同点：
//    都是为了防止统一内多次执行事件，消耗浏览器性能。
// 不同点：
//    防抖是在同一时间段执行多次，那么就清除前面的事件，执行最后一次；
//    节流是在同一时间段，如果事件没有超过指定的时间间隔那么就不去执行下一次；
// 防抖与节流的常见应用：
// 1）按钮的点击提交；
// 2）在input输入框中执行输入搜索事件;

// 防抖
function debounce (callback, delay) {
  var t = null
  return function () {
    clearTimeout(t)
    t = setTimeout(callback, delay)
  }
}
window.onscroll = debounce(function () {
  console.log('调用了一次')
}, 500)

// 节流;
function throttle (callback, duration) {
  var lastTime = new Date().getTime()
  return function () {
    var now = new Date().getTime()
    if (now - lastTime > duration) {
      callback()
      lastTime = now
    }
  }
}
window.onscroll = throttle(function () {
  console.log('调用了一次')
}, 500)