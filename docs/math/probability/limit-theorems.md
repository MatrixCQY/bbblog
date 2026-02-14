# 极限定理

## 1. 大数定律 (Law of Large Numbers)
- **弱大数定律 (WLLN)**: 依概率收敛。
  $$
  \lim_{n \to \infty} P(|\bar{X}_n - \mu| \ge \epsilon) = 0
  $$
- **强大数定律 (SLLN)**: 几乎处处收敛。
  $$
  P(\lim_{n \to \infty} \bar{X}_n = \mu) = 1
  $$

## 2. 中心极限定理 (Central Limit Theorem, CLT)
独立同分布 (i.i.d.) 的随机变量序列之和的标准化分布收敛于标准正态分布。
$$
\frac{\sum_{i=1}^n X_i - n\mu}{\sigma\sqrt{n}} \xrightarrow{d} N(0, 1)
$$

## 推荐资源
- [知乎: 怎样理解大数定律与中心极限定理](https://www.zhihu.com/question/22913867)
