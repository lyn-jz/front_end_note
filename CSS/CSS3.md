# CSS3新特性

边框圆角、边框图片、背景起始位置&切割&大小、文本、阴影、盒模型
渐变、rgba、变换、过渡、动画、列布局、媒体查询
- 新属性：
  - 边框：border-radius、border-image
  - 背景：background-origin、background-clip、background-size
  - 文本：word-wrap、text-overflow、text-shadow
  - 其他：box-shadow、box-sizing
- 颜色属性值：linear-gradient水平渐变、rgba
- 定义字体：@font-face
- 选择器：
  - 伪类选择器：:E:only-of-type、E:only-child、E:first-child、E:last-child、E:nth-child(n)、E:nth-last-child(n)、E:nth-of-type(n)、E:nth-last-of-type(n)、E:empty、E:target、E:enabled、E:disabled
  - 伪元素选择器:E::before、E::after、E::first-letter、E::first-line、E::selection

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

- transform：变换(元素中心默认为元素的中心点)
  - rotate(deg)：元素和坐标轴旋转(正值是顺时针)
  - skew(xdeg, ydeg)：扭曲(角度倾斜)
  - scale(x, y)：缩放
  - translate(x, y)：位移
- transform-origin：元素中心
- transition：过渡(property duration timing-function delay)
  - property：元素属性，可以为all
  - duration：过渡时间，s是单位
  - timing-function：过渡函数
  - delay：延迟时间
- @keyframes：定义动画
- animation：动画
  - animation-name：动画名
  - animation-duration：播放时间
  - animation-timing-function：播放方式
  - animation-delay：开播时间
  - animation-iteration-count：播放次数(number/infinite无限)
  - animation-direction：播放方向(normal/alternate奇数次反方向播放)
  - animation-play-state：播放状态(running/paused)
  - animation-fill-mode：动画结束时停止状态
    - none：未执行动画前状态
    - forwards：最后一帧
    - backwards：第一帧
    - both：(根据animation-direction轮执行forwards和backwards)


