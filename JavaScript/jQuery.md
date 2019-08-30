# jQuery

### CDN
- Google 的 CDN
```
<head>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs
/jquery/1.4.0/jquery.min.js"></script>
</head>
```
- Microsoft 的 CDN
```
<head>
<script type="text/javascript" src="http://ajax.microsoft.com/ajax/jquery
/jquery-1.4.min.js"></script>
</head>
```

### jQuery选择器
- 元素选择器：使用CSS选择器来选取HTML元素。例如：`$("tagName#id.class")`。
- 属性选择器：使用XPath表达式来选择带有给定属性的元素。
`$("[href]") `选取带有href属性的元素。
`$("[href='#']") `选取带有href值等于"#"的元素。
`$("[href!='a.jpg'][href$='.jpg']") `选取所有带有href值不等于"a.jpg"且以".jpg"结尾的元素。

### jQuery 名称冲突
jQuery.noConflict()方法：使用：`var jq=jQuery.noConflict()`，帮助您使用自己的名称（比如 jq）来代替 \$ 符号。

### jQuery常用方法

1.
- hide() 		隐藏HTML 元素
- show() 			显示 HTML 元素
- toggle() 		切换 hide() 和 show() 方法
- fadeIn()        淡入已隐藏的元素
- fadeOut()       淡出可见元素
- fadeToggle()    在 fadeIn() 与 fadeOut() 方法之间进行切换
- slideDown() 	向下滑动元素
- slideUp() 		向上滑动元素。
- slideToggle() 	在 slideDown() 与 slideUp() 方法之间进行切换

>参数：speed,callback
可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。
可选的 callback 参数是隐藏或显示完成后所执行的函数名称。

2.
fadeTo() 方法允许渐变为给定的不透明度（值介于 0 与 1 之间）
语法：$(selector).fadeTo(speed,opacity,callback);
必需的 opacity 参数将淡入淡出效果设置为给定的不透明度（值介于 0 与 1 之间）。


3.
animate() 方法用于创建自定义动画。

    $(selector).animate({params},speed,callback);
必需的 params 参数定义形成动画的 CSS 属性。
当使用 animate() 时，必须使用 Camel 标记法书写所有的属性名，比如，必须使用 paddingLeft 而不是 padding-left可以定义相对值（该值相对于元素的当前值）。需要在值的前面加上 += 或 -=可以把属性的动画值设置为 "show"、"hide" 或 "toggle"

4.
stop() 方法用于在动画或效果完成前对它们进行停止。
$(selector).stop(stopAll,goToEnd)

>有一种名为链接（chaining）的技术，允许我们在相同的元素上运行多条 jQuery 命令，一条接着另一条。如：

    $("#p1").css("color","red")
    .slideUp(2000)
    .slideDown(2000);

5.三个简单实用的用于 DOM 操作的 jQuery 方法：

- text()	设置或返回所选元素的文本内容
- html()	设置或返回所选元素的内容（包括 HTML 标记）
- val()	设置或返回表单字段的值

text()、html() 以及 val()，同样拥有回调函数。
回调函数由两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回您希望使用的字符串。

6.
attr()   获取,改变属性值，也提供回调函数。

7.添加新内容的四个 jQuery 方法：

- append()		在被选元素的结尾插入内容
- prepend()		在被选元素的开头插入内容
- after()			在被选元素之后插入内容
- before()		在被选元素之前插入内容

8.删除元素和内容的jQuery 方法：

- remove()		删除被选元素（及其子元素）可接受一个参数，允许您对被删元素进行过滤。
- empty()			从被选元素中删除子元素

9.干进行 CSS 操作的方法：

- addClass()		向被选元素添加一个或多个类
- removeClass()	从被选元素删除一个或多个类
- toggleClass()	对被选元素进行添加/删除类的切换操作
- css()			设置或返回样式属性
    - 返回指定的 CSS 属性的值：css("propertyname");
    - 设置指定的 CSS 属性：css("propertyname","value");
    - 设置多个 CSS 属性：css({"propertyname":"value","propertyname":"value",...});


10.jQuery 提供多个处理尺寸的重要方法：

- width() 		方法设置或返回元素的宽度（不包括内边距、边框或外边距）。
- height() 		方法设置或返回元素的高度（不包括内边距、边框或外边距）。
- innerWidth() 	方法返回元素的宽度（包括内边距）。
- innerHeight() 	方法返回元素的高度（包括内边距）。
- outerWidth() 	方法返回元素的宽度（包括内边距和边框）。
- outerHeight()   方法返回元素的高度（包括内边距和边框）。

11.向上遍历 DOM 树：

- parent() 		方法返回被选元素的直接父元素。
- parents() 		方法返回被选元素的所有祖先元素，它一路向上直到文档的根元素 (<html>)
- parentsUntil()  方法返回介于两个给定元素之间的所有祖先元素。

12.向下遍历 DOM 树的 jQuery 方法：

- children() 	方法返回被选元素的所有直接子元素。
- find() 		方法返回被选元素的后代元素，一路向下直到最后一个后代。

13.在 DOM 树进行水平遍历：

- siblings() 		方法返回被选元素的所有同胞元素。
- next() 			方法返回被选元素的下一个同胞元素。
- nextAll() 		方法返回被选元素的所有跟随的同胞元素。
- nextUntil() 	方法返回介于两个给定参数之间的所有跟随的同胞元素。

14.三个最基本的过滤方法是：

- first() 方法返回被选元素的首个元素。
- last() 方法返回被选元素的最后一个元素。
- eq() 方法返回被选元素中带有指定索引号的元素。
索引号从 0 开始，因此首个元素的索引号是 0 而不是 1。

>filter() 方法允许您规定一个标准。不匹配这个标准的元素会被从集合中删除，匹配的元素会被返回。
not() 方法返回不匹配标准的所有元素。

15.ajax

- load() 方法从服务器加载数据，并把返回的数据放入被选元素中。
语法：$(selector).load(URL,data,callback);
可选的 data 参数规定与请求一同发送的查询字符串键/值对集合。
可选的 callback 参数规定当load()方法完成后所要允许的回调函数。回调函数可以设置不同的参数：
    - responseTxt - 包含调用成功时的结果内容
    - statusTXT - 包含调用的状态
    - xhr - 包含 XMLHttpRequest 对象

- `$.get() `方法通过 HTTP GET 请求从服务器上请求数据。
`$.get(URL,callback);`
第二个参数是回调函数。第一个回调参数存有被请求页面的内容，第二个回调参数存有请求的状态。

- `$.post() `方法通过 HTTP POST 请求从服务器上请求数据。
$.post(URL,data,callback);
可选的 data 参数规定连同请求发送的数据。
可选的 callback 参数是请求成功后所执行的函数名。第一个回调参数存有被请求页面的内容，而第二个参数存有请求的状态。

- noConflict() 方法会释放会 $ 标识符的控制，这样其他脚本就可以使用它了。
也仍然可以通过全名替代简写的方式来使用 jQuery：



