// 防抖的应用场景：(不断推迟)
//    1.输入框中频繁的输入内容，搜索或者提交信息
//    2.频繁的点击按钮，触发某个事件
//    3.监听浏览器滚动事件，完成某些特定操作
//    4.用户缩放浏览器的resize事件

// 节流的应用场景：(按一定频率触发)
//    1.监听页面的滚动事件
//    2.鼠标移动事件
//    3.用户频繁点击按钮操作  
//    4.游戏中的一些设计(固定时间内只能发射一次 发射频率)

function debounce (fn, delay) {
  // 1.定义一个定时器，保存上一次的定时器
  let timer = null

  // 2.真正执行的函数
  const _debounce = function () {
    // 取消上一次的定时器
    if (timer) clearTimeout(timer)
    // 延迟执行
    timer = setTimeout(() => {
      // 外部传入的真正要执行的函数
      fn()
    }, delay)
  }

  return _debounce
}