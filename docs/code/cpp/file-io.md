# C++ 文件操作

## 1. 文件流类
- `ifstream`: 用于读取文件。
- `ofstream`: 用于写入文件。
- `fstream`: 同时支持读写。

## 2. 打开与关闭文件
```cpp
#include <fstream>
#include <iostream>

int main() {
    std::ofstream outfile("test.txt");
    if (outfile.is_open()) {
        outfile << "Hello File IO" << std::endl;
        outfile.close();
    }
    return 0;
}
```

## 3. 读取文件
```cpp
std::string line;
std::ifstream infile("test.txt");
while (getline(infile, line)) {
    std::cout << line << '\n';
}
```

## 推荐资源
- [CPlusPlus: Input/Output with files](http://www.cplusplus.com/doc/tutorial/files/)
