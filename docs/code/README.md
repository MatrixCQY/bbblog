# 代码笔记

这里记录编程学习与实战代码。

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

### JavaScript 示例

```javascript
const greet = (name) => {
  return `Hello, ${name}!`;
};

console.log(greet('VuePress'));
```
