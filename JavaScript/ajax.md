### ajax的定义和优点
AJAX 指异步 JavaScript 及 XML（Asynchronous JavaScript And XML）。
AJAX 最大的优点是在不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容。

### 使用ajax
1. 创建 XMLHttpRequest 对象(IE5和IE6使用ActiveX对象)
2. 调用对象的open方法设置请求类型、URL以及是否异步处理请求。
3. 使用对象的setRequestHeader方法设置请求头
4. 使用对象的onreadystatechange方法设置响应处于就绪状态执行的方法
5. 使用send发送请求

### readyState存有的XMLHttpRequest的状态
- 0：请求未初始化 (对象已创建)
- 1：服务器连接已建立 (正在向服务端发送请求)
- 2：请求已接收 (已接收服务器端的响应数据)
- 3：请求处理中 (正在解析数据)
- 4：请求已完成，且响应已就绪

### 写一个ajax函数
```
function ajax(url, funcSucc, funcFail){
  var xmlhttp = null;
  if(window.XMLHttpRequest){
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); // IE6, IE5
  }
  xmlhttp.open('GET',url,true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState == 4 ) {
      if(xmlhttp.status == 200)
        funcSucc(xmlhttp.responseText);
      else  if(funcFail) funcFail();
    }
  }
}
```

### 使用promise封装ajax
```
function ajax(url) {
  return new Promise(function(resolve,reject){
    const handler = function(){
			if (this.readyState!==4) {
				return;
			}
			if (this.status === 200) {
				resolve(this.response);
			} else {
				reject(new Error(this.statusText));
			}
		};
		const client = null;
		if (window.XMLHttpRequest) {
			client = new XMLHttpRequest();
		} else{
			client = new ActiveXObject("Microsoft.XMLHTTP")
		}
		client.open('GET',url);
		client.onreadystatechange = handler;
		client.send();
	});
}
```
