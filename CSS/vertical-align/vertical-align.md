1,vertical-align支持的属性值

/* 关键字值 */
vertical-align: baseline;
vertical-align: sub;
vertical-align: super;
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: middle;
vertical-align: top;
vertical-align: bottom;

/* <长度> 值 */
vertical-align: 10em;
vertical-align: 4px;

/* <百分比> 值 */
vertical-align: 10%;

/* 全局值 */
vertical-align: inherit;
vertical-align: initial;
vertical-align: unset;

2,vertical-align和line-height之间的关系:百分比值
vertical-align的百分比值是相对于line-height计算的
{
  line-height: 30px;
  vertical-align: -10%;
}等于
{
  line-height: 30px;
  vertical-align: -3px;    /* = 30px * -10% */  
}

3,vertical-align和line-height的关系从HTML5文档声明开始的，因此，以下探讨的现象，都是在页面为HTML5声明前提下，类似下面的doctype:
<!doctype html>
<html>
假设,我们有一个<div>标签,然后,里面有一张<img>图片,会发现图片下面有一段空白空间
空白间隙:就跟图片前面或者后面有一个宽度为0的空格元素表现是一致的
新增文本,使文本inline-block化,换背景颜色,显示其占据的高度

(1)vertical-align默认的对齐方式是？
vertical-align默认值是baseline, 也就是基线对齐。
而基线是什么，基线就是字母X的下边缘
(2)后面hhh文字的高度从何而来？
而字符hhh本身是有高度的，于是，图片下面就留空了。而hhh文字的高度是由行高决定的。

解决方案:
	1. 让vertical-align失效
	图片默认是inline水平的，而vertical-align对块状水平的元素无感。因此，我们只要让图片display水平为block就可以了，我们可以直接设置display或者浮动、绝对定位等（如果布局允许）
	2. 使用其他vertical-align值
	比方说bottom/middle/top都是可以的。
	3. 直接修改line-height值
	下面的空隙高度，实际上是文字计算后的行高值和字母x下边缘的距离。因此，只要行高足够小，实际文字占据的高度的底部就会在x的上面，下面没有了高度区域支撑，自然，图片就会有容器底边贴合在一起了。比方说，我们设置行高5像素：
	4. line-height为相对单位，font-size间接控制
	如果line-height是相对单位，例如line-height:1.6或者line-height:160%之类，也可以使用font-size间接控制，比方说来个狠的，font-size设为大鸡蛋0, 本质上还是改变line-height值.