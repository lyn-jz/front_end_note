
function Foo(property_num,element_num) {
  //添加可索引属性
  for (let i = 0; i < element_num; i++) {
      this[i] = `element${i}`
  }
  //添加常规属性
  for (let i = 0; i < property_num; i++) {
      let ppt = `property${i}`
      this[ppt] = ppt
  }
}
var bar = new Foo(10,10)
console.log(%HasFastProperties(bar));
delete bar.property2
console.log(%HasFastProperties(bar));