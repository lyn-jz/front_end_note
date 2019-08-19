### vue生命周期的理解
- 创建前/后（beforeCreate/created）： 
    - beforeCreate阶段，vue实例的挂载元素el和数据对象data都为undefined，还未初始化。
    - created阶段，vue实例的data有了，el还没有。
- 载入前/后（beforeMount/mounted）：
    - beforeMount阶段，vue实例的el和data都初始化了，但挂载元素为虚拟的dom节点，data.message还未替换。
    - mounted阶段，vue实例挂载完成，data.message成功渲染。
- 更新前/后（beforeUpdate/updated）：
    - 当data变化时，会触发beforeUpdate和updated方法。
- 销毁前/后（beforeDestroy/destroy）：
    - 在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在。

### Vue-router，hash和history区别
- hash通过使用#号来改变URL并且不用发送请求，是开发时默认的模式。一般通过监听onhashchange事件来知道哈希值的变化也就是URL的变化，然后可以加载对应的模块来响应，实现按需加载。这个是比较传统的方法，兼容性比较好，回车刷新也可以加载对应页面。

- history模式的URL比较规范，不包含#号，和一般的URL一样。一般是通过pushState与replaceState替换URL。这个是h5的方法，兼容性相对差一点，在二级页面刷新会返回404，需要后端配置一下重定向。

### 怎么自定义指令

- 全局指令：使用Vue.directive方法，将指令名和有钩子函数方法的对象作为参数
- 局部指令：在组件中directives属性定义，使用组件名作为键，值为有钩子函数方法的对象

### 钩子函数
- bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
- inserted：被绑定元素插入父节点时调用。
- update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。
- componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
- unbind：只调用一次，指令与元素解绑时调用。

### 实现双向绑定

Vue内部使用Object.defineProperty()实现数据劫持，通过这个函数可以监听到set和get事件。再结合发布者订阅者模式。

### 实现双向绑定 Proxy 与 Object.defineProperty 相比优劣如何?
- Object.defineProperty 的作用是劫持一个对象的属性，劫持属性的getter和setter方法，在对象的属性发生变化时进行特定的操作。而 Proxy 劫持的是整个对象。
- Proxy 会返回一个代理对象，我们只需要操作新对象即可，而 Object.defineProperty  只能遍历对象属性直接修改。
- Object.defineProperty 不支持数组，更准确的说是不支持数组的各种API，因为如果仅仅考虑arry[i] = value 这种情况，是可以劫持的，但是这种劫持意义不大。而 Proxy 可以支持数组的各种API。
- 尽管 Object.defineProperty 有诸多缺陷，但是其兼容性要好于 Proxy.

### v-show与v-if的区别
- v-if是动态的向DOM树内添加或者删除DOM元素；v-show是通过设置DOM元素的display样式属性控制显隐；
- v-if切换有一个局部编译/卸载的过程（切换过程中合适地销毁和重建内部的事件监听和子组件）； v-show只是简单的基于css切换；
- v-if是惰性的，初始条件为假则什么也不做，只有在条件第一次变为真时才开始局部编译; v-show是在任何条件下（首次条件是否为真）都被编译，然后被缓存，而且DOM元素保留；
- 性能消耗：v-if有更高的切换消耗；v-show有更高的初始渲染消耗；
- 使用场景：v-if适合运营条件不大可能改变；v-show适合频繁切换。

