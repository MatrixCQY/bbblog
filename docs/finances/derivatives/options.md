# 期权 (Options)

## 1. 基本概念
期权赋予持有者在特定时间以特定价格买入或卖出标的资产的权利，但无义务。
-   **Call Option (看涨期权)**: 买入权。
-   **Put Option (看跌期权)**: 卖出权。
-   **Strike Price (行权价)**: $K$。
-   **Expiration Date (到期日)**: $T$。
-   **欧式 vs 美式**: 欧式仅到期日行权，美式随时行权。

## 2. 价值构成
$$
\text{Option Price} = \text{Intrinsic Value} + \text{Time Value}
$$
-   **内在价值**:
    -   Call: $\max(S - K, 0)$
    -   Put: $\max(K - S, 0)$
-   **时间价值**: 随时间流逝而衰减 (Time Decay)。

## 3. 定价模型
### 3.1 二叉树模型 (Binomial Tree)
离散时间模型。假设每个时间步，价格只能上涨 ($u$) 或下跌 ($d$)。
-   通过无套利原理构造复制组合。
-   风险中性概率: $p = \frac{e^{r\Delta t} - d}{u - d}$。

### 3.2 Black-Scholes-Merton (BSM) 模型
连续时间模型。假设股价服从几何布朗运动。
**看涨期权公式**:
$$
C = S N(d_1) - K e^{-rT} N(d_2)
$$
其中:
$$
d_1 = \frac{\ln(S/K) + (r + \sigma^2/2)T}{\sigma\sqrt{T}}
$$
$$
d_2 = d_1 - \sigma\sqrt{T}
$$
-   $N(\cdot)$: 标准正态分布累积分布函数。
-   $\sigma$: 隐含波动率 (Implied Volatility)。

## 4. 希腊字母 (Greeks)
衡量期权价格对各参数的敏感度。
1.  **Delta ($\Delta$)**: $\frac{\partial V}{\partial S}$。标的价格变动 1 单位，期权价格变动多少。
    -   Call: $0 < \Delta < 1$. Put: $-1 < \Delta < 0$.
    -   对冲比率。
2.  **Gamma ($\Gamma$)**: $\frac{\partial^2 V}{\partial S^2}$。Delta 对标的价格的敏感度（Delta 的加速度）。
    -   Gamma 最大处: 平值期权 (ATM)。
3.  **Theta ($\Theta$)**: $\frac{\partial V}{\partial t}$。时间流逝对期权价格的损耗。
    -   通常为负值 (Time Decay)。
4.  **Vega ($\nu$)**: $\frac{\partial V}{\partial \sigma}$。波动率对期权价格的影响。
    -   多头期权 Vega 为正。
5.  **Rho ($\rho$)**: $\frac{\partial V}{\partial r}$。利率敏感度。

## 5. 常用交易策略
### 5.1 单腿策略
-   **Long Call**: 看涨，杠杆做多。风险有限，收益无限。
-   **Covered Call (备兑开仓)**: 持有正股 + Short Call。增强收益，限制上方盈利。
-   **Protective Put**: 持有正股 + Long Put。保险策略。

### 5.2 价差策略 (Spreads)
-   **Bull Call Spread (牛市价差)**: Long 低行权价 Call + Short 高行权价 Call。
    -   降低成本，限制最大收益与亏损。
-   **Bear Put Spread (熊市价差)**: Long 高行权价 Put + Short 低行权价 Put。

### 5.3 波动率策略
-   **Straddle (跨式)**: Long ATM Call + Long ATM Put。
    -   赌大波动，方向不限。
-   **Iron Condor (铁鹰)**: 卖出宽跨式 + 买入更外层期权保护。
    -   赌震荡，赚取时间价值。
