# C++ 现代特性指南

## 智能指针 (Smart Pointers)

C++11 引入了智能指针来自动管理内存。

### unique_ptr

独占所有权，不可复制，只能移动。

```cpp
#include <memory>
#include <iostream>

void demoUnique() {
    std::unique_ptr<int> p1 = std::make_unique<int>(10);
    // std::unique_ptr<int> p2 = p1; // 编译错误，不可复制
    std::unique_ptr<int> p2 = std::move(p1); // 转移所有权
    std::cout << *p2 << std::endl;
}
```

### shared_ptr

共享所有权，通过引用计数管理。

```cpp
#include <memory>

void demoShared() {
    std::shared_ptr<int> p1 = std::make_shared<int>(20);
    std::shared_ptr<int> p2 = p1; // 引用计数 +1
}
```

## Lambda 表达式

```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v = {1, 5, 3, 4, 2};
    
    // 使用 Lambda 排序
    std::sort(v.begin(), v.end(), [](int a, int b) {
        return a > b; // 降序
    });

    for(auto n : v) std::cout << n << " ";
    return 0;
}
```
