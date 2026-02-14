# Pandas 数据分析

## 1. 数据清洗
- **处理缺失值**:
  - `dropna()`: 删除缺失值
  - `fillna(value)`: 填充缺失值
- **处理重复值**: `drop_duplicates()`

## 2. 数据选择与过滤
- `loc[]`: 基于标签索引
- `iloc[]`: 基于位置索引
```python
df.loc[df['Age'] > 30]
```

## 3. 数据合并
- `concat()`: 堆叠
- `merge()`: 类似 SQL 的 JOIN
```python
pd.merge(left, right, on='key')
```

## 4. 分组与聚合
```python
df.groupby('City')['Age'].mean()
```

## 5. 文件读写
- `read_csv()`, `to_csv()`
- `read_excel()`, `to_excel()`

## 推荐资源
- [Kaggle: Pandas Course](https://www.kaggle.com/learn/pandas)
