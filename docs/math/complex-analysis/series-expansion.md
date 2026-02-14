# 复变函数的展开

## 1. 泰勒级数 (Taylor Series)
若 $f(z)$ 在圆盘 $|z - z_0| < R$ 内解析，则 $f(z)$ 可在该圆盘内展开为幂级数：
$$
f(z) = \sum_{n=0}^{\infty} c_n (z - z_0)^n
$$
其中 $c_n = \frac{f^{(n)}(z_0)}{n!}$。

## 2. 洛朗级数 (Laurent Series)
若 $f(z)$ 在圆环 $r < |z - z_0| < R$ 内解析，则：
$$
f(z) = \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n
$$
其中 $c_n = \frac{1}{2\pi i} \oint_C \frac{f(\zeta)}{(\zeta - z_0)^{n+1}} d\zeta$。

## 3. 奇点分类
- 可去奇点
- 极点
- 本性奇点

## 推荐资源
- [Bookdown: 复变函数笔记](https://bookdown.org/yifei/book/complex.html)
