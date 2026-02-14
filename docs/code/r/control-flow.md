# R 流程控制与函数

## 1. 条件语句
```r
x <- 10
if (x > 0) {
  print("Positive")
} else if (x < 0) {
  print("Negative")
} else {
  print("Zero")
}
```

## 2. 循环结构
- **For Loop**:
  ```r
  for (i in 1:5) {
    print(i)
  }
  ```
- **While Loop**:
  ```r
  while (condition) {
    # do something
  }
  ```
- **Repeat Loop**: 需要 `break` 跳出。

## 3. 函数定义
```r
my_function <- function(arg1, arg2) {
  result <- arg1 + arg2
  return(result)
}
```

## 4. apply 家族
`apply`, `lapply`, `sapply`, `tapply` - 向量化操作，比循环更高效。

## 推荐资源
- [R for Data Science: Functions](https://r4ds.had.co.nz/functions.html)
