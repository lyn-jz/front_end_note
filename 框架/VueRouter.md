## Vue Router 解决的问题
- 监听 URL 的变化，并在变化前后执行相应的逻辑
- 不同的 URL 对应不同的组件
- 提供多种方式改变 URL 的 API

## 导航守卫
- 全局前置守卫：`router.beforeEach`。
- 全局解析守卫：`router.beforeResolve`。与`router.beforeEach`类似，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。
- 全局后置组件：`router.afterEach`。
- 路由独享的组件（路由配置的组件）：`beforeEnter`。
- 组件内的守卫
  - `beforeRouteEnter`：在渲染该组件的对应路由被comfirm前调用，该组件不能访问 this。
  - `beforeRouteUpdate`：在当前路由改变，但是该组件被复用时调用。
  - `beforeRouteLeave`：离开组件对应的路由时调用。

## 导航解析流程
1. 导航被触发。
1. 在失活的组件里调用离开守卫 beforeRouteLeave 。
1. 调用全局的 beforeEach 守卫。
1. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
1. 在路由配置里调用 beforeEnter。
1. 解析异步路由组件。
1. 在被激活的组件里调用 beforeRouteEnter。
1. 调用全局的 beforeResolve 守卫 (2.5+)。
1. 导航被确认。
1. 调用全局的 afterEach 钩子。
1. 触发 DOM 更新。
1. 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。

## 实现路由所需的特点
1.路由改变不会发送请求到服务端
2.路由改变浏览器的历史记录会留下记录
3.路由改变会触发hashchange事件

## hash模式和history模式区别
- hash模式：丑，无法使用锚点定位
通过使用#号来改变URL并且不用发送请求，是开发时默认的模式。一般通过监听onhashchange事件来知道哈希值的变化也就是URL的变化，然后可以加载对应的模块来响应。这个是比较传统的方法，兼容性比较好，回车刷新也可以加载对应页面。
- history模式：需要后端配合，IE9不兼容
的URL比较规范，不包含#号，和一般的URL一样。一般是通过pushState与replaceState替换URL。这个是h5的方法，兼容性相对差一点，在二级页面刷新会返回404，需要后端配置一下重定向。

## vue Router原理
在vueRouter的install函数中使用Vue.mixin，在beforeCreate的周期进行初始化：如果使用hash模式，就监听hashchange事件，在哈希值改变和初次加载的时候，调用路由守卫，然后根据结果看是否要加载对应的组件，改变 router-view 组件的内容。
router-link、$router、a href、浏览器前进后退、手动改URL会触发updateRoute，updateRoute会改变响应式数据Vue.util.defineReactive_route，响应式数据改变，触发router-view更新。

---
参考：  
- Vue Router官方文档