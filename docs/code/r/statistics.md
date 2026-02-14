# R 统计分析基础

## 1. 描述性统计
- `summary(df)`: 最小值、最大值、中位数、均值等。
- `mean()`, `sd()`, `var()`, `cor()`.

## 2. 假设检验
- **T 检验**: `t.test(x, y)`
- **方差分析 (ANOVA)**: `aov(formula, data)`
- **卡方检验**: `chisq.test(table)`

## 3. 线性回归
```r
model <- lm(y ~ x1 + x2, data = df)
summary(model)
```
- $R^2$: 决定系数。
- P-value: 显著性检验。

## 4. 逻辑回归
```r
model <- glm(y ~ x, family = binomial, data = df)
```

## 推荐资源
- [Quick-R: Statistics](https://www.statmethods.net/stats/index.html)
