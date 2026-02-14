# SQL 连接 (Joins)

## 1. INNER JOIN
返回两个表中匹配的行。
```sql
SELECT * FROM table1
INNER JOIN table2 ON table1.id = table2.table1_id;
```

## 2. LEFT JOIN
返回左表的所有行，以及右表中匹配的行。
```sql
SELECT * FROM table1
LEFT JOIN table2 ON table1.id = table2.table1_id;
```

## 3. RIGHT JOIN
返回右表的所有行，以及左表中匹配的行。

## 4. FULL OUTER JOIN
只要其中一个表存在匹配，就返回行。

## 5. UNION 操作符
合并两个或多个 SELECT 语句的结果集。

## 推荐资源
- [Runoob: SQL 连接](https://www.runoob.com/sql/sql-join.html)
