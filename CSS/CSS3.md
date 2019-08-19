# CSS3新特性
- 新属性：
  - 边框：border-radius、border-image
  - 背景：background-origin、background-clip、background-size
  - 文本：word-wrap、text-overflow、text-shadow、
- 颜色属性值：linear-gradient水平渐变、rgba
- 定义字体：@font-face
- 选择器
- 动画

### 新属性、值等具体详情
- box-shadow: 阴影(水平位置x 垂直位置y 模糊半径 扩展半径 color 投影方式(inset或省略))
  - 模糊半径：正值，为零时不模糊
  - 扩展半径：正值代表扩大，负值代表缩小

- border-radius: 圆角半径(左上 右上 右下 左下)
- border-image：边框应用图片，参数如下
  - url
  - 切割宽度：上右下左
  - 延伸方式：round(平铺)、repeat(重复)、(拉伸)

- background-origin：背景图起始位置(border-box|padding-box|content-box)，背景是no-repeat时生效
- background-clip：背景向外裁剪裁剪位置(border-box|padding-box|content-box|no-clip)
- background-size：背景图大小(auto|长度值|百分比|cover|contain等比缩放至某一边紧贴容器边缘)

- linear-gradient：线性渐变(渐变方向 起始颜色 ... 结束颜色)
  - 渐变方向(顺时针)：0 deg(to top)、90 deg(to right)、180 deg(to bottom)、270 deg(to left)

- word-wrap: 长单词是否换行(normal|break-word)
- text-overflow：用...表示文本溢出(clip剪切|ellipsis)
  - 设置ellipsis属性时还需要设置white-space:nowrap;overflow:hidden;才能实现长文本溢出用...表示。
- text-shadow：文本阴影(x y blur color)
- @font-face：定义字体
```
@font-face {
  font-family: font_name;
  url: url
}
```
