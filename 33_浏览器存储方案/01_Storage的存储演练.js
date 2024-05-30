const loginBtn = document.querySelector("button")

loginBtn.onclick = function () {
  // localStorage: 本地存储，提供的是一种永久性的存储方式，在关闭掉网页重新打开时，存储内容依旧保留
  localStorage.setItem("name", "localStorage")
  // sessionStorage: 会话存储，提供的是本次会话的存储，在关闭掉会话时，存储的内容会被清除
  sessionStorage.setItem("name", "sessionStorage")
}