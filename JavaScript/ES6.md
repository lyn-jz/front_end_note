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


