# Pandas 数据透视与可视化

## 1. 数据透视表 (Pivot Table)
类似于 Excel 的数据透视表。
```python
pd.pivot_table(df, values='Sales', index='Date', columns='Region', aggfunc=np.sum)
```

## 2. 堆叠与拆堆 (Stack/Unstack)
- **Stack**: 将列标签旋转为行索引（宽变长）。
- **Unstack**: 将行索引旋转为列标签（长变宽）。
- **Melt**: 将 DataFrame 从宽格式转换为长格式。

## 3. 基础绘图
Pandas 集成了 Matplotlib。
```python
df.plot(kind='line')
df.plot(kind='bar')
df.plot(kind='hist')
df.plot(kind='scatter', x='A', y='B')
```

## 推荐资源
- [Pandas Visualization](https://pandas.pydata.org/docs/user_guide/visualization.html)
