// 节流的应用场景：(按一定频率触发)
//    1.监听页面的滚动事件
//    2.鼠标移动事件
//    3.用户频繁点击按钮操作  
//    4.游戏中的一些设计(固定时间内只能发射一次 发射频率)

function throttle (fn, interval) {
  // 1.记录上一次触发事件
  let lastTime = 0

  // 2.事件触发时，真正执行的函数
  const _throttle = function () {

    // 2.1 获取当前事件触发时的时间
    const nowTime = new Date().getTime()

    // 2.2 使用当前触发的时间和之前的时间间隔以及上一次开始的时间，计算出还剩余多长时间去触发函数
    const remainTime = interval - (nowTime - lastTime)
    if (remainTime <= 0) {
      // 2.3 真正触发函数
      fn()
      // 2.4 保留上次触发的时间
      lastTime = nowTime
    }
  }

  return _throttle
}