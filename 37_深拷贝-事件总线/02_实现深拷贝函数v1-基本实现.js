function isObject (value) {
  const valueType = typeof value
  return (value !== null) && (valueType === "object" || valueType === "function")
}

function deepClone (originValue) {
  // 判断传入的originValue是否是一个对象类型
  if (!isObject(originValue)) {
    return originValue
  }

  const newObj = {}
  for (const key in originValue) {
    newObj[key] = deepClone(originValue[key])
  }

  return newObj
}


// -------------------------测试代码-----------------------------
const obj = {
  name: "why",
  age: 18,
  friend: {
    name: "james",
    address: {
      city: "上海"
    }
  }
}

const newObj = deepClone(obj)
console.log(newObj === obj)

obj.friend.name = "kobe"
obj.friend.address.city = "成都"
console.log(newObj)