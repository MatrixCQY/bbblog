# 常微分方程数值解法

## 1. 单步法
- **Euler 方法**: 一阶精度。
  $$ y_{n+1} = y_n + h f(x_n, y_n) $$
- **改进 Euler 方法 (Heun's Method)**
- **Runge-Kutta 方法 (RK4)**: 四阶精度，最常用。

## 2. 多步法
- **Adams-Bashforth 方法**
- **Adams-Moulton 方法**

## 3. 刚性方程 (Stiff Equations)
解的不同分量变化速率差异巨大。
- 需要使用隐式方法。

## 推荐资源
- [Solve ODEs in Python](https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.odeint.html)
