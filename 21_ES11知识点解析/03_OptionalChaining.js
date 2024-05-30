// 可选链操作符
const info = {
  name: "why",
  friend: {
    name: "lilei",
    girlFriend: {
      name: "hmm"
    }
  }
}

// console.log(info.friend.girlFriend.name)
// if (info && info.friend && info.friend.girlFriend) {
//   console.log(info.friend.girlFriend.name)
// }

// ES11提供了可选链(Optional Chaining)
console.log(info?.friend?.girlFriend?.name)