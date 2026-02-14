# SQL 约束 (Constraints)

## 1. 常用约束
- **NOT NULL**: 字段不能为空。
- **UNIQUE**: 保证字段值唯一。
- **PRIMARY KEY**: 主键 (NOT NULL + UNIQUE)。
- **FOREIGN KEY**: 外键，引用另一张表的主键。
- **CHECK**: 检查条件是否满足。
- **DEFAULT**: 设置默认值。

## 2. 示例
```sql
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int CHECK (Age>=18),
    PRIMARY KEY (ID)
);
```

## 推荐资源
- [W3Schools: SQL Constraints](https://www.w3schools.com/sql/sql_constraints.asp)
