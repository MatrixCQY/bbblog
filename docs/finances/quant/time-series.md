# 时间序列分析 (Time Series Analysis)

## 1. 基础概念
### 1.1 平稳性 (Stationarity)
金融时间序列分析通常要求数据是平稳的。
-   **弱平稳**: 均值 $E[r_t] = \mu$ 和自协方差 $Cov(r_t, r_{t-l}) = \gamma_l$ 不随时间变化。
-   **非平稳处理**: 差分 (Differencing)。股价通常是非平稳的（随机游走），但收益率（对数差分）通常是平稳的。
-   **单位根检验**: Augmented Dickey-Fuller (ADF) Test。如果存在单位根，序列不平稳。

### 1.2 自相关 (Autocorrelation)
-   **ACF (自相关函数)**: 衡量 $r_t$ 与 $r_{t-l}$ 的线性关系。
-   **PACF (偏自相关函数)**: 剔除中间滞后项影响后的相关性。

## 2. ARMA 模型
用于建模均值方程。
### 2.1 自回归模型 AR(p)
当前值取决于过去 $p$ 期值。
$$
r_t = \phi_0 + \phi_1 r_{t-1} + \dots + \phi_p r_{t-p} + a_t
$$
-   PACF 在 $p$ 阶截尾。

### 2.2 滑动平均模型 MA(q)
当前值取决于过去 $q$ 期的白噪声误差。
$$
r_t = \mu + a_t + \theta_1 a_{t-1} + \dots + \theta_q a_{t-q}
$$
-   ACF 在 $q$ 阶截尾。

### 2.3 ARIMA(p, d, q)
差分整合移动平均自回归模型。$d$ 为差分次数。

## 3. 波动率建模 (GARCH)
金融资产收益率具有**波动率聚集 (Volatility Clustering)** 特征：大波动后往往跟着大波动。
### 3.1 ARCH(m) 模型
Engle (1982)。假设方差 $\sigma_t^2$ 依赖于过去残差的平方。
$$
\sigma_t^2 = \alpha_0 + \alpha_1 a_{t-1}^2 + \dots + \alpha_m a_{t-m}^2
$$

### 3.2 GARCH(m, s) 模型
Bollerslev (1986)。方差还依赖于过去的方差。最常用的是 **GARCH(1,1)**:
$$
\sigma_t^2 = \alpha_0 + \alpha_1 a_{t-1}^2 + \beta_1 \sigma_{t-1}^2
$$
-   $\alpha_1 + \beta_1 < 1$: 保证平稳性。
-   **长期波动率**: $\sigma^2 = \frac{\alpha_0}{1 - \alpha_1 - \beta_1}$。

## 4. 协整 (Cointegration)
如果两个非平稳序列的线性组合是平稳的，则称它们存在协整关系。
-   **应用**: 配对交易 (Pairs Trading)。当价差偏离均值时进行均值回归交易。
