# 视图与存储过程

## 1. 视图 (Views)
虚拟表，基于 SQL 查询的结果集。
- **创建**: `CREATE VIEW view_name AS SELECT ...`
- **优点**: 简化复杂查询，增强安全性。

## 2. 存储过程 (Stored Procedures)
预编译的 SQL 代码块，可重复执行。
- **参数**: IN, OUT, INOUT。
```sql
CREATE PROCEDURE GetCustomers
AS
SELECT * FROM Customers;
GO;

EXEC GetCustomers;
```

## 3. 触发器 (Triggers)
在 INSERT/UPDATE/DELETE 之前或之后自动执行的特殊存储过程。

## 推荐资源
- [MySQL Stored Procedures](https://dev.mysql.com/doc/refman/8.0/en/stored-procedures.html)
