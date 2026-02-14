# 代码笔记

这里记录编程学习与实战代码。

## 目录
- **[C++ 教程](./cpp/basics.md)**: 基础语法、面向对象、STL、高级特性。
- **[数据结构与算法](./dsa/intro.md)**: 线性表、树与图、排序与查找算法。
- **[SQL 教程](./sql/intro.md)**: 数据库操作、复杂查询、连接、事务。
- **[R 语言教程](./r/intro.md)**: 统计分析、数据可视化 (ggplot2)。
- **[Pandas 教程](./pandas/intro.md)**: Python 数据分析、数据清洗、处理。

## 代码高亮演示

VuePress 默认支持 Prismjs 代码高亮。

### Python 示例

```python
def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

print([fibonacci(i) for i in range(10)])
```

### C++ 示例

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> v = {1, 2, 3, 4, 5};
    for (int i : v) {
        std::cout << i << " ";
    }
    return 0;
}
```
