# 全纯函数 (Holomorphic Functions)

## 1. 导数与柯西-黎曼方程 (Cauchy-Riemann Equations)
函数 $f(z) = u(x,y) + iv(x,y)$ 在 $z_0$ 处可导的充要条件是 $u, v$ 在 $(x_0, y_0)$ 处可微，且满足 C-R 方程：
$$
\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}
$$

## 2. 解析函数
若 $f(z)$ 在区域 $D$ 内处处可导，则称 $f(z)$ 在 $D$ 内**解析** (Analytic) 或**全纯** (Holomorphic)。

## 3. 调和函数
解析函数的实部和虚部都是调和函数，即满足拉普拉斯方程 $\Delta u = 0$。

## 推荐资源
- [知乎: 复变函数/复分析的入门教材推荐](https://zhuanlan.zhihu.com/p/91184296)
