# SQL 查询 (Queries)

## 1. 基本查询 (SELECT)
```sql
SELECT column1, column2 FROM table_name;
SELECT * FROM table_name;
```

## 2. 条件筛选 (WHERE)
```sql
SELECT * FROM table_name WHERE condition;
```
- 运算符: `=`, `<>`, `>`, `<`, `>=`, `<=`, `BETWEEN`, `LIKE`, `IN`.

## 3. 排序 (ORDER BY)
```sql
SELECT * FROM table_name ORDER BY column1 ASC, column2 DESC;
```

## 4. 插入、更新与删除 (DML)
- **INSERT INTO**: `INSERT INTO table_name (col1, col2) VALUES (val1, val2);`
- **UPDATE**: `UPDATE table_name SET col1 = val1 WHERE condition;`
- **DELETE**: `DELETE FROM table_name WHERE condition;`

## 推荐资源
- [SQLZoo: Interactive SQL Tutorial](https://sqlzoo.net/)
