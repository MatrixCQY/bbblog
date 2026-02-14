# C++ 内存管理

## 1. 动态内存分配
使用 `new` 和 `delete` 操作符在堆 (Heap) 上分配和释放内存。
```cpp
int* p = new int;
*p = 10;
delete p;

int* arr = new int[10];
delete[] arr;
```

## 2. RAII (Resource Acquisition Is Initialization)
资源获取即初始化。利用对象生命周期管理资源（如内存、文件句柄、互斥锁）。
- **智能指针** (`std::unique_ptr`, `std::shared_ptr`) 是 RAII 的典型应用。

## 3. 常见内存问题
- **内存泄漏 (Memory Leak)**: 分配后未释放。
- **悬空指针 (Dangling Pointer)**: 指向已释放的内存。
- **野指针 (Wild Pointer)**: 未初始化的指针。

## 推荐资源
- [C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)
