
function strToArray(str, bufferView) {
  let i = 0
  const len = str.length
  for (; i < len; ++i) {
    bufferView[i] = str.charCodeAt(i);
  }
  return bufferView;
}
function foo() {
  let i = 0
  let str = 'test V8 GC'
  let buffer = new ArrayBuffer(str.length * 2)
  let bufferView = new Uint16Array(buffer);
  while (i++ < 1e5) {
    strToArray(str,bufferView);
  }
}
foo()