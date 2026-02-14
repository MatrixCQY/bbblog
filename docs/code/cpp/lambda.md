# C++ Lambda 表达式

## 1. 简介
Lambda 表达式是 C++11 引入的匿名函数特性，常用于回调函数或算法参数。

## 2. 语法
```cpp
[capture](parameters) -> return_type { body }
```
- **Capture**: `[]` (无捕获), `[=]` (值捕获), `[&]` (引用捕获), `[this]` (捕获当前对象).

## 3. 示例
```cpp
#include <vector>
#include <algorithm>
#include <iostream>

int main() {
    std::vector<int> v = {1, 5, 3, 4, 2};
    std::sort(v.begin(), v.end(), [](int a, int b) {
        return a > b; // 降序
    });
    
    int x = 10;
    auto add = [x](int y) { return x + y; };
    std::cout << add(5) << std::endl; // 15
    return 0;
}
```

## 推荐资源
- [CppReference: Lambda expressions](https://en.cppreference.com/w/cpp/language/lambda)
