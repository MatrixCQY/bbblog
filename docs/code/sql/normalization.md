# SQL 规范化 (Normalization)

## 1. 为什么需要规范化？
- 减少数据冗余。
- 提高数据一致性。
- 避免异常（插入、更新、删除异常）。

## 2. 范式 (Normal Forms)
- **第一范式 (1NF)**: 列不可再分（原子性）。
- **第二范式 (2NF)**: 满足 1NF，且非主属性完全依赖于主键（消除部分依赖）。
- **第三范式 (3NF)**: 满足 2NF，且非主属性不传递依赖于主键（消除传递依赖）。
- **BCNF (Boyce-Codd Normal Form)**: 更强的 3NF。

## 推荐资源
- [GeeksforGeeks: Database Normalization](https://www.geeksforgeeks.org/introduction-of-database-normalization/)
