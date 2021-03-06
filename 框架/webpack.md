### Webpack简述

webpack是JavaScript的模块打包工具。通过分析模块之间的依赖，最终将所有模块打包成一份或者多份代码包，供HTML直接使用。实质上，webpack只是提供了**打包功能**和一套**文件处理机制**，然后通过生态中的各种loader和plugin对代码进行预编译和打包。因此webpack具有高度的可拓展性，能更好的发挥社区生态的力量。

### 核心概念
- Entry: 入口文件，Webpack 会从该文件开始进行分析与编译；
- Output: 出口路径，打包后创建 bundler 的文件路径以及文件名；
- Module: 模块，在 Webpack 中任何文件都可以作为一个模块，会根据配置的不同的 Loader 进行加载和打包；
- Chunk: 代码块，可以根据配置，将所有模块代码合并成一个或多个代码块，以便按需加载，提高性能；
- Loader: 模块加载器，进行各种文件类型的加载与转换；
- Plugin: 拓展插件，可以通过 Webpack 相应的事件钩子，介入到打包过程中的任意环节，从而对代码按需修改；

### 模块机制和文件编译
- 文件编译：webpack规定了一套编译规则，通过loader和plugin，以管道的形式对文件字符串进行处理。
- 模块机制：webpack自己实现了一套模拟模块的机制，将其包裹在业务代码的外部，从而提供了一套模块机制。
```
(function (modules) {
  // 模拟 require 函数，从内存中加载模块；
  function __webpack_require__(moduleId) {
    // 缓存模块
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };
    // 执行代码；
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    // Flag: 标记是否加载完成；
    module.l = true;
    return module.exports;
  }
  return __webpack_require__(__webpack_require__.s = "./src/index.js");
})({
  "./src/index.js": function (module, __webpack_exports__, __webpack_require__) {
    // 使用 eval 执行编译后的代码，继续递归引用模块内部依赖；
    // 实际情况并不是使用模板字符串，这里是为了代码的可读性；
    eval(`
			__webpack_require__.r(__webpack_exports__);
			//
			var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("test", ./src/test.js");
		`);
  },
  "./src/test.js": function (module, __webpack_exports__, __webpack_require__) {
    // ...
  },
})
```

### 工作流程
1. 读取配置文件，按命令初始化配置参数，创建 Compiler 对象；
2. 调用插件的 apply 方法挂载插件监听，然后从入口文件开始执行编译；
3. 按文件类型，调用相应的 Loader 对模块进行编译，并在合适的时机点触发对应的事件，调用 Plugin 执行，最后再根据模块依赖查找到所依赖的模块，递归执行第三步；
4. 将编译后的所有代码包装成一个个代码块 (Chuck)， 并按依赖和配置确定 输出内容。这个步骤，仍然可以通过 Plugin 进行文件的修改;
5. 最后，根据 Output 把文件内容一一写入到指定的文件夹中，完成整个过程；

### Webpack 性能优化
1. 减少 Webpack 打包时间
- 优化 Loader 文件搜索范围（如babel-loader，不处理node_module，编译过的文件缓存起来）
- HappyPack：将 Loader 的同步执行转换为并行的
- DllPlugin 可以将特定的类库提前打包然后引入。
- 代码压缩：webpack4已经开启 UglifyJS 功能。
2. 减少 Webpack 打包后的文件体积
- 按需加载：大型类库、路由等
- Scope Hoisting：启用 optimization.concatenateModules，把打包出来的模块合并到一个函数中去。
- Tree Shaking：删除项目中未被引用的代码。不可使用commonJS，要将某些文件标记为副作用。

