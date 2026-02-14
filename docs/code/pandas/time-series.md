# Pandas 时间序列分析

## 1. 时间戳 (Timestamp)
`pd.Timestamp` 是 Pandas 时间序列的核心。
```python
ts = pd.Timestamp('2023-01-01')
```

## 2. 日期范围 (Date Range)
生成时间索引。
```python
idx = pd.date_range('2023-01-01', periods=10, freq='D')
```
- **Freq**: 'D' (日), 'M' (月), 'H' (时), 'B' (工作日).

## 3. 重采样 (Resampling)
将时间序列从一个频率转换为另一个频率。
```python
df.resample('M').mean()  # 按月求均值
df.resample('W').sum()   # 按周求和
```

## 4. 移动窗口 (Rolling Window)
计算移动平均等统计量。
```python
df.rolling(window=3).mean()
```

## 推荐资源
- [Pandas User Guide: Time Series](https://pandas.pydata.org/docs/user_guide/timeseries.html)
