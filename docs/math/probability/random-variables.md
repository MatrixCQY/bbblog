# 随机变量

## 1. 定义
随机变量是定义在样本空间上的实值函数 $X: \Omega \to \mathbb{R}$，且满足 $\{ \omega : X(\omega) \le x \} \in \mathcal{F}$。

## 2. 离散型随机变量
- 分布列: $P(X = x_k) = p_k$
- 常见分布: 0-1分布、二项分布、泊松分布、几何分布

## 3. 连续型随机变量
- 概率密度函数 (PDF): $f(x)$
- 分布函数 (CDF): $F(x) = \int_{-\infty}^x f(t) dt$
- 常见分布: 均匀分布、指数分布、正态分布

## 4. 数字特征
- **期望 (Expectation)**: $E[X]$
- **方差 (Variance)**: $Var(X) = E[(X - E[X])^2]$
- **协方差 (Covariance)**
- **相关系数 (Correlation Coefficient)**

## 推荐资源
- [Khan Academy: Random variables](https://www.khanacademy.org/math/statistics-probability/random-variables-stats-library)
