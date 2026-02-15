# 常微分方程初等解法 (Elementary ODEs)

## 1. 基本概念
-   **常微分方程 (ODE)**: 未知函数是一元函数的微分方程。
-   **阶 (Order)**: 方程中出现的最高阶导数的阶数。
-   **通解**: 含有 $n$ 个独立任意常数的解（$n$ 为阶数）。
-   **特解**: 确定了任意常数的解。

## 2. 一阶方程
一般形式: $y' = f(x, y)$.

### 2.1 可分离变量
$$
g(y) dy = h(x) dx \implies \int g(y) dy = \int h(x) dx + C
$$

### 2.2 齐次方程
$y' = \varphi(\frac{y}{x})$.
-   令 $u = y/x$，即 $y = ux$，$y' = u + xu'$.
-   转化为可分离变量方程: $u + xu' = \varphi(u)$.

### 2.3 一阶线性方程
$y' + p(x)y = q(x)$.
-   **常数变易法**: 先解齐次 $y' + p(x)y = 0$ 得 $y = Ce^{-\int p(x)dx}$.
-   设 $y = C(x)e^{-\int p(x)dx}$，代入原方程求 $C(x)$.
-   **通解公式**:
    $$
    y = e^{-\int p(x)dx} \left( \int q(x) e^{\int p(x)dx} dx + C \right)
    $$

### 2.4 伯努利方程 (Bernoulli Equation)
$y' + p(x)y = q(x)y^n$ ($n \ne 0, 1$).
-   令 $z = y^{1-n}$，转化为线性方程。

## 3. 可降阶的高阶方程
-   $y^{(n)} = f(x)$: 连续积分 $n$ 次。
-   $y'' = f(x, y')$: 令 $p = y'$，降为一阶 $p' = f(x, p)$.
-   $y'' = f(y, y')$: 令 $p = y'$，$y'' = p \frac{dp}{dy}$，降为 $p \frac{dp}{dy} = f(y, p)$.
