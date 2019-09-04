### ES6新特性
- 新增块级作用域(let,const)
- 新增一种基本数据类型(Symbol)
- 新增变量的解构赋值
- 对象和数组新增了扩展运算符
- 数组新增了一些API，如 isArray / from / of 方法;数组实例新增了 entries()，keys() 和 values() 等方法
- 函数参数允许设置默认值，引入了rest参数，新增了箭头函数
- 提供定义类的语法糖(class)
- 新增了模块化(import/export)
- 新增了 Set 和 Map 数据结构
- 原生提供 Proxy 构造函数，用来生成 Proxy 实例
- 新增了生成器(Generator)和遍历器(Iterator)
- Promise

### 箭头函数和普通函数
- 箭头函数不能作为构造函数，不能使用new
- 箭头函数没有原型
- 箭头函数不绑定arguments，使用rest参数代替
- 箭头函数不绑定this，会捕获所在上下文的this值作为自己的this值，通过call或者apply方法调用时，对this没影响

### async函数如何捕获错误
在async函数中使用try-catch，在try中使用await等待资源
```
async function backgroundEmail(user, message) {
  try {
    await email(user, message);
  } catch (err) {
    Bounce.rethrow(err, 'system');
  }
}
```

### 模块化
```
// ES6模块
// file a.js
export function a() {}
export function b() {}
// file b.js
export default function() {}
import {a, b} from './a.js'
import XXX from './b.js'

// CommonJS
// a.js
module.exports = {
 a: 1
}
// or
exports.a = 1
// b.js
var module = require('./a.js')
module.a // -> log 1

// AMD（AMD 推崇依赖前置、提前执行，CMD推崇依赖就近、延迟执行）
define(['./a', './b'], function(a, b) {
  a.do()
  b.do()
})
// CMD
define(function(require, exports, module) {
  var a = require('./a')
  a.doSomething()
  var b = require('./b')
  b.doSomething()
})
```

### ES6模块和CommonJS模块的差异？
- ES6模块自动采用严格模式。
- CommonJS模块的顶层this指向当前模块；ES6模块中顶层的this指向undefined。
- CommonJS模块支持动态导入；ES6模块不支持，import语句必须位于顶层作用域中。
- CommonJS模块是同步导入；ES6模块是异步导入。
- ES6模块是编译时输出接口，在编译时，就能确定模块的依赖关系，以及输入和输出的变量；CommonJS模块是运行时加载，在输入时加载整个模块，生成一个对象，然后再对象上面读取方法。
- CommonJS模块输出的是一个值的拷贝；ES6模块输出是对值的动态引用，不会缓存。

### Promise A+规范
1.  一个promise的当前状态只能是pending、fulfilled和rejected三种之一。状态改变只能是pending到fulfilled或者pending到rejected。状态改变不可逆。
2. promise的then方法接收两个可选参数，表示该promise状态改变时的回调(promise.then(onFulfilled, onRejected))。then方法返回一个promise，then 方法可以被同一个 promise 调用多次。
3. PS：Promise/A+并未规范race、all、catch方法，这些是ES6自己规范的。

### 实现Promise.finally
```
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};
```
