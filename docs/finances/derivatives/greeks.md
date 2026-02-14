# 希腊字母 (The Greeks)

在期权交易中，Greeks 用于衡量期权价格对各种市场变量的敏感度。

## Delta ($\Delta$)

Delta 衡量期权价格对标的资产价格变动的敏感度。

$$
\Delta = \frac{\partial V}{\partial S}
$$

- 对于看涨期权 (Call): $0 \le \Delta \le 1$
- 对于看跌期权 (Put): $-1 \le \Delta \le 0$

## Gamma ($\Gamma$)

Gamma 衡量 Delta 对标的资产价格变动的敏感度（即 Delta 的变化率）。

$$
\Gamma = \frac{\partial^2 V}{\partial S^2}
$$

Gamma 对于多头（期权买方）通常是正的。

## Theta ($\Theta$)

Theta 衡量期权价格随时间流逝的衰减速度（时间价值损耗）。

$$
\Theta = \frac{\partial V}{\partial t}
$$

## Vega ($\nu$)

Vega 衡量期权价格对波动率 ($\sigma$) 变化的敏感度。

$$
\nu = \frac{\partial V}{\partial \sigma}
$$

*注意：Vega 不是真正的希腊字母。*
