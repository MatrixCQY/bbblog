# Series 与 DataFrame

## 1. Series
一维数组，类似于带有索引的列表。
```python
s = pd.Series([1, 3, 5, np.nan, 6, 8])
```
- **属性**: `index`, `values`, `dtype`

## 2. DataFrame
二维表格数据结构，类似于 Excel 表格或 SQL 表。
```python
data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'City': ['New York', 'Los Angeles', 'Chicago']
}
df = pd.DataFrame(data)
```

## 3. 常用操作
- `df.head()`: 查看前几行
- `df.info()`: 查看数据摘要
- `df.describe()`: 描述性统计
- `df.shape`: 行列数
- `df.columns`: 列名

## 推荐资源
- [10 Minutes to pandas](https://pandas.pydata.org/docs/user_guide/10min.html)
