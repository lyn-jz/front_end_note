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

### Virtual Dom

Virtual Dom是JS对象结构表示的DOM树的结构。

### Virtual Dom算法

vDom算法使用树的深度遍历。在遍历时，会给每个节点添加索引，便于最后渲染差异。同时比较同层节点。具体比较方法是
- 先判断新旧节点是否相同，不同则代表需要替换旧节点，并且不用遍历新旧节点的子元素。
- 如果节点相同，则比较属性。遍历旧属性列表，查看是否有被删除的属性；遍历新属性列表，判断是否有属性值发生变化，同时查找出新增属性。再深度遍历子元素。
- 最后根据得出的差异进行局部更新

### 实现双向绑定

vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。具体步骤：
- 对观察的数据进行递归遍历，修改setter和getter，当为对象的某个值赋值的时候，就会触发setter，也就能监听到数据的变化
- 编译时解析模板指令，将模板中的变量替换成数据，再初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变化，收到通知，更新视图

### 实现双向绑定 Proxy 与 Object.defineProperty 相比优劣如何?
- Object.defineProperty 的作用是劫持一个对象的属性，劫持属性的getter和setter方法，在对象的属性发生变化时进行特定的操作。而 Proxy 劫持的是整个对象。
- Proxy 会返回一个代理对象，我们只需要操作新对象即可，而 Object.defineProperty 只能遍历对象属性直接修改。
- Object.defineProperty不支持数组，更准确的说是不支持数组的各种API，因为如果仅仅考虑arry[i] = value 这种情况，是可以劫持的，但是这种劫持意义不大。而 Proxy 可以支持数组的各种API。
- 尽管 Object.defineProperty 有诸多缺陷，但是其兼容性要好于 Proxy.

### 怎么自定义指令

- 全局指令：使用Vue.directive方法，将指令名和有钩子函数方法的对象作为参数
- 局部指令：在组件中directives属性定义，使用组件名作为键，值为有钩子函数方法的对象

### 钩子函数
- bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
- inserted：被绑定元素插入父节点时调用。
- update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。
- componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
- unbind：只调用一次，指令与元素解绑时调用。

### v-show与v-if的区别
- v-if是动态的向DOM树内添加或者删除DOM元素；v-show是通过设置DOM元素的display样式属性控制显隐；
- v-if切换有一个局部编译/卸载的过程（切换过程中合适地销毁和重建内部的事件监听和子组件）； v-show只是简单的基于css切换；
- v-if是惰性的，初始条件为假则什么也不做，只有在条件第一次变为真时才开始局部编译; v-show是在任何条件下（首次条件是否为真）都被编译，然后被缓存，而且DOM元素保留；
- 性能消耗：v-if有更高的切换消耗；v-show有更高的初始渲染消耗；
- 使用场景：v-if适合运营条件不大可能改变；v-show适合频繁切换。

### 组件通信
1. props+v-bind/$emit+v-on:仅适用父子组件
2. $emit/$on：通过一个空的vue实例作为事件中心，用于触发事件和监听事件，可以应用于任何组件通信
3. vuex
4. $attrs/$listeners，$attrs存放父组件中绑定的非props属性，$listeners存放父组件中绑定的非原生事件,用于跨层级组件通信
5. $parent/$children与ref：在子组件上使用ref属性，则可以通过this.$ref.属性名访问子组件的数据，$parent/$children：访问父、子实例

### mvvm

	在 MVVM 框架中，View(视图) 和 Modal(数据) 是不可以直接通讯的，在它们之间存在着ViewModal这个中间介充当着观察者的角色。当用户操作 View(视图)，ViewModal 感知到变化，然后通知 Modal 发生相应改变；反之当 Modal(数据) 发生改变，ViewModal 也能感知到变化，使 View 作出相应更新。这个一来一回的过程就是我们所熟知的双向绑定。