- clip-path图形裁剪
```
<div class='content clip-sty'></div>
// 圆
.clip-sty{
  -webkit-clip-path: circle(95px at 100px 100px);
}
// 椭圆
.clip-sty{
  -webkit-clip-path: ellipse(80px 60px at 100px 100px);
}
// 圆角：inset使用四个值分别对应“上 右 下 左”的顺序，前4个值对应的是外边距，后4个值对应四个角的圆半径值。
.clip-sty{
  -webkit-clip-path:inset(20% 0 20% 0 round 0 0 25% 25%);
}
// 多边形
.clip-sty{
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
}
```
