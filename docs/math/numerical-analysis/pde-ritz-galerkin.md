# 偏微分方程的 Ritz-Galerkin 方法

## 1. 变分原理
将偏微分方程求解转化为泛函极值问题。

## 2. Ritz 方法
选择一组基函数，通过最小化能量泛函来确定系数。

## 3. Galerkin 方法
基于加权余量法 (Weighted Residual Method)。
要求残差与基函数正交。
$$
\int_{\Omega} R(u_h) \phi_i dx = 0
$$

## 4. 有限元方法 (Finite Element Method, FEM)
Ritz-Galerkin 方法在分片多项式基函数上的应用。

## 推荐资源
- [Finite Element Method - Wikipedia](https://en.wikipedia.org/wiki/Finite_element_method)
