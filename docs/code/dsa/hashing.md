# 哈希 (Hashing)

## 1. 散列函数
将任意长度的数据映射为固定长度的索引。
- **目标**: 均匀分布，减少冲突。

## 2. 冲突解决
- **开放寻址法 (Open Addressing)**: 线性探测、二次探测。
- **链地址法 (Chaining)**: 每个桶存储一个链表。

## 3. 应用
- **哈希表 (Hash Table/Map)**: 快速查找 $O(1)$。
- **MD5/SHA**: 加密哈希。
- **Bloom Filter**: 快速判断元素是否可能存在。

## 推荐资源
- [GeeksforGeeks: Hashing](https://www.geeksforgeeks.org/hashing-data-structure/)
