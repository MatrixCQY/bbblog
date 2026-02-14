# 风险管理 (Risk Management)

## 1. 风险分类
-   **市场风险 (Market Risk)**: 价格波动（股价、利率、汇率、商品）。
-   **信用风险 (Credit Risk)**: 对手方违约。
-   **操作风险 (Operational Risk)**: 内部流程、系统故障、欺诈。
-   **流动性风险 (Liquidity Risk)**: 无法及时变现。

## 2. 在险价值 (Value at Risk, VaR)
### 2.1 定义
在给定的置信水平 $\alpha$（如 99%）和持有期 $T$（如 10 天）下，资产组合最大可能的损失。
$$
P(\text{Loss} > \text{VaR}) = 1 - \alpha
$$
例如：1天 99% VaR 为 100万，意味着只有 1% 的概率一天亏损超过 100万。

### 2.2 计算方法
1.  **参数法 (Variance-Covariance Method)**:
    -   假设收益率服从正态分布 $N(\mu, \sigma^2)$。
    -   $\text{VaR} = \text{Value} \times (\mu - z_{\alpha} \sigma)$。
    -   优点：计算简单。缺点：无法捕捉肥尾 (Fat Tails) 和非线性（期权）。
2.  **历史模拟法 (Historical Simulation)**:
    -   利用过去 $N$ 天的历史数据，模拟当前的损益分布，取分位数。
    -   优点：不假设分布。缺点：依赖历史，无法预测黑天鹅。
3.  **蒙特卡洛模拟 (Monte Carlo Simulation)**:
    -   生成成千上万条价格路径，计算损益分布。
    -   优点：适用于复杂衍生品。缺点：计算量大。

## 3. 预期亏损 (Expected Shortfall, ES)
也称 Conditional VaR (CVaR)。
-   **VaR 的缺陷**: 不满足次可加性（Sub-additivity），不是一致性风险度量；无法衡量超过 VaR 阈值后的损失程度。
-   **ES 定义**: 在损失超过 VaR 的条件下的平均损失。
    $$
    ES = E[\text{Loss} | \text{Loss} > \text{VaR}]
    $$
-   ES 是一致性风险度量，Basel III 已转向使用 ES。

## 4. 压力测试 (Stress Testing)
评估极端市场情景下的损失。
-   **情景分析**: 假设 2008 年金融危机重演，组合会亏多少？
-   **反向压力测试**: 造成银行倒闭需要什么样的市场冲击？
