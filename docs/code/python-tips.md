# Python 编程技巧

## 列表推导式 (List Comprehensions)

Python 中优雅的列表生成方式：

```python
# 生成平方数列表
squares = [x**2 for x in range(10)]
print(squares)
# Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# 带条件的推导式
evens = [x for x in range(10) if x % 2 == 0]
print(evens)
# Output: [0, 2, 4, 6, 8]
```

## 装饰器 (Decorators)

用于修改函数行为的强大工具：

```python
import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)

slow_function()
```

## 上下文管理器 (Context Managers)

使用 `with` 语句自动管理资源：

```python
with open('example.txt', 'w') as f:
    f.write('Hello, World!')
# 文件会自动关闭，即使发生异常
```
