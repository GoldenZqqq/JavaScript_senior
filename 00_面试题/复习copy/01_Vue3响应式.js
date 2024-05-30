
// ---------------------测试代码----------------------
const infoProxy = reactive({
  address: "广州市",
  height: 1.88
})
watchFn(() => {
  console.log(infoProxy.address)
})
infoProxy.address = "北京市"


const foo = reactive({
  name: 'foo'
})
watchFn(() => {
  console.log(foo.name)
})
foo.name = "bar"