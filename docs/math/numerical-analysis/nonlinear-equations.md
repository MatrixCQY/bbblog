# 非线性方程数值解法

## 1. 二分法 (Bisection Method)
基于介值定理，区间收敛。

## 2. 不动点迭代 (Fixed Point Iteration)
将 $f(x)=0$ 转化为 $x = g(x)$。
- 收敛条件: $|g'(x)| < 1$

## 3. 牛顿法 (Newton's Method)
利用切线逼近。
$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
$$
- 具有二阶收敛速度。

## 4. 割线法 (Secant Method)
用割线代替切线，不需要求导。

## 推荐资源
- [Numerical Analysis - Wolfram MathWorld](https://mathworld.wolfram.com/NumericalAnalysis.html)
