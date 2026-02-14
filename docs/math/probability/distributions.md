# 常用分布

## 1. 离散分布
| 分布名称 | 符号 | PMF $P(X=k)$ | 期望 $E[X]$ | 方差 $Var(X)$ |
| :--- | :--- | :--- | :--- | :--- |
| **伯努利分布** | $B(1, p)$ | $p^k(1-p)^{1-k}$ | $p$ | $p(1-p)$ |
| **二项分布** | $B(n, p)$ | $\binom{n}{k}p^k(1-p)^{n-k}$ | $np$ | $np(1-p)$ |
| **泊松分布** | $P(\lambda)$ | $\frac{\lambda^k}{k!}e^{-\lambda}$ | $\lambda$ | $\lambda$ |
| **几何分布** | $G(p)$ | $p(1-p)^{k-1}$ | $\frac{1}{p}$ | $\frac{1-p}{p^2}$ |

## 2. 连续分布
| 分布名称 | 符号 | PDF $f(x)$ | 期望 $E[X]$ | 方差 $Var(X)$ |
| :--- | :--- | :--- | :--- | :--- |
| **均匀分布** | $U(a, b)$ | $\frac{1}{b-a}$ | $\frac{a+b}{2}$ | $\frac{(b-a)^2}{12}$ |
| **指数分布** | $Exp(\lambda)$ | $\lambda e^{-\lambda x}$ | $\frac{1}{\lambda}$ | $\frac{1}{\lambda^2}$ |
| **正态分布** | $N(\mu, \sigma^2)$ | $\frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$ | $\mu$ | $\sigma^2$ |

## 推荐资源
- [Wikipedia: List of probability distributions](https://en.wikipedia.org/wiki/List_of_probability_distributions)
