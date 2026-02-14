# 随机微积分 (Stochastic Calculus)

## 1. 布朗运动 (Brownian Motion)
也称维纳过程 (Wiener Process)，记为 $W_t$。
### 1.1 性质
1.  $W_0 = 0$。
2.  **独立增量**: $W_t - W_s$ 独立于 $W_s$ (对于 $t > s$)。
3.  **正态增量**: $W_t - W_s \sim N(0, t-s)$。
4.  路径连续但处处不可微。

### 1.2 几何布朗运动 (GBM)
用于模拟股价 $S_t$。
$$
dS_t = \mu S_t dt + \sigma S_t dW_t
$$
-   $\mu$: 漂移项 (Drift)，预期收益率。
-   $\sigma$: 扩散项 (Diffusion)，波动率。
-   该方程的解表明股价服从对数正态分布。

## 2. 伊藤积分 (Itô Integral)
对随机过程的积分。
$$
I(t) = \int_0^t \Delta_u dW_u
$$
-   不同于黎曼积分（$dW_t$ 是剧烈波动的）。
-   它是鞅 (Martingale)，期望值为 0。
-   **伊藤等距 (Itô Isometry)**: $E[I(t)^2] = E[\int_0^t \Delta_u^2 du]$。

## 3. 伊藤引理 (Itô's Lemma)
随机微分方程 (SDE) 的“链式法则”。是金融数学的核心工具。
设 $x_t$ 服从伊藤过程 $dx_t = a_t dt + b_t dW_t$，函数 $f(x, t)$ 二阶可微。
则 $df(x_t, t)$ 的微分形式为：
$$
df = \left( \frac{\partial f}{\partial t} + \frac{\partial f}{\partial x} a_t + \frac{1}{2} \frac{\partial^2 f}{\partial x^2} b_t^2 \right) dt + \frac{\partial f}{\partial x} b_t dW_t
$$
**直观理解**: 泰勒展开保留二阶项。因为 $(dW_t)^2 = dt$（在均方意义下），二阶项不可忽略。

### 应用：推导 BSM 方程
假设期权价格 $V(S, t)$，利用伊藤引理展开 $dV$，结合对冲组合消除随机项 $dW_t$，得到无风险收益，从而建立偏微分方程。

## 4. 风险中性定价 (Risk-Neutral Pricing)
-   **吉尔萨诺夫定理 (Girsanov Theorem)**: 测度变换。
-   在风险中性测度 $\mathbb{Q}$ 下，所有资产的折现价格都是鞅。
-   衍生品价格 = 未来支付在 $\mathbb{Q}$ 下的期望值的折现。
    $$
    V_0 = e^{-rT} E^{\mathbb{Q}}[\text{Payoff}_T]
    $$
