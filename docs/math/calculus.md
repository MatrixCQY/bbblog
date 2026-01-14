# 微积分笔记

## 极限 (Limits)

极限是微积分的基础。形式化定义如下：

对于任意 $\epsilon > 0$，存在 $\delta > 0$，使得当 $0 < |x - a| < \delta$ 时，有 $|f(x) - L| < \epsilon$。

$$
\lim_{x \to a} f(x) = L
$$

## 导数 (Derivatives)

导数描述了函数的变化率。

定义：
$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

常见导数公式：
- $(x^n)' = nx^{n-1}$
- $(\sin x)' = \cos x$
- $(e^x)' = e^x$

## 积分 (Integrals)

微积分基本定理建立了导数与积分之间的联系：

$$
\int_a^b f(x) dx = F(b) - F(a)
$$

其中 $F'(x) = f(x)$。
