const num1 = 100 // 十进制

const num2 = 0b100 // 二进制  binary
const num3 = 0o100 // 八进制  octonary
const num4 = 0x100 // 十六进制  hexadecimal(hex)

console.log(num1, num2, num3, num4)

// 大的数值的连接符(ES2021 ES12)
const num = 10_000_000_000_000
console.log(num)