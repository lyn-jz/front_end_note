1,安装：koala或者安装sublime的插件，教程http://www.cnblogs.com/tangyuchen/p/5768881.html
2,注释：//(在css中不显示)或者/**/(在css中显示)
3,变量：@变量名:值
	@wid:30px;
	.text{
		width:@wid;
	}等于
	.text{
		width:30px;
	}
4,混合：用于兼容，如border-radius
	@wid:30px;
	.text{
		width:@wid;
		.border_01; //不带参数
		.border_02(10px);
		.border_03();//默认值
	}
	.border_01{
		border:2px solid grey;
	}
	.border_02(@border-width){
		border:yellow solid @border-width;
	}
	.border_03(@border-width:20px){
		border:red solid @border-width;
	}
	等于
	.text{
		width:30px;
		border:2px solid grey;
	}
5,匹配模式：
	.t(top,@w:5px,@c:#ccc){
		border-width:@w;
		border-color:@c transparent transparent transparent;
	}
	.t(bottom,@w:5px,@c:#ccc){
		border-width:@w;
		border-color:transparent transparent @c transparent;
	}
	.t(left,@w:5px,@c:#ccc){
		border-width:@w;
		border-color:transparent transparent transparent @c;
	}
	.t(right,@w:5px,@c:#ccc){
		border-width:@w;
		border-color:transparent @c transparent transparent;
	}
	.t(@_,@w:5px,@c:#ccc){
		width:0;
		height:0;
		overflow:hidden;
	}
	.sanjiao{
		.t(right,100px);
	}
6,运算：+，-，*
	@text_01:300px;
	.box_02{
		width:@text_01+20;
	}
7,嵌套规则
	<ul><li><a>a标签</a>li标签</li></ul>
	/*ul{}
	ul li{}
	ul li a{}*/
	ul{
		width:600px;
		list-style:none;
		background-color:green;
		li{
			background-color:red;
			a{
				color:blue;
				//&代表上一层选择器
				&:hover{
					color:grey;
				}
			}
		}
		span{
		//等同 ul span
		}
	}
8,@arguments变量：
	.border_arg(@w:30px,@c:red,@xx:solid){
		border:@arguments;
		//相当于border:@w @c @xx;
	}
	.text_arg{
		.border_arg(40px);
	}
9,避免编译：
	.text_03{
		width:calc(300px-30px);//width:~'calc(300px-30px)';
	}
	.text_03{
		width:270px;//width:calc(300px-30px);
	}



推荐Sass