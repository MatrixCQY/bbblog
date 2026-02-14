# SQL 高级教程

## 1. 聚合函数
- `COUNT()`, `SUM()`, `AVG()`, `MAX()`, `MIN()`
- `GROUP BY`: 结合聚合函数，根据一个或多个列对结果集进行分组。
- `HAVING`: 筛选分组后的结果。

## 2. 子查询 (Subqueries)
嵌套在查询中的查询。
```sql
SELECT * FROM table1 WHERE column1 IN (SELECT column1 FROM table2);
```

## 3. 索引 (Indexes)
用于快速查找数据。
```sql
CREATE INDEX index_name ON table_name (column_name);
```

## 4. 事务 (Transactions)
- `BEGIN TRANSACTION`
- `COMMIT`
- `ROLLBACK`
ACID 属性: 原子性、一致性、隔离性、持久性。

## 推荐资源
- [MySQL 官方文档](https://dev.mysql.com/doc/)
