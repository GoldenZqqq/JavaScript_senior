// ES11:控制合并运算符 ??

const foo = undefined
// const bar = foo || "default value"  // 当 foo 为 "" 或 0 时，也会返回default value
const bar = foo ?? "default value" // 只有当 foo 为 null 或 undefined 时，才会返回default value

console.log(bar)