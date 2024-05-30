function debounce (fn, delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

function throttle (fn, interval) {
  let lastTime = 0
  return function (...args) {
    const nowTime = new Date().getTime()
    const remainTime = interval - (nowTime - lastTime)
    if (remainTime <= 0) {
      fn.apply(this, args)
      lastTime = nowTime
    }
  }
}

// function throttle (fn, interval, options = { leading: true, trailing: false }) {
//   const { leading, trailing } = options
//   let lastTime = 0
//   let timer = null

//   return function (...args) {
//     const nowTime = new Date().getTime()
//     if (!lastTime && !leading) {
//       lastTime = nowTime
//     }

//     const remainTime = interval - (nowTime - lastTime)
//     if (remainTime <= 0) {
//       if (timer) {
//         clearTimeout(timer)
//         timer = null
//       }
//       fn.apply(this, args)
//       lastTime = nowTime
//       return
//     }

//     if (trailing && !timer) {
//       timer = setTimeout(() => {
//         fn.apply(this, args)
//         timer = null
//         lastTime = !leading ? 0 : new Date().getTime()
//       }, remainTime)
//     }
//   }
// }